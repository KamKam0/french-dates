const config = require("./config.json")

module.exports.zonesDisponiblesFeries = config.zonesDisponiblesFeries
module.exports.disponibleVacances = {
    zones: config.disponibleVacances.zones,
    regions: config.disponibleVacances.regions,
    personnes: config.disponibleVacances.personnes
}
module.exports.feries = require("./Scripts/feries")
module.exports.vacances = require("./Scripts/vacances")
module.exports.numeroSemaine = require("./Scripts/weekNumber")
module.exports.validationDate = require("./Scripts/validateDate")
module.exports.joursDeSemaine = require("./Scripts/daysFromWeekNumber")
module.exports.nomDuJour = require("./Scripts/dayNameFromDate")
module.exports.joursMois = config.maxMois
module.exports.jourMaximumMois = require("./Scripts/maxMois")