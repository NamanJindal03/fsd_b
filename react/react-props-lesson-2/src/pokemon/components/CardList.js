import Card from "./Card";
import './CardList.css'
const CardList = ({pokemonData, handleModalAppearance}) => {

    return (
        <div className="pokemonList"> 
            {pokemonData.map((pokemon)=>{
                return <Card  id={pokemon.id} name={pokemon.name} type={pokemon.type} imageUrl = {pokemon.image} key={pokemon.id} pokemonData={pokemon} handleModalAppearance={handleModalAppearance}/>
            })}
        </div>
    )
}
export default CardList;