import Card from "./Card";
const CardList = ({pokemonData}) => {

    return (<> 
        {pokemonData.map(({id, name, type, image})=>{
            return <Card  id={id} name={name} type={type} imageUrl = {image}/>
        })}
    </>)
}
export default CardList;