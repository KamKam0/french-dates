const fetch = require("node-fetch")
let index = require("../index")
/**
 * @param region
 * @returns {Promise<object[]>}
 */
module.exports = async (region) => {
  
    let validation = index.zonesDisponiblesFeries.find(e => e === String(region).toLowerCase())
  
    if(!validation) return {etat: false, erreur: "Region invalide"}

    let response;
    try {
        let link = `https://calendrier.api.gouv.fr/jours-feries/${validation}/${new Date(Date.now()).getFullYear()}.json`
        let research = await fetch(link, { headers: { "content_type": "application/json" } })
        response = await research.json()
    } catch(err) {
        return { etat: false, erreur: "Erreur pour obtenir les données" }
    }

    response = Object.entries(response)
    
    let answer = response.map(ferie => {
        return {
            nom: ferie[1],
            date: ferie[0],
            timestamp: Date.parse(new Date(`${ferie[0]}T02:00:00`))
        }
    })
    
    return {etat: true, reponse: answer}
}