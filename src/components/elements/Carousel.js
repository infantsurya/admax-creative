import React from 'react';
import '../style/style.css';
import Input from './Input';
import CarouselItem from './CarouselItem'

const Carousel = ({count})=>
{          
    const itemPush = ()=>
    {
        let items = [];     
        for(let i = 1; i<=count; i++) 
        {
            items.push(<div><CarouselItem/></div>); 
        }
        return items;
    }
      
    return (
        <div>
            {itemPush()}
        </div>);

} 

export default Carousel;