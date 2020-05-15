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
        data.result = "Seems like you sit, eat too much and lack sleep."
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit an average amount, eat too much and lack sleep."
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat too much and lack sleep."
    }
}


