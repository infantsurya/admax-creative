import React,{useState,useEffect} from 'react';
import Block from './Block';
import './style/style.css';


const AdSetup = ({data,setFormat})=>
{
    const [selectedAd,setSelectedAd] = useState("select_sfakhb434e");
    
    useEffect(()=>{
        if(selectedAd == 'select_fakjbsr35545')
        {
            setFormat('format_43tfvfbh');
        }
        if(selectedAd == 'select_sfakhb434e')
        {
            setFormat('format_43i74yf3');
        }
    },[selectedAd]);
    
    return(
        <Block title="Ad Setup">
            <div className="input-group">
                <select onChange={(e)=>setSelectedAd(e.target.value)}>
                    {data.selectedAd.map((option)=>
                    {
                       return <option value={option.id} key={option.id}>{option.title}</option>
                    })}
                </select>
            </div>
            {
                selectedAd == 'select_sfakhb434e' ?
                <div className="input-group">
                <label>Format</label>
                    <select onChange={(e)=>setFormat(e.target.value)}>
                    {
                        data.format[selectedAd].map((option)=>
                        {
                            return <option value={option.formatId} key={option.formatId}>{option.formatTitle}</option>
                        })}
                    </select>
            </div> : null 
            }
        </Block>
    )
} 

export default AdSetup;