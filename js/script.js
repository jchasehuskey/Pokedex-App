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
