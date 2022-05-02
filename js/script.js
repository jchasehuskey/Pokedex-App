// alert('Hello World');

// let favoriteFood = 'pizza ';

// document.write(favoriteFood);

// //for single quotes, updated settings > preferences> "quote"> and changed all to "single quote" - so adjust if needed.

// let myName = 'chase';
// let age = 26;

// document.write('my name is ' + myName + " and I'm " + age + ' years old!');

// // let car = {
// //   color: 'red',
// //   mileage: 10,
// //   part: {
// //     wheel: 'all terrain',
// //     system: 'toyota',
// //   },
// // };

// // console.log(car.color);
// // console.log(car.part.system);
// // console.log(car.part.wheel);

// // let currentUserName = 'Chase';

// // let userAges = {
// //   anne: 27,
// //   chase: 110,
// //   Rick: 72,
// // };

// // userAges[currentUserName] = 143;
// // console.log(userAges[currentUserName]);

// // let numberArray = [1, 2, 3];
// // let mixedArray = [1, 'two', numberArray, { age: 5 }];

// // console.log(mixedArray[2][1]);

// let pokemonList = [
//   { name: 'Charzard', height: 0.6, type: ['Blaze', 'Solar-Power'] },

//   { name: 'Onix', height: 8.8, type: ['Sturdy', 'Rock-head', 'Weak-armor'] },

//   { name: 'Persion', height: 0.5, type: ['Limber', 'Technician', 'Unnverve'] },

//   { name: 'Squirtle', height: 0.5, type: ['Rain-dish', 'Torrent'] },

//   { name: 'Mew', height: 0.4, type: ['Synchronize'] },
// ];

// console.log(pokemonList[1].type);
// //output - 'sturdy, 'rock-head', 'weak-armor'
// console.log(pokemonList[4].height);
// //output - 0.4               //this is on the 'Mew" pokemon

//for Loop

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 8) {
//     document.write(
//       '<p>' +
//         pokemonList[i].name +
//         ' ' +
//         '(height:' +
//         pokemonList[i].height +
//         ') ' +
//         "-Wow that's big! </p>"
//     );
//   } else {
//     document.write(
//       '<p>' +
//         pokemonList[i].name +
//         ' ' +
//         '(height:' +
//         pokemonList[i].height +
//         ') </p>'
//     );
//   }
// }

// document.write('<div class="new_prod_box">');

//1.5 - create forEach() function instead of forloop for pokemonList

// pokemonList.forEach(function (pokemon) {
//   if (pokemon.height > 8) {
//     document.write(
//       '<p>' +
//         pokemon.name +
//         ' (height: ' +
//         pokemon.height +
//         ') ' +
//         "-Wow that's big!"
//     );
//   } else {
//     document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ');
//   }
// });

let pokemonRepository = (function () {
  let repository = [
    { name: 'Charzard', height: 0.6, type: ['Blaze', 'Solar-Power'] },

    { name: 'Onix', height: 8.8, type: ['Sturdy', 'Rock-head', 'Weak-armor'] },

    {
      name: 'Persion',
      height: 0.5,
      type: ['Limber', 'Technician', 'Unnverve'],
    },

    { name: 'Squirtle', height: 0.5, type: ['Rain-dish', 'Torrent'] },

    { name: 'Mew', height: 0.4, type: ['Synchronize'] },
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  let showDetails = function (pokemon) {
    console.log(pokemon);
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function (event) {
      let target = event.target;
      showDetails(pokemon.name);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({ name: 'Chase' });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
