const moduleIndex = require('./src/index')

let validationDatePostiveTest = moduleIndex.validationDate('01/01/2020')
console.log('validationDatePostiveTest: ' + validationDatePostiveTest.etat)

let validationDateNegativeTest = moduleIndex.validationDate('1/2020')
console.log('validationDateNegativeTest: ' + validationDateNegativeTest.etat)
console.log()

let nomDuJourPostiveTest = moduleIndex.nomDuJour('01/01/2020')
console.log('nomDuJourPostiveTest: ' + nomDuJourPostiveTest.etat)
console.log('nomDuJourPostiveTest - 1: ' + nomDuJourPostiveTest.jour)

let nomDuJourNegativeTest = moduleIndex.nomDuJour('1/2020')
console.log('nomDuJourNegativeTest: ' + nomDuJourNegativeTest.etat)
console.log()

let numeroSemainePostiveTest = moduleIndex.numeroSemaine('01/01/2020')
console.log('numeroSemainePostiveTest: ' + numeroSemainePostiveTest.etat)
console.log('numeroSemainePostiveTest - 1: ' + numeroSemainePostiveTest.nombre)
console.log('numeroSemainePostiveTest - 2: ' + numeroSemainePostiveTest.annee)

let numeroSemaineNegativeTest = moduleIndex.numeroSemaine('1/2020')
console.log('numeroSemaineNegativeTest: ' + numeroSemaineNegativeTest.etat)
console.log()

let joursDeSemainePostiveTest = moduleIndex.joursDeSemaine(12, 2023)
console.log('joursDeSemainePostiveTest: ' + joursDeSemainePostiveTest.etat)
console.log('joursDeSemainePostiveTest - 1: ' + joursDeSemainePostiveTest.jours)

let joursDeSemaineNegativeTest = moduleIndex.joursDeSemaine('e', '65')
console.log('joursDeSemaineNegativeTest: ' + joursDeSemaineNegativeTest.etat)
console.log()

let jourMaximumMoisPostiveTest = moduleIndex.jourMaximumMois('janvier')
console.log('jourMaximumMoisPostiveTest: ' + jourMaximumMoisPostiveTest.etat)
console.log('jourMaximumMoisPostiveTest - 1: ' + jourMaximumMoisPostiveTest.mois)
console.log('jourMaximumMoisPostiveTest - 2: ' + jourMaximumMoisPostiveTest.numero)
console.log('jourMaximumMoisPostiveTest - 3: ' + jourMaximumMoisPostiveTest.nom)
console.log('jourMaximumMoisPostiveTest - 4: ' + jourMaximumMoisPostiveTest.moisAnglais)

let jourMaximumMoisNegativeTest = moduleIndex.jourMaximumMois('iugzuyg')
console.log('jourMaximumMoisNegativeTest: ' + jourMaximumMoisNegativeTest.etat)
console.log()

moduleIndex.vacances('b')
.then(data => {
    console.log('vacancesPositiveTest: ' + data.etat)
    console.log(data.reponse)
})
.catch(err => console.log('vacancesNegativeTest: failed'))
console.log()

moduleIndex.feries('metropole')
.then(data => {
    console.log('feriesPositiveTest: ' + data.etat)
    console.log(data.reponse)
})
.catch(err => console.log('feriesNegativeTest: failed'))
console.log()