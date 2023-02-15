module.exports.zonesDisponiblesFeries = [
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
module.exports.disponibleVacances = {
    zones: [
        "Corse",
        "Guadeloupe",
        "Guyane",
        "C",
        "B",
        "A",
        "Wallis et Futuna",
        "Saint Pierre et Miquelon",
        "Réunion",
        "Polynésie",
        "Mayotte",
        "Martinique",
        "Nouvelle Calédonie"
    ],
    regions: [
        "Aix-Marseille",
        "Bordeaux",
        "Amiens",
        "Besançon",
        "Caen",
        "Clermont-Ferrand",
        "Corse",
        "Créteil",
        "Dijon",
        "Guadeloupe",
        "Grenoble",
        "Guyane",
        "Lille",
        "Limoges",
        "Lyon",
        "Martinique",
        "Mayotte",
        "Montpellier",
        "Nancy-Metz",
        "Nice",
        "Nantes",
        "Normandie",
        "Nouvelle Calédonie",
        "Orléans-Tours",
        "Paris",
        "Poitiers",
        "Polynésie",
        "Wallis et Futuna",
        "Toulouse",
        "Strasbourg",
        "Saint Pierre et Miquelon",
        "Réunion",
        "Rennes",
        "Reims",
        "Rouen",
        "Versailles"
    ],
    personnes: [
        "Eleves",
        "Commun",
        "Enseignants"
    ]
}
module.exports.feries = require("./Scripts/feries")
module.exports.vacances = require("./Scripts/vacances")
module.exports.numeroSemaine = require("./Scripts/weekNumber")
module.exports.validationDate = require("./Scripts/validateDate")
module.exports.joursDeSemaine = require("./Scripts/daysFromWeekNumber")
module.exports.nomDuJour = require("./Scripts/dayNameFromDate")