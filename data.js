export var data = {
    results: [
    {
    resultsit: ""
    },
    {
    resulteat: ""
    },
    {
    resultsleep: ""
    },
    {
    advicesit: ""
    },
    {
    adviceeat: ""
    },
    {
    advicesleep: ""
}
],
type: ""
}

export function ChangeData(d){
    data = d;
    
}




export function Sumup(){
 if(data.results[0].resultsit === "7+ Hours" && data.results.resulteat[1] === "None" && data.resultsleep[2] === "4- Hours"){
     data.type = "test";
 }
}