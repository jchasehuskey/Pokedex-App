let pokemonRepository = (function () {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    t.push(e);
  }
  function o(t) {
    l(t).then(() => {
      !(function (t) {
        let e = $('.modal-body'),
          n = $('.modal-title'),
          o = $(`<h1>${t.name}</h1>`),
          i = $('<p>Height: ' + t.height + '</p>'),
          l = $("<img class='pokemon-modal-image'>");
        l.attr('src', t.imageUrl);
        let a = $(`<p>Types: ${t.types.join(', ')}</p>`);
        n.empty(),
          e.empty(),
          n.append(o),
          e.append(l),
          e.append(i),
          e.append(a);
      })(t);
    });
  }
  function i() {
    let t = $('input').val();
    $('li').each(function () {
      let e = $(this);
      e.text().startsWith(t) ? e.show() : e.hide();
    });
  }
  function l(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
        let n = [];
        e.types.forEach((t) => n.push(t.type.name)), (t.types = n);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  return (
    $('input').on('input', i),
    {
      add: n,
      getAll: function () {
        return t;
      },
      addListItem: function (t, e) {
        let n = document.querySelector('ul'),
          i = document.createElement('li'),
          l = document.createElement('button');
        (l.innerText = t.name),
          l.classList.add('button-class'),
          l.addEventListener('click', (e) => {
            o(t), e.target.blur(), console.log(t);
          }),
          l.classList.add('btn', 'btn-outline-secondary'),
          l.classList.add('m-1', 'text-capitalize'),
          l.setAttribute('data-toggle', 'modal'),
          l.setAttribute('data-target', '#pokemonModal'),
          i.appendChild(l),
          n.appendChild(i);
      },
      addEvent: function (t, e) {
        t.addEventListener('click', function () {
          o(e), console.log(e);
        });
      },
      loadList: function () {
        return fetch(e)
          .then(function (t) {
            return t.json();
          })
          .then(function (t) {
            t.results.forEach(function (t) {
              n({ name: t.name, detailsUrl: t.url });
            });
          })
          .catch(function (t) {
            console.error(t);
          });
      },
      loadDetails: l,
      filterPokemon: i,
    }
  );
})();
console.log(pokemonRepository.getAll()),
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (t, e) {
      pokemonRepository.addListItem(t, e);
    });
  });
