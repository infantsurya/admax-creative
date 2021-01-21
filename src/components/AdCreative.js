import React,{useState,useEffect} from 'react';
import Block from './Block';
import './style/style.css';
import Input from './elements/Input';
import Carousel from './elements/Carousel';
import Select from './elements/Select';
import Switch from 'react-switch';


const AdCreative = ({data,format})=>
{
  useEffect(() => {
    setChecked(false);
  }, []);
    const [checked,setChecked] = useState(false);
    const [carouselCount,setCarouselCount] = useState(2);
    console.log(data[format]);
    return(
        <Block title="Ad Creative">
            { data[format].hasOwnProperty('websiteUrlToggle') ? 
            <div className="input-group switch-input-group">
              <div>
                <p className="url-text">Add website Url</p>
                <span className="url-sub-text">Redirect your leads to your website url</span>
              </div>
                <Switch onChange={()=>setChecked(!checked)} checked={checked} offColor="#959595" onColor="#2c88f1" uncheckedIcon={false} checkedIcon={false} className="switch" />
            </div>
            : null 
          }
                
                
            { data[format]['carouselCard'] ? <Carousel count={carouselCount}/>  : null };
              
            {  
              data[format]['primaryText'] ? 
                  <Input title="Primary Text" id="primaryText" option={data[format]['primaryText']}/> : null 
            }
            {  
              data[format]['headline'] ? 
                  <Input title="Headline" id="headline" option={data[format]['headline']}/> : null 

            }
            {  
              data[format]['description'] ? 
                  <Input title="Description" id={data[format]['description']} option={data[format]['description']}/> : null 

            }
             {  
              data[format]['seeMoreUrl'] ? 
                  <Input title="See More Url" id={data[format]['seeMoreUrl']} option={data[format]['seeMoreUrl']}/> : null 

            }
             {  
              data[format]['seeMoreDisplayLink'] ? 
                  <Input title="See More Display Link" id={data[format]['seeMoreDisplayLink']} option={data[format]['seeMoreDisplayLink']}/> : null 

            }

              {
                  data[format].hasOwnProperty('websiteUrlToggle')  && checked ? <>
                    {
                      data[format]['websiteUrlToggle']['websiteUrl'] ? 
                      <Input title="Website Url" id={data[format]['description']} option={data[format]['websiteUrlToggle']['websiteUrl']}/> : null  
                    }
                    {
                      data[format]['websiteUrlToggle']['description'] ? 
                      <Input title="description" id={data[format]['description']} option={data[format]['websiteUrlToggle']['description']}/> : null  
                    }
                    {
                      data[format]['websiteUrlToggle']['headline'] ? 
                      <Input title="headline" id={data[format]['healine']} option={data[format]['websiteUrlToggle']['healine']}/> : null  
                    }
                    {
                      data[format]['websiteUrlToggle']['displayLink'] ? 
                      <Input title="Display Link" id="displayLink" option={data[format]['websiteUrlToggle']['displayLink']}/> : null  
                    }
                    
                    {
                      data[format]['websiteUrlToggle']['seeMoreUrl'] ? 
                      <Input title="See More Url" id="seeMoreUrl" option={data[format]['websiteUrlToggle']['seeMoreUrl']}/> : null  
                    }

                    {
                      data[format]['websiteUrlToggle']['seeMoreDisplayLink'] ? 
                      <Input title="See More Display Link" id="seeMoreDisplayLink" option={data[format]['websiteUrlToggle']['displayLink']}/> : null  
                    }
                    
                    {  
                      data[format]['websiteUrlToggle']['cta'] ? 
                      <Select title="Call to Action" id="cta" options={data[format]['websiteUrlToggle']['cta']}/>
                          : null 
                    }
                    </> 
                    : null
              }

            {  
              data[format]['cta'] ? 
              <Select title="Call to Action" id="cta" options={[data[format]['cta']]}/>
                  : null 
            }
            
           
        </Block>
    )
} 

export default AdCreative;