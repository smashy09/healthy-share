export var data = {

   
    resultsit: "",

    resulteat: "",
   
    resultsleep: "",
    
    advicesit: "",
 
    adviceeat: "",
 
    advicesleep: "",

    type: "",

    result: ""
}

export function ChangeData(d){
    data = d;
    
}

export function Sumup(){
    if(data.resultsit === "7+ Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit, dont eat enough vegetables and lack sleep."
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit an average amount, dont eat enough vegetables and lack sleep."
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat enough vegetables and lack sleep."
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat enough vegetables and lack sleep."
    }
}


