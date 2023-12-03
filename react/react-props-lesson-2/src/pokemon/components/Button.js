import './Button.css'
const Button = (props) => {
    const {content = 'Know More...', theme, title, disabled } = props
    return (
        <> 
            <button className={`btn ${theme}`} {...props}>{content}</button>
        </>
    )
}
export default Button;