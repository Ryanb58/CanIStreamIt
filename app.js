var request = require('request');


function getPageViaHTTP(url, callback){
    request(url, callback);
}

function checkResponse(error, response, body){
    
    if (!error && response.statusCode == 200) {
        response = JSON.parse(body);
        console.log(response[0]["description"]);
    }
}

function searchFor(query){
    url = "http://www.canistream.it/services/search?movieName=" + query;
    getPageViaHTTP(url, checkResponse)
}

searchFor("Avengers")
