

const listSelectedPokemon = document.querySelectorAll('.pokemon-menu')
const pokemonSelectedCard = document.querySelectorAll('.card-pokemon ')




listSelectedPokemon.forEach(pokemon => {
    pokemon.addEventListener('click',()=>{
    const openCardPokemon = document.querySelector('.open')
    //Remover a classe active do pokemon que está aberta para realizar a troca do pokemon
    openCardPokemon.classList.remove('open')

    const selectedPokemonId = pokemon.attributes.id.value
    const cardPokemonOpen = document.getElementById(`card-${selectedPokemonId}`)
    cardPokemonOpen.classList.add('open')

    const cardSelected = document.querySelector('.active')
    cardSelected.classList.remove('active')


    const cardSelectedActive = document.getElementById(selectedPokemonId)
    cardSelectedActive.classList.add('active')

    });
})

