/**
 * 
 * @param {number} year 
 * @param {string} zone 
 * @returns {object[]}
 */
module.exports = async (year, zone) => {
    const fetch = require("node-fetch")
    if(String(year).length !== 4 || isNaN(year)) return {etat: false, erreur: "Annee invalide"}
    year = Number(year)
    zone = String(zone).toLocaleUpperCase()
    if(!(/(A|B|C)/).test(zone))  return {etat: false, erreur: "Zone invalide"}
    
    let link = `https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&facet=location&facet=zones&facet=annee_scolaire&refine.zones=Zone+${zone}&refine.location=Paris&refine.annee_scolaire=${year}-${year+1}`
    let research = await fetch(link, { headers: { "content_type": "application/json" } })
    let response = await research.json()

    response = response.records.map(rec => rec.fields)

    response = response.map(field => {return {debut: Date.parse(new Date(field.start_date)), end: Date.parse(new Date(field.end_date))}})
    
    return {etat: true, response}
}