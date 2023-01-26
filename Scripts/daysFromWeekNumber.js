const convertermonths = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12",
}

/**
 * 
 * @param {number} week 
 * @param {number} year 
 * @returns {object}
 */
module.exports = (week, year) => {
    if(typeof week !== "number"  || Number(week) < 1) return {etat: false, erreur: "Le numero de semaine n'est pas un number"}
    if(typeof year !== "number" || Number(year) < 1) return {etat: false, erreur: "Le numero d'annee n'est pas un number"}
    if(String(year).length !== 4 || isNaN(year)) return {etat: false, erreur: "Annee invalide"}
    const transform = (date) => {
        if(typeof date === "number") date = new Date(date).toUTCString()
        let day = date.split(" ")[1]
        let month = convertermonths[date.split(" ")[2]]
        let year = date.split(" ")[3]
        return [`${day}/${month}/${year}`, require("./dayNameFromDate")(`${day}/${month}/${year}`).jour]
    }
    let baseday = 1000 * 60 * 60 * 24
    let baseweek = baseday * 7 * (week -1)
    let first_date = require("../Utils/function").get_date_first_week(year)
    let basedate = Date.parse(first_date) + baseweek
    let days = []
    days.push(transform(basedate))
    for (let i=1;i<7;i++) days.push(transform(basedate+(baseday*i)))
    return {etat: true, jours: days}
}