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

const pokemonList = [
  { name: 'Charzard', height: 0.6, type: ['Blaze', 'Solar-Power'] },

  { name: 'Onix', height: 8.8, type: ['Sturdy', 'Rock-head', 'Weak-armor'] },

  { name: 'Persion', height: 0.5, type: ['Limber', 'Technician', 'Unnverve'] },

  { name: 'Squirtle', height: 0.5, type: ['Rain-dish', 'Torrent'] },

  { name: 'Mew', height: 0.4, type: ['Synchronize'] },
];

console.log(pokemonList[1].type);
//output - 'sturdy, 'rock-head', 'weak-armor'
console.log(pokemonList[4].height);
//output - 0.4               //this is on the 'Mew" pokemon

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 8) {
    document.write(
      pokemonList[i].name +
        ' ' +
        '(height:' +
        pokemonList[i].height +
        ') ' +
        "-Wow that's big! <br/>"
    );
  } else {
    document.write(
      pokemonList[i].name + ' ' + '(height:' + pokemonList[i].height + ') <br/>'
    );
  }
}

// //Loops

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let ages = [20, 30, 25, 22, 31];
// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i] - 2);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let personAges = [
//   { name: 'Chase', age: 26 },
//   { name: 'Peter', age: 23 },
//   { name: 'Ryan', age: 43 },
// ];

// //for loop - for the array above
// for (let i = 0; i < personAges.length; i++) {
//   if (personAges[i].age <= 23 && personAges[i].age >= 17) {
//     console.log(personAges[i].name + ' is a young adult');
//   } else if (personAges[i].age >= 23 && personAges[i].age < 43) {
//     console.log(personAges[i].name + ' is a man in the prime of his life');
//   } else if (personAges[i].age >= 43) {
//     console.log(personAges[i].name + ' is older than the rest of his friends');
//   }
// }

// //while loop
// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// //do..while loop

// do {
//   console.log(i);
//   i++;
// } while (i < 5);
