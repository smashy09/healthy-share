export var data = {
    resultsit : "",
    resulteat : "",
    resultsleep : "",
    advicesit : "",
    adviceeat : "",
    advicesleep : ""
}

export function ChangeData(d){
    data = d;
    
}

export var Calculation = {
    choice : {
        result: {
            point3: "",
            point2: "",
            point1: ""
        },
        type: {
            healthy: "",
            average: "",
            couchpotato: ""
        }
    }
    
}

export function Sumup(){
    if(choice.result.point1+choice.result.point2+choice.result.point3>=7){
        choice.type.healthy = "Go-getters";
        
    } else if(choice.result.point1+choice.result.point2+choice.result.point3>=4 && choice.result.point1+choice.result.point2+choice.result.point3 <=6){
        choice.type.average = "Average";
    } else if(choice.result.point1+choice.result.point2+choice.result.point3<4){
        choice.type.couchpotato = "Couchpotato";
    }
}