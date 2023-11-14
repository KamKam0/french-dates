# French-Dates
French-Dates est un module simple du'tilisation qui permet d'obtenir différentes dates clés françaises

## Installation
```js
npm i @kamkam1_0/french-dates
```

## Methodes disponibles
- Feries
- Vacances
- Validation de dates
- Numero de semaine avec une date
- Nom d'un jour avec une date
- Jour d'une semaine avec le numero de semaine et l'année

## Comment l'utiliser

### Initialiser le module
```js
const Dates = require("@kamkam1_0/french-dates")
```

### General
Nom d'un jour avec la date
```js
let name = Dates.nomDuJour("09/09/2022")
//Sortie: { etat: true, jour: 'Vendredi' }
```

Numero de semaine avec la date
```js
let name = Dates.numeroSemaine("09/09/2022")
//Sortie: { nombre: 36, annee: 2022, etat: true }
```

Jours dans la semaine avec le numero de semaine et l'annee
```js
let name = Dates.joursDeSemaine(36, 2022)
/*Sortie: 
{
    etat: true,
    jours: [
        [ '05/09/2022', 'Lundi' ],
        [ '06/09/2022', 'Mardi' ],
        [ '07/09/2022', 'Mercredi' ],
        [ '08/09/2022', 'Jeudi' ],
        [ '09/09/2022', 'Vendredi' ],
        [ '10/09/2022', 'Samedi' ],
        [ '11/09/2022', 'Dimanche' ]
    ]
}
*/
```

Feries
```js
let name = Dates.feries("metropole")
/*Sortie: 
{
    etat: true,
    reponse: [
        { nom: '1er janvier', date: '2023-01-01', timestamp: 1672534800000 },
        {
            nom: 'Lundi de Pâques',
            date: '2023-04-10',
            timestamp: 1681084800000
        },
        { nom: '1er mai', date: '2023-05-01', timestamp: 1682899200000 },
        { nom: '8 mai', date: '2023-05-08', timestamp: 1683504000000 },
        { nom: 'Ascension', date: '2023-05-18', timestamp: 1684368000000 },
        {
            nom: 'Lundi de Pentecôte',
            date: '2023-05-29',
            timestamp: 1685318400000
        },
        { nom: '14 juillet', date: '2023-07-14', timestamp: 1689292800000 },
        { nom: 'Assomption', date: '2023-08-15', timestamp: 1692057600000 },
        { nom: 'Toussaint', date: '2023-11-01', timestamp: 1698800400000 },
        { nom: '11 novembre', date: '2023-11-11', timestamp: 1699664400000 },
        { nom: 'Jour de Noël', date: '2023-12-25', timestamp: 1703466000000 }
    ]
}
*/
```

Vacances
```js
let name = Dates.vacances('C')
/*Sortie: 
{
    etat: true,
    reponse: [
        {
            debut: 1671231600000,
            end: 1672700400000,
            dateDebut: '16/12/2022',
            dateFin: '02/01/2023',
            dureeTexte: '17 days',
            duree: 1468800000,
            zones: ['A']
        },
        {
            debut: 1676674800000,
            end: 1678057200000,
            dateDebut: '17/02/2023',
            dateFin: '05/03/2023',
            dureeTexte: '16 days',
            duree: 1382400000,
            zones: ['A', 'B']
        },
        {
            debut: 1666389600000,
            end: 1667775600000,
            dateDebut: '21/10/2022',
            dateFin: '06/11/2022',
            dureeTexte: '16 days and 1 hour',
            duree: 1386000000,
            zones: ['A', 'B', 'C']
        },
        {
            debut: 1682114400000,
            end: 1683583200000,
            dateDebut: '21/04/2023',
            dateFin: '08/05/2023',
            dureeTexte: '17 days',
            duree: 1468800000,
            zones: ['A', 'B', 'C', 'Corse']
        },
        {
            debut: 1688767200000,
            end: 1693519200000,
            dateDebut: '07/07/2023',
            dateFin: '31/08/2023',
            dureeTexte: '55 days',
            duree: 4752000000,
            zones: ['B']
        },
        {
            debut: 1684360800000,
            end: 1684706400000,
            dateDebut: '17/05/2023',
            dateFin: '21/05/2023',
            dureeTexte: '4 days',
            duree: 345600000,
            zones: ['C']
        },
        {
            debut: 1688767200000,
            end: 1693778400000,
            dateDebut: '07/07/2023',
            dateFin: '03/09/2023',
            dureeTexte: '58 days',
            duree: 5011200000,
            zones: ['Corse']
        }
    ]
}
}*/
```

Validation d'une date
```js
let name = Dates.validationDate("09/09/2022")//B ou A
//Sortie: { etat: true }
```

Obtenir un mois et ses informations
```js
const Dates = require("@kamkam1_0/french-dates")
let zones = Dates.zonesDisponiblesFeries
```

### Informations données disponibles
Informations concernant les zones disponibles pour les jours fériés
```js
const Dates = require("@kamkam1_0/french-dates")
let zones = Dates.jourMaximumMois("janvier")
//OU
let zones = Dates.jourMaximumMois(1)
//Sortie: { etat: true, mois: 1, numero: 31, nom: 'Janvier', moisAnglais: "January"}
```

Informations concernant les vacances
```js
const Dates = require("@kamkam1_0/french-dates")

//Obtenir les zones
let zones = Dates.disponibleVacances.zones

//Obtenir les regions (académies)
let regions = Dates.disponibleVacances.regions

//Obtenir les personnes (Elèves, professeurs ou les deux)
let zones = Dates.disponibleVacances.personnes
```

Informations contenant le numéro du dernier jour de chaque mois
```js
const Dates = require("@kamkam1_0/french-dates")
let mois = Dates.joursMois
```