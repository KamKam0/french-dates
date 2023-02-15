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
let name = Dates.nomDuJour("09/09/2022")
//Sortie: { nombre: 36, annee: 2022, etat: true }
```

Jours dans la semaine avec le numero de semaine et l'annee
```js
let name = Dates.nomDuJour(36, 2022)
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
    response: {
        '2023-01-01': '1er janvier',
        '2023-04-10': 'Lundi de Pâques',
        '2023-05-01': '1er mai',
        '2023-05-08': '8 mai',
        '2023-05-18': 'Ascension',
        '2023-05-29': 'Lundi de Pentecôte',
        '2023-07-14': '14 juillet',
        '2023-08-15': 'Assomption',
        '2023-11-01': 'Toussaint',
        '2023-11-11': '11 novembre',
        '2023-12-25': 'Jour de Noël'
    }
}
*/
```

Vacances
```js
let name = Dates.vacances(2022, "C", "Paris", "Commun") //Le type de personne est optionnel
/*Sortie: 
{
    etat: true,
    response: [
        { debut: 1697839200000, end: 1699225200000 },
        { debut: 1703286000000, end: 1704668400000 },
        { debut: 1707519600000, end: 1708902000000 },
        { debut: 1720216800000, end: 1724968800000 },
        { debut: 1720216800000, end: 1725228000000 },
        { debut: 1712354400000, end: 1713736800000 },
        { debut: 1715292000000, end: 1715378400000 }
    ]
}
}*/
```

Validation d'une date
```js
let name = Dates.validationDate("09/09/2022")//B ou A
//Sortie: { etat: true }
```

### Informations données disponibles
Informations concernant les zones disponibles pour les jours fériés
```js
const Dates = require("@kamkam1_0/french-dates")
let zones = Dates.zonesDisponiblesFeries
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