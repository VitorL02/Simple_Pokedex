

const listSelectedPokemon = document.querySelectorAll('.pokemon-menu')
const pokemonSelectedCard = document.querySelectorAll('.card-pokemon ')
console.log(listSelectedPokemon);



listSelectedPokemon.forEach(pokemon => {
    pokemon.addEventListener('click',()=>{
        const openCardPokemon = document.querySelector('.open')
        //Remover a classe active do pokemon que está aberta para realizar a troca do pokemon
        openCardPokemon.classList.remove('open')

    const selectedPokemonId = pokemon.attributes.id.value
    const cardPokemonOpen = document.getElementById(`card-${selectedPokemonId}`)
    cardPokemonOpen.classList.add('open')
    console.log(cardPokemonOpen)



    });
})