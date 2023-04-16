let index = require("../index")
/**
 * 
 * @param {string} date 
 * @returns {object}
 */
module.exports = (date) => {
    if(!date) return {etat: false, erreur: "Aucune date founrie"}
    if(!date.includes("/")) return {etat: false, erreur: "Aucun / entre les donnees"}
    date = date.split("/")
    if(date.length !== 3 ) return {etat: false, erreur: "La date doit contenir 2 / et 3 nombres"}
    for (let value of date){
        if(isNaN(value)) return {etat: false, erreur: "Un des strings entre les / n'est pas un nombre"}
        if([0, 1].includes(date.indexOf(value))){
            value = Number(value)
            if(date.indexOf(value) === 0) if(value < 1 || value > 31)  return {etat: false, erreur: "La valeur du jour n'est pas inclue entre 1 et 31"}
            if(date.indexOf(value) === 1) if(value < 1 || value > 12)  return {etat: false, erreur: "La valeur du mois n'est pas inclue entre 1 et 12"}
        }else{
            if(value.length !== 4)  return {etat: false, erreur: "L'annee n'est pas un string de 4 caracteres"}
        }
    }
    let table = index.joursMois
    let day = date[0]
    let month = date[1]
    let year = date[2]
    if(month !== "02") {
        if(Number(table.find(e => e.mois === Number(month)).numero) < Number(day)) return {etat: false, erreur: "Le mois associe au jour est incorrect"}
    }else{
        let dates = ["2024", "2028", "2032", "2036", "2040"]
        let nu
        if(dates.find(e => e === year)) nu = 29
        else nu = 28
        if(Number(nu) < Number(day)) return {etat: false, erreur: "Le mois associe au jour est incorrect"}
    }
    let convertermonths = {}
    table.forEach(moisFinded => {
        convertermonths[String(moisFinded.mois).length === 1 ? `0${moisFinded.mois}` : String(moisFinded.mois)] = moisFinded.moisAnglais
    })
    let firstdate = new Date(`${day} ${convertermonths[month]} ${year}`)

    if(String(firstdate) === "Invalid Date") return {etat: false, erreur: "La date est incorrect"}

    return {etat: true}

}