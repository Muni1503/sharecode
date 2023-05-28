import React, {useEffect, useState} from 'react'
import Normal from './components2/bmass/Normal'
import Obese from './components2/bmass/Obese'
import Underweight from './components2/bmass/Underweight'
import Overweight from './components2/bmass/Overweight'
import {Link} from 'react-router-dom';

import "./Rec.css";
import "./App.css";

const Bmi = ({present}) => {
   
    const [renderContent, setRenderContent] = useState();

  useEffect(()=>{

    function Rerender(){
    console.log(present)
    if(present === ""){
        setRenderContent(()=><Normal />)
       }else if (present === "Norm"){
        setRenderContent(()=><Normal />)
       }else if (present === "Under"){
        setRenderContent(()=><Underweight />)
       }else if (present === "Over"){
        setRenderContent(()=><Overweight />)
       }else if (present === "Obese"){
        setRenderContent(()=><Obese />)
       }}

       Rerender();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
   
    
 
  return (
    <div>
    <Link to="/reco">
    <button style={{margin:'1vw 0 1vw 0'}} >
    Back to BMI
    </button>
    </Link>
            
    {renderContent}
    
   </div>
  )
}

export default Bmi