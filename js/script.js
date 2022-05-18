let pokemonRepository = (function () {
  //POKEMON LIST ARRAY
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function (event) {
      // let target = event.target;
      showDetails(pokemon);
    });
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
          console.log(pokemon); //this is optional to log to console
        });
      })
      .catch(function (e) {
        console.error(e);
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
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  // MODAL

  //  function showModal(title, text)
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // creating an x button that closes the modal window when clicked
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = 'name: ' + pokemon.name.toUpperCase();

    let heightElement = document.createElement('p');
    heightElement.innerText = 'height: ' + pokemon.height;

    let typeElement = document.createElement('p');
    typeElement.innerText = 'Type: ';
    pokemon.types.forEach((type, numberOfTypes) => {
      numberOfTypes = pokemon.types.pokemon;
      if (numberOfTypes === 1) {
        typeElement.innerText += type.type.name;
      } else {
        typeElement.innerText += type.type.name + ' ';
      }
    });

    // creating an img tag that pulls front image of pokemon from api
    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;

    // appending everything in the modal
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(typeElement);
    modal.appendChild(heightElement);

    //appending modal to modal container
    modalContainer.appendChild(modal);

    //makes modal appear
    modalContainer.classList.add('is-visible');
  }

  //hides the modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //listens for a keydown - escape key and then calls hideModal function
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //listens for click outside the modal window

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
