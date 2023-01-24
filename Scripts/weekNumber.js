/**
 * 
 * @param {string} date 
 * @returns {object}
 */
module.exports = (date) => {
    if(!require("./validateDate")(date).etat) return {etat: false, erreur: "Date invalide"}
    const firstWeek = require("../Utils/function").get_date_first_week
    let year = date.split("/")[2]
    let month = date.split("/")[1]
    let day = date.split("/")[0]
    let first_date = firstWeek(year)
    let actual_date = new Date(`${year}-${month}-${day}T00:00:00.000Z`)
    let eploitable = (actual_date - first_date) / 1000
    if(eploitable < 0){
      first_date = firstWeek(Number(year)-1)
      eploitable = (actual_date - first_date) / 1000
      year = Number(year)-1
    }
    let week_number = Number(String(((eploitable / (60 * 60 * 24)) / 7) + 1).split(".")[0])
    return {nombre: week_number, annee: Number(year), etat: true}
}