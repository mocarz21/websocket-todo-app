import './Button.css'

const Button = ({text, action,id}) => {
    console.log('aaaa',text, action, id)

    return(
        <button className="custom-btn btn-2" onClick={()=>action(id)}>{text}</button>
    )
}

export default Button;