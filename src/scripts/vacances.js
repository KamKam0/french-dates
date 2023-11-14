const fetch = require("node-fetch")
const ms = require('@kamkam1_0/ms')
let index = require("../index")

/**
 * 
 * @param {number} year 
 * @param {string} zone 
 * @returns {object[]}
 */
module.exports = async (zone) => {
    if (zone) {
        zone = String(zone).toLocaleUpperCase()
        if (!['a', 'b', 'c', 'corse'].includes(zone.toLowerCase())) {
            return { etat: false, erreur: 'Zone invalide' }
        }
    }

    let data;

    try {
        data = await fetch('https://www.service-public.fr/particuliers/vosdroits/F31952')
        data = await data.text()
    } catch(err) {
        return { etat: false, erreur: "Erreur pour obtenir les données" }
    }
    
    let dataToHandle = data
    .split('Voir la version texte')[2]
    .split('<table class')[1]
    .split('</table>')[0]
    .split('<p>')
    .filter(rawData => rawData.includes('</p>'))
    .map(rawData => {
        return rawData.split('</p>')[0]
    })
    
    let zones = dataToHandle
    .slice(0, 4)
    .map(zone => {
        if (zone.includes(' ')) {
            return zone.split(' ')[1]
        }
        return zone
    })

    let dataToHandleWithoutZones = dataToHandle.slice(4)
    let referenceYear = new Date(Date.now()).getFullYear()
    const yearsToAnalyse = [
        referenceYear,
        referenceYear+1,
        referenceYear+2,
    ]

    let definitiveData = []
    let lastHolidays = {}

    dataToHandleWithoutZones.forEach(rawData => {
        if (yearsToAnalyse.find(yearToAnalyse => rawData.includes(yearToAnalyse))) {
            let rightDate = rawData.split('<sup></sup>')
            if (rightDate.length === 1) {
                rightDate = rightDate[0]
            } else {
                rightDate = rightDate.join('')
            }

            const splittedRightDate = rightDate.split(' ')

            let datesData = getDatesData(rightDate, splittedRightDate)
            
            let debut = new Date(`${datesData.yearBegin}-${datesData.monthBegin}-${datesData.dayBegin}T02:00:00.000Z`)
            let dateDebut = Date.parse(debut)
            if (datesData.dayEnd) {
                let fin = new Date(`${datesData.yearEnd}-${datesData.monthEnd}-${datesData.dayEnd}T02:00:00.000Z`)
                let dateFin = Date.parse(fin)
                let duree = dateFin - dateDebut
                let dureeTexte = ms(dateFin - dateDebut).trim()
                lastHolidays.dates.push({ debut, dateDebut, fin, dateFin, dureeTexte, duree, zones: [] })
            } else if (lastHolidays.name?.includes('Rentrée')) {
                lastHolidays.dates.push({ end: debut, dateFin: dateDebut, zones: [] })
            } else {
                lastHolidays.dates.push({ debut, dateDebut, zones: [] })
            }
        } else {
            if (lastHolidays.name) {
                definitiveData.push(lastHolidays)
            }

            lastHolidays = {
                name: rawData,
                dates: []
            }
        }
    })
    definitiveData.push(lastHolidays)

    definitiveData.forEach(definitiveRawData => {
        if (definitiveRawData.dates.length === 1) {
            definitiveRawData.dates[0].zones.push(...zones)
        } else if (definitiveRawData.dates.length === 2) {
            definitiveRawData.dates[0].zones.push(...zones.filter(zone => zone.toLowerCase() !== 'corse'))
            definitiveRawData.dates[1].zones.push(...zones.filter(zone => zone.toLowerCase() === 'corse'))
        } else {
            definitiveRawData.dates.forEach(date => {
                date.zones.push(zones[definitiveRawData.dates.indexOf(date)])
            })
        }
    })

    if (zone) {
        definitiveData = definitiveData.map(holidays => {
            holidays.dates = holidays.dates.filter(holidayDate => {
                return holidayDate.zones.find(zoneFind => zoneFind.toLowerCase() === zone.toLowerCase())
            })
            return holidays
        })
    }
    
    return {
        etat: true, 
        reponse: definitiveData
    }
}

function getDatesData(rawData, splittedRawData) {
    let datesData;
    if (rawData.includes('Du')) {
        if (splittedRawData.length === 10) {
            datesData = {
                dayBegin: splittedRawData[2].length === 1 ? '0'+splittedRawData[2] : splittedRawData[2],
                monthBegin: converter[splittedRawData[3]],
                yearBegin: splittedRawData[4],
                dayEnd: splittedRawData[7].length === 1 ? '0'+splittedRawData[7] : splittedRawData[7],
                monthEnd: converter[splittedRawData[8]],
                yearEnd: splittedRawData[9]
            }
        } else {
            datesData = {
                dayBegin: splittedRawData[2].length === 1 ? '0'+splittedRawData[2] : splittedRawData[2],
                monthBegin: converter[splittedRawData[3]],
                yearBegin: splittedRawData[8],
                dayEnd: splittedRawData[6].length === 1 ? '0'+splittedRawData[6] : splittedRawData[6],
                monthEnd: converter[splittedRawData[7]],
                yearEnd: splittedRawData[8]
            }
        }
    } else {
        datesData = {
            dayBegin: splittedRawData[1].length === 1 ? '0'+splittedRawData[1] : splittedRawData[1],
            monthBegin: converter[splittedRawData[2]],
            yearBegin: splittedRawData[3],
        }
    }
    
    return datesData
}

const converter = {
    'janvier': '01',
    'février': '02',
    'mars': '03',
    'avril': '04',
    'mai': '05',
    'juin': '06',
    'juillet': '07',
    'août': '08',
    'septembre': '09',
    'octobre': '10',
    'novembre': '11',
    'décembre': '12',
}