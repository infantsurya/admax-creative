import React from 'react';
import '../style/style.css'

const Select = ({title,id,options})=>
{
    return(
        <div className="input-group">
            <label>{title}</label>
            <select name={id}>
                {
                    options.map(option => {
                        return <option value={option}>{option}</option>
                    })
                }
            </select> 
        </div>
    )
} 

export default Select;