import './style/style.css'

const Block = (props)=>
{
    return(
        <div className="block">
            <h2 className="block-header">{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Block;