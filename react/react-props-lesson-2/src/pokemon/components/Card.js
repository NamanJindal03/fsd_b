import './Card.css'
import Button from "./Button"
const Card = (props) => {
    const {id, name, type, imageUrl} = props;
    return (
        <div className={`card ${type}`}>
            <div>#{id}</div>
            <img src={imageUrl} alt="" />
            <div>{name}</div>
            <div>Type: {type}</div>
            <Button type={type} content={"Know more..."}/>
        </div>
    )
}

export default Card