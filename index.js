module.exports.zoneDisponiblesPourFeries = [
    "alsace-moselle",
    "guadeloupe",
    "guyane",
    "la-reunion",
    "martinique",
    "mayotte",
    "metropole",
    "nouvelle-caledonie",
    "polynesie-francaise",
    "saint-barthelemy",
    "saint-martin",
    "saint-pierre-et-miquelon",
    "wallis-et-futuna"
]
module.exports.zoneDisponiblesPourVacances = [ "A", "B", "C" ]
module.exports.feries = require("./Scripts/feries")
module.exports.numeroSemaine = require("./Scripts/weekNumber")
module.exports.validationDate = require("./Scripts/validateDate")
module.exports.joursDeSemaine = require("./Scripts/daysFromWeekNumber")