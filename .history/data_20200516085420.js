export var data = {

   
    resultsit: "",

    resulteat: "",
   
    resultsleep: "",
    
    advicesit: "",
 
    adviceeat: "",
 
    advicesleep: "",

    type: "",

    result: "",

    image: "",

}


export function ChangeData(d){
    data = d;
    
}


export function Sumup(){
    if(data.resultsit === "7+ Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, don't eat enough vegetables and lack sleep.";
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit an average amount, don't eat enough vegetables and lack sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat enough vegetables and lack sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "None" && data.resultsleep === "5-6 Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, dont eat enough vegetables and get a decent amount of sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "None" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit a healthy amount, don't eat enough vegetables and lack sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat a lot of vegetables and lack sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "None" && data.resultsleep === "7+ Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, don't eat enough vegetables and get a good amount of sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "None" && data.resultsleep === "5-6 Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit an average amount, don't eat enough vegetables and get a decent amount of sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "5-6 Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit too much, eat enough vegetables and get a decent amount of sleep."
        data.image = require('./couchpotato.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Couch Potato";
        data.result = "Seems like you sit an average amount, eat enough vegetables and lack sleep."
        data.image = require('./couchpotato.svg');
    }

//couch potato end
//effort needed start

    else if(data.resultsit === "7+ Hours" && data.resulteat === "1 Cup" && data.resultsleep === "7+ Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit too much, eat enough vegetables and get a good amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "5-6 Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit too much, eat a lot of vegetables and get a decent amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "7+ Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "7+ Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit too much, eat a lot of vegetables and get a good amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "None" && data.resultsleep === "7+ Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit an average amount, don't eat enough vegetables and get a good amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "1 Cup" && data.resultsleep === "5-6 Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit an average amount, eat enough vegetables and get a decent amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "4- Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit an average amount, eat a lot of vegetables and lack sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "1 Cup" && data.resultsleep === "7+ Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit an average amount, eat enough vegetables and get a good amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "5-6 Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit an average amount, eat a lot of vegetables and get a decent amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "None" && data.resultsleep === "5-6 Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit a healthy amount, don't eat enough vegetables and get a decent amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "1 Cup" && data.resultsleep === "5-6 Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit a healthy amount, eat enough vegetables and get a decent amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "1 Cup" && data.resultsleep === "4- Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit a healthy amount, eat enough vegetables and lack sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "None" && data.resultsleep === "7+ Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit a healthy amount, dont eat enough vegetables and get a good amount of sleep."
        data.image = require('./effortneeded.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "4- Hours"){
        data.type = "Effort Needed";
        data.result = "Seems like you sit a healthy amount, eat a lot of vegetables and lack sleep."
        data.image = require('./effortneeded.svg');
    }

    //effort needed end
    //Go-Getters start
    
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "5-6 Hours"){
        data.type = "Go-Getters";
        data.result = "Seems like you sit an healthy amount, eat a lot of vegetables and get a decent amount of sleep."
        data.image = require('./healthyperson.svg');
    }
    else if(data.resultsit === "3-5 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "7+ Hours"){
        data.type = "Go-Getters";
        data.result = "Seems like you sit an average amount, eat a lot of vegetables and get a good amount of sleep."
        data.image = require('./healthyperson.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "1 Cups" && data.resultsleep === "7+ Hours"){
        data.type = "Go-Getters";
        data.result = "Seems like you sit a healthy amount, eat enough vegetables and get a good amount of sleep."
        data.image = require('./healthyperson.svg');
    }
    else if(data.resultsit === "1-2 Hours" && data.resulteat === "2+ Cups" && data.resultsleep === "7+ Hours"){
        data.type = "Go-Getters";
        data.result = "Seems like you sit a healthy amount, eat a lot of vegetables and get a good amount of sleep."
        data.image = require('./healthyperson.svg');
    }

}


