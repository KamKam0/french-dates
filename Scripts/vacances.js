/**
 * 
 * @param {number} year 
 * @param {string} zone 
 * @returns {object[]}
 */
module.exports = async (year, zone, region, personne) => {
    const fetch = require("node-fetch")
    if(String(year).length !== 4 || isNaN(year) || Number(year) < 1) return {etat: false, erreur: "Annee invalide"}
    year = Number(year)
    zone = String(zone).toLocaleUpperCase()
    let zones = require("../index").disponibleVacances.zones
    if(!zones.includes(zone))  return {etat: false, erreur: "Zone invalide"}
    if(zone.length === 1) zone = "Zone "+zone
    let regions = require("../index").disponibleVacances.regions
    if(!regions.includes(region))  return {etat: false, erreur: "Region invalide"}
    let personnes = require("../index").disponibleVacances.personnes
    if(personne && !personnes.includes(personne))  return {etat: false, erreur: "Personne invalide"}
    if(personne === "Commun") personne = null
    else if(personne === "Eleves") personne = encodeURIComponent("Élèves")
    
    let link = `https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&refine.annee_scolaire=${year}-${year+1}&refine.zones=${zone.replaceAll(" ", "+")}&refine.location=${region}${personne ? `&refine.population=${personne}` : ""}`
    let research = await fetch(link, { headers: { "content_type": "application/json" } })
    let response = await research.json()

    response = response.records.map(rec => rec.fields)

    response = response.map(field => {return {debut: Date.parse(new Date(field.start_date)), end: Date.parse(new Date(field.end_date)), dateDebut: field.start_date.split("T")[0].split("-").reverse().join("/"), dateFin: field.end_date.split("T")[0].split("-").reverse().join("/"), personne: (field.population === "-" ? "Commun" : decodeURIComponent(field.population)), dureeTexte: require("@kamkam1_0/ms")(Date.parse(new Date(field.end_date)) - Date.parse(new Date(field.start_date))).trim(), duree: Date.parse(new Date(field.end_date)) - Date.parse(new Date(field.start_date))}})
    
    return {etat: true, reponse: response}
}