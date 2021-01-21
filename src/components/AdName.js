import React from 'react';
import Block from './Block';
import './style/style.css'

const AdName = ({data})=>
{
    return(
        <Block title="Ad Name">
            <div className="input-group">
                <input type="text" name="adname" required="required"/>
            </div>
        </Block>
    )
} 

export default AdName;