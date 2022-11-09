import Button from '../common/Button'
import './option.css'
const Option =({id, txt, action}) =>{

    console.log('baaa', action, id)
    return(
        <div key={id} className="option">
            <h1>{id}</h1>
            <h2>{txt}</h2>
            <Button action={action} text={'REMOVE'} id={id}/>
        </div>
    )
}

export default Option;