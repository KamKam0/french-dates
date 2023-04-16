const converter = {
    "Mon": "Lundi",
    "Tue": "Mardi",
    "Wed": "Mercredi",
    "Thu": "Jeudi",
    "Fri": "Vendredi",
    "Sat": "Samedi",
    "Sun": "Dimanche"
}
const validateDate = require("./validatedate")
/**
 * 
 * @param {string} date
 * @returns {object} 
 */
module.exports = (date) => {
    if(!date) return {etat: false, error: "Aucune date donnee"}
    if(!validateDate(date).etat) return {etat: false, erreur: "Date invalide"}
    return {etat: true, jour: converter[new Date(`${date.split("/").reverse().join("-")}T02:00:00`).toUTCString().split(",")[0]]} 
}