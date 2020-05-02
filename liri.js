//all the stuff we are requiring - dotenv, the keys.js file, axios package, moment package, fs package, and node-spotify-api package

require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

//new spotify using the keys in the keys.js file
var spotify = new Spotify(keys.spotify);

//taking the first input which is the command
var input = process.argv[2];
//taking the second input which is the search term
var term = process.argv[3];

//putting everything into a search function so that we can run it again for the do-what-it-says command
function search() {

    //if the command is concert-this
    if (input === "concert-this") {

        //if the second input is empty, search for Celine Dion
        if (!term) {
            term = "Celine Dion";
        }

        //creating the query URL for the Bands In Town API
        var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

        //use axios to retrieve info
        axios.get(queryURL).then(
            function (response) {
                //display the venue, location, and time (formatted with moment)
                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.location);
                console.log("Time: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
            })
            .catch(function (error) {
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
    };

    //if the command is spotify-this-song
    if (input === "spotify-this-song") {

        //if the second input is empty, search for The Sign
        if (!term) {
            term = "The Sign";
        }

        //use the node-spotify-api to search the spotify api for information on the song
        spotify.search({ type: 'track', query: term }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //display the artist, song name, link, and album
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Link: " + data.tracks.items[0].external_urls.spotify);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    };

    //if the command is movie-this
    if (input === "movie-this") {

        //if there is no second input, search for Mr. Nobody because of course it's Mr. Nobody...
        if (!term) {
            term = "Mr. Nobody";
        }

        //build the query URL for the omdb api
        var queryURL = "http://omdbapi.com/?apikey=trilogy&t=" + term;

        //use axios to search the omdb api
        axios.get(queryURL).then(
            function (response) {
                //display the title, year, IMDB rating, Rotten Tomatoes rating, country, language, plot, and actors
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors)
            })
            .catch(function (error) {
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
    };
}


//if the command is do-what-it-says
if (input === "do-what-it-says") {

    //read the random.txt file
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        //put the data from the random.txt into an array
        var arr = data.trim().split(",");

        //change the input and term variables to whatever was in the random.txt
        input = arr[0];
        term = arr[1];

        //run the search function, which basically does all of the above again for whatever was in the random.txt
        //it should work for any of the above commands that are written in the random.txt file
        search();
    });
} else {
    //runs the search function if the input is anything other than do-what-it-says
    search();
}

