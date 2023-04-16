const config = require("./config.json")

exports.zonesDisponiblesFeries = config.zonesDisponiblesFeries
exports.disponibleVacances = {
    zones: config.disponibleVacances.zones,
    regions: config.disponibleVacances.regions,
    personnes: config.disponibleVacances.personnes
}
exports.feries = require("./scripts/feries")
exports.vacances = require("./scripts/vacances")
exports.numeroSemaine = require("./scripts/weeknumber")
exports.validationDate = require("./scripts/validatedate")
exports.joursDeSemaine = require("./scripts/daysfromweeknumber")
exports.nomDuJour = require("./scripts/daynamefromdate")
exports.joursMois = config.maxMois
exports.jourMaximumMois = require("./scripts/maxmois")

exports.version = require("../package.json").version
exports.name = require("../package.json").name