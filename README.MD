# POKEDEX APP

---

## Pokemon-app displays pokemons fetched data from the pokeAPI: https://pokeapi.co/. When a pokemone element is clicked, displays more dtails about the particular pokemon using a modal.

## Live Link: https://jchasehuskey.github.io/Pokedex-App/

## Tools used:

Javascript, HTML, CSS, Bootstrap

---

## Getting Started: 

Create a GithHub account if you dont't have one and fork my repository. Then on GitHub go to your forked repository and under the Settings -> Pages -> Build and deployment -> Branch choose the master branch and Save. After a minute you can check your live copy of my app.

Or, just clone the repository into your webserver's root directory on any hosting provider: https://github.com/jchasehuskey/Pokedex-App.git

## Key Features: 


* Load data from an external source (API:https://pokeapi.co/docs/v2)
* View all loaded Pokemon through individual cards on a responsive webpage
* Each card includes a button to load more details about the Pokemon
* Live search among the loaded Pokemons
* Loading indicator during data fetching
* On devices with touchscreen swiping between items on the modal


## Dependencies

All dependencies are included in the code, no need to install anything else.

Bootstrap 5.2.2 is used for the user interface elements. This version of Bootstrap does not require jQuery.
The PokeAPI is used by the project.


## Code and Quality:

* Javascript Minifier is used to remove unnecessary pieces of the file to decrease its file size.
* Performance was checked with Chrome developer tools on different network speeds and different CPU speeds. In the case of recursive functions, the innerHTML and document.write() commands were replaced by specific DOM manipulation commands like classList.add, innerText, appendchild, etc.
* ESLint was used for code quality and Prettier for code formatting.
* The app was tested on different screen sizes with Chrome developer tools.




