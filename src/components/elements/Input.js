import React from 'react';
import '../style/style.css'

const Input = ({title,id,option})=>
{
    let labelOption;
    if(option === "optional")
    {
        labelOption = "(optional)";
    }
    else
    {
        labelOption = "";
    }

    return(
        <div className="input-group">
            <label>{title} {labelOption}</label>
        {option === 'optional' ? <input name={id}/> : <input required="required" name={id}/>}   
        </div>
    )
} 

export default Input;