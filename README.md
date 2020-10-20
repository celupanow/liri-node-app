<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Liri Node App</h3>
<p align="center">
This is a node app that uses the Command Line to make calls to three different APIs to display results.
<br />
<br />
<a href="https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/view">View Demo</a>
·
<a href="https://github.com/celupanow/liri-node-app/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/liri-node-app/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
To watch the demonstration video, please click the following link:
[https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/view](https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/view)

### Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org)
* [Bands in Town API](https://www.artists.bandsintown.com/bandsintown-api)
* [Spotify API](https://developer.spotify.com/documentation/web-api/)
* [OMDB API](http://www.omdbapi.com/)
* [axios](https://www.npmjs.com/package/axios)
* [moment](https://www.npmjs.com/package/moment)
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```

You will need a Spotify client id and client secret. You can get these here: https://developer.spotify.com/dashboard/
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/liri-node-app.git

```
2. Install the NPM packages
```sh
npm install
```
3. Create a .env file with your Spotify client id and client secret
```JS
```
5. Run the application using the command line
```sh
node bamazonCustomer.js
node bamazonManager.js
node bamazonSupervisor.js
```

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/liri-node-app/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact
Christina Lupanow - christina@christinalupanow.com
<p>
Project Link: [https://celupanow.github.io/liri-node-app/](https://celupanow.github.io/liri-node-app/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [GitHub Pages](https://pages.github.com)


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/liri-node-app.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/liri-node-app/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/liri-node-app.svg?style=flat-square

[forks-url]: https://github.com/celupanow/liri-node-app/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/liri-node-app.svg?style=flat-square

[stars-url]: https://github.com/celupanow/liri-node-app/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/liri-node-app.svg?style=flat-square

[issues-url]: https://github.com/celupanow/liri-node-app/issues

[license-shield]: https://img.shields.io/github/license/celupanow/liri-node-app.svg?style=flat-square

[license-url]: https://github.com/celupanow/liri-node-app/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png



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

Link to Video: https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/view

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
eyJoaXN0b3J5IjpbNTczMDY5MDYyLDI1NTU1NzE5NywtMTg2Mj
E3NzQ1MCwxMDQ3MDYyNTM2LDUxOTUyNzgzMCwxNDk4NTMzNzkw
XX0=
-->