import React from 'react'
import {useState} from 'react';
import "./Rec.css";
import "./App.css";
import {Link} from 'react-router-dom';



const Recommend = ({setPresent}) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmi, setBMI] = useState('');
    const [age, setAge] = useState('');
   
     
    
    function Clear(){
      setAge('');
      setHeight('');
      setWeight('');
      setMessage('');
      setBMI('');
      setPresent('');                 
     }

    function calculateBMI() {
      const h = height / 100;
      const bmi = weight / (h * h);
      
      if (bmi < 18.5 ) {
        
        setMessage('UnderWeight. ')
        setBMI('Your BMI is ' + bmi.toFixed(2));
        setPresent("Under");
        
        
      } else
  
      if (bmi >= 18.5 && bmi < 24.9 ) {
       
        setMessage('Healthy. ')
        setBMI('Your BMI is ' + bmi.toFixed(2));
        setPresent("Norm");
       
      } else
      
      if (bmi >= 25 && bmi < 29.9 ) {

        setMessage('Overweight. ')
        setBMI('Your BMI is ' + bmi.toFixed(2));
        setPresent("Over");
        
      } else
  
      if (bmi >= 30 ) {
        setMessage('Obese. ')
        setBMI('Your BMI is ' + bmi.toFixed(2));
        setPresent("Obese");
      } 
     }

     

  return (
    
    <div className="app">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
      
      <div className="area-input">
      
        <input
          type="number"
          placeholder="Age"
          maxLength={2}
          onChange={ (e) => setAge(e.target.value)}
          value={age}
        />
        <div className="rad" >

        <label className="lab">Male</label>
        
        <input type="radio" name="gender" />

        <label className="lab">Female</label>

        <input type="radio" name="gender" />
        </div>
        <input
          value={weight}
          type="text"
          placeholder="Weight (in kg)"
          onChange={ (e) => setWeight(e.target.value)}
        />

        <input
          value={height}
          type="text"
          placeholder="Height (in cm)"
          onChange={ (e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>
          Calculate
        </button>

        <Link to="/bmi" ><button style={{margin:'1vw 0 1vw 0'}} >
          Show Recommendation
        </button>
        </Link>

        <button  style={{margin:'0vw 0 1vw 0'}} onClick={Clear}>
          Reset
        </button>

       
        

      </div>
      <h2> {message} {bmi}  </h2>
     
     
      </div>

      
    
  )
}

export default Recommend;