POKEDEX APPl

-Created array (pokemonList) with 5 objects, (each object includes: name,height, and styles.

-Created for loop to display names and height of pokemon.  
-Added condition to for loop to display "wow that's big" on the tallest pokemon.

- Created IIFE and put PokemonList array inside of IIFE to secure code. Also assigned variable- pokemonrepository to IIFE to allow outside functions to call it.
- Replaced for Loop w/ a forEach Loop.
- Updated forEach Loop to allow the loop to retrieve data from inside the IIFE repository.

Updated IIFE by adding a function "addListItem" that creates list items for the unordered list in HTML and also appends buttons to each list item.
-Added event listener to the appended button- that when clicked- would call the function "showDetails".

Created function called "showDetails" that logged data to console when called.

Updated button and body styling in CSS.

added URL to API inside IIFE to retrieve pokemon. linked it by fetching with function loadList(). Used Promises inside of loadList that returned response.json. Used promise to deliver forEach function to display pokemon name & details. And the added pokemon.

Also added loadDetails function to fetch details from the url. This returns item.image for the pokemon. Also displays error if promise is not fulfilled.

Updated and wrapped forEach function outside of IIFE function into another function pokemonRepository.loadList().then(function(){.

Added fetch.polyfill.js and promise-polyfills.js to account for browser support.

Appended new js elements to index and created a modal. Included forLoop funciton to display pokemon type. Retrieved img from API. Also added event listeners to close the modal when specific keys are areas are clicked (escape) & right outside of the modal. Created close-button to close modal. Updated CSS to style elements.
