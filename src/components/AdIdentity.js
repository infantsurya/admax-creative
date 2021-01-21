import React from 'react';
import Block from './Block';
import Select from './elements/Select';
import './style/style.css';

const AdIdentity = ({data})=>
{
    return(
        <Block title="Ad Identity">
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","width":"100%","textAlign":"left"}}>
            <Select title="Select Facebook Page" name="fb_page" options={[]}/>
            <Select title="Select Instagram Page" name="instagram_page" options={[]}/>
            </div>
        </Block>
    )
}

export default AdIdentity;