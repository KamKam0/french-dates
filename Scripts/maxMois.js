module.exports = (variable) => {
    if(!["number", "string"].includes(typeof variable)) return {etat: false}
    let maxMois = require("../index").joursMois
    let mois = maxMois.find(searchedMonth => searchedMonth.nom.toLowerCase() === String(variable).toLowerCase() || searchedMonth.mois === Number(variable))
    if(!mois) return {etat: false}
    return {etat: true, ...mois}
}