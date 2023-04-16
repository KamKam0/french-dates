let index = require("../index")
module.exports = (variable) => {
    if(!["number", "string"].includes(typeof variable)) return {etat: false}
    let maxMois = index.joursMois
    let mois = maxMois.find(searchedMonth => searchedMonth.nom.toLowerCase() === String(variable).toLowerCase() || searchedMonth.mois === Number(variable) || searchedMonth.moisAnglais.toLowerCase() === String(variable).toLowerCase())
    if(!mois) return {etat: false}
    return {etat: true, ...mois}
}