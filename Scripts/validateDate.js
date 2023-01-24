const convertermonths = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}
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
    let table = [
        {month: "01", number: "31"},
        {month: "02", number: "29"},
        {month: "03", number: "31"},
        {month: "04", number: "30"},
        {month: "05", number: "31"},
        {month: "06", number: "30"},
        {month: "07", number: "31"},
        {month: "08", number: "31"},
        {month: "09", number: "30"},
        {month: "10", number: "31"},
        {month: "11", number: "30"},
        {month: "12", number: "31"}
    ]
    let day = date[0]
    let month = date[1]
    let year = date[2]
    if(month !== "02") {
        if(Number(table.find(e => e.month === month).number) < Number(day)) return {etat: false, erreur: "Le mois associe au jour est incorrect"}
    }else{
        let dates = ["2024", "2028", "2032", "2036", "2040"]
        let nu
        if(dates.find(e => e === year)) nu = 29
        else nu = 28
        if(Number(nu) < Number(day)) return {etat: false, erreur: "Le mois associe au jour est incorrect"}
    }
    let firstdate = new Date(`${day} ${convertermonths[month]} ${year}`)

    if(String(firstdate) === "Invalid Date") return {etat: false, erreur: "La date est incorrect"}

    return {etat: true}

}