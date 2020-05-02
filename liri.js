require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');

// var spotify = new Spotify(keys.spotify);

var input = process.argv[2];

if(input === "concert-this"){

    var artist = process.argv[3];
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(queryURL);

    axios.get(queryURL).then(
        function(response) {
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.location);
            console.log("Time: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    //take in another argv for a band name
    //search Bands in Town API
    //"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    //display name of venue
    //venue location
    //date of event mm/dd/yyyy
};

if(input === "spotify-this-song"){
    //take in another argv for the song name
    //display artist name
    //song name
    //preview link
    //album
    //no song specified - default to the sign by ace of base
};

if(input === "movie-this"){
    //take in another argv for the movie name
    //display
    //title
    //year
    //imdb rating
    //rotten tomatoes rating
    //country
    //language
    //plot
    //actors
    //of course the default is mr. nobody
};

if(input === "do-what-it-says"){
    //use fs node package to take the text from random.txt
    //then run spotify-this-song for I Want It That Way
};