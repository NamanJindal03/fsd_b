import './Card.css'
import Button from "./Button"
const Card = (props) => {
    const {id, name, type, imageUrl, handleModalAppearance, pokemonData} = props;
    return (
        <>
        {pokemonData && 
        <div className={`card ${type}`}>
            <div>#{id}</div>
            <img src={imageUrl} alt="" className='pokemonImage'/>
            <div>{name}</div>
            <div>Type: {type}</div>
        <Button theme={type} content={"Know more..."} onClick={() => handleModalAppearance(pokemonData)}/>
        </div>
        }
        </>
    )
}

export default Card