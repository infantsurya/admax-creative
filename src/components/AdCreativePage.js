import React,{useState} from 'react';
import AdName from './AdName';
import AdIdentity from './AdIdentity';
import AdSetup from './AdSetup';
import './style/style.css';
import AdCreative from './AdCreative';

const AdCreativePage = ({data})=>{


    const [selectedFormat,setSelectedFormat] = useState('format_43i74yf3');
    return(
        <div className="wrapper">
            <div className="page-grid">
                <div style={{"borderRight":"1px solid #e3e3e3","backgroundColor":"#fff"}}>
                    <form type="POST">
                    {data.adName=="required" ? <AdName data={data.adName}/> : null}
                    <AdIdentity/>
                    {data.adIdentity ? <AdIdentity data={data.adName}/> : null}
                    {data.adSetup ? <AdSetup data={data.adSetup} selectedFormat={selectedFormat} setFormat={setSelectedFormat}/> : null}
                    {data.adCreative ? <AdCreative data={data.adCreative} format={selectedFormat}/> : null}
                    <button type="submit">Create Ad</button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}


export default AdCreativePage;