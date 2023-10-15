
export function Child({productObj}){
    const {name, category, price} = productObj;
    return (
        <>
            <div style={
                {
                    border: '1px solid red',
                    width: '400px'
                }
            }>
                <h1>{name}</h1>
                <span>{category}</span>
                <span>{price}</span>
            </div>
            <div>
                This is a paragraphd code
            </div>
        </>
    )
}