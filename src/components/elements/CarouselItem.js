import React,{useState} from 'react';
import '../style/style.css';
import Input from './Input';

const CarouselItem = ()=>
{
    const [expand,setExpand] = useState(0);
    const [headline,setHeadline] = useState('headline');
    const [description,setDescription] = useState('Description');
    const [websiteUrl,setWebsiteUrl] = useState('websiteUrl');
    return(
        <div className="carousel-item-group">
            <div className="carousel-header">
                <p>{headline}, {description}, {websiteUrl}</p>
                <span onClick={()=>setExpand(!expand)}>Open</span>
            </div>
            { expand ? (
                <div className="carousel-input-container">
                <Input title="Headline" id="#r334asf" option="optional"/>
                <Input title="Description" id="#r534as2" option="optional"/>
                <Input title="Website URL" id="#rs34as2" option="required"/></div> ) : null  }

            
        </div>
    )
} 

export default CarouselItem;