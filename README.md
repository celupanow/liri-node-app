# liri-node-app
This is a node app that uses the Command Line to search for various information from several different APIs.

No working link because there is no actual HTML or interactive DOM.

## Objectives

 - Use a node Spotify api package to search the Spotify API.
 - Use axios to call the OMDB API and the Bands In Town API.
 - Depending on the command entered, display information from the Bands In Town API, Spotify API, or OMDB API.
 - Use a separate js file for the keys needed to call the Spotify API.
 - Use a txt file for a command that reads the txt file and follows whatever command and search term is in the txt file.
 
## How It Works
The user must put two items into the command line. The first one is a command. The user can put in "concert-this", which will search the Bands In Town API for venue name, venue location, and time for the next concert of whatever musical artist is searched. They can put in "spotify-this-song", which will search the Spotify API for the artist, song name, spotify link, and the album name. They can use "movie-this", which will search the OMDB API for the title, year, ratings, country, language, plot, and actors. The last command is "do-what-it-says", which reads the random.txt file and follows the command and search term to run one of the above commands. 

## Demonstration Video

<iframe src="https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/preview" width="640" height="480"></iframe>

## Technologies

 - JavaScript
 - Node.js
 - Bands In Town API
 - Spotify API
 - OMDB API
 - axios
 - moment
 - fs
 - node-spotify-api
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYxOTc4NDE5MywxMDQ3MDYyNTM2LDUxOT
UyNzgzMCwxNDk4NTMzNzkwXX0=
-->