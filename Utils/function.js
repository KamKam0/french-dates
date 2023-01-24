function get_date_first_week(year){
    let first_day = new Date(`01 01 ${year}`).toString("fr")
    let first_day_name = first_day.split(" ")[0]
    let minus;
    let plus;
    let action;
    switch(first_day_name){
        case("Mon"):
            action = false
            minus = 0
        break;
        case("Tue"):
            action = true
            minus = 1
        break;
        case("Wed"):
            action = true
            minus = 2
        break;
        case("Thu"):
            action = true
            minus = 3
        break;
        case("Fri"):
            action = true
            plus = 3
        break;
        case("Sat"):
            action = true
            plus = 2
        break;
        case("Sun"):
            action = true
            plus = 1
        break;
    }
    let def_date
    if(action){
        if(plus) def_date = {type: "plus", value: plus}
        else def_date = {type: "minus", value: minus}
    }else def_date = `01 01 ${year}`
    
    if(typeof def_date === "object"){
        if(def_date.type === "minus") def_date = `${31 - def_date.value} 12 ${Number(year) - 1}`
        else def_date = `0${1 + def_date.value} 01 ${year}`
    }

    return new Date(`${def_date.split(" ")[2]}-${def_date.split(" ")[1]}-${def_date.split(" ")[0]}T00:00:00.000Z`)
}

module.exports.get_date_first_week = get_date_first_week