/**
 * @param region
 * @returns {Promise<object[]>}
 */
module.exports = async (region) => {
    const fetch = require("node-fetch")
  
    let validation = require("../index").zoneDisponiblesPourFeries.find(e => e === String(region).toLowerCase())
  
    if(!validation) return {etat: false, erreur: "Region invalide"}

    let link = `https://calendrier.api.gouv.fr/jours-feries/${validation}/${new Date(Date.now()).getFullYear()}.json`
    let research = await fetch(link, { headers: { "content_type": "application/json" } })
    let response = await research.json()
  
    return {etat: true, response}
}