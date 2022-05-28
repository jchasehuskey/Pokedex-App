let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let input = $('input');
  input.on('input', filterPokemon);

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon, idx) {
    let ul = document.querySelector('ul');
    let listItem = document.createElement('li');
    // listItem.classList.add('col-4');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    // addEvent(button, pokemon);
    button.addEventListener('click', (event) => {
      showDetails(pokemon);
      event.target.blur();
      console.log(pokemon);
    });

    //classes and attributes to button
    button.classList.add('btn', 'btn-outline-secondary');
    button.classList.add('m-1', 'text-capitalize');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    //add items to list

    listItem.appendChild(button);
    ul.appendChild(listItem);
    // addEvent(button, pokemon);
  }

  function addEvent(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
      console.log(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      showModal(pokemon);
    });
  }

  // MODAL
  function showModal(pokemon) {
    //retrieve node elements
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    //create pokemon elements
    let pokemonName = $(`<h1>${pokemon.name}</h1>`);
    let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let imgElement = $("<img class='pokemon-modal-image'>");
    imgElement.attr('src', pokemon.imageUrl);
    let pokemonTypes = $(`<p>Types: ${pokemon.types.join(', ')}</p>`);

    //empty content
    modalTitle.empty();
    modalBody.empty();

    // append pokemon elements
    modalTitle.append(pokemonName);
    modalBody.append(imgElement);
    modalBody.append(pokemonHeight);

    modalBody.append(pokemonTypes);
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function filterPokemon() {
    let inputValue = $('input').val();
    let list = $('li');

    list.each(function () {
      let item = $(this);
      let name = item.text();
      if (name.startsWith(inputValue)) {
        item.show();
      } else {
        item.hide();
      }
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        let types = [];
        details.types.forEach((item) => types.push(item.type.name));
        item.types = types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    addEvent: addEvent,
    loadList: loadList,
    loadDetails: loadDetails,
    filterPokemon: filterPokemon,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon, idx) {
    pokemonRepository.addListItem(pokemon, idx);
  });
});
