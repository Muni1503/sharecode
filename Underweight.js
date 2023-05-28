import React from 'react'
import Und from '../../assets2/images/Underweight.png';
import Diet from '../../assets2/images/UnDietChart.png';
import {Typography} from '@mui/material';
import Push from '../../assets2/images/pushup.jpeg';
import Pull from '../../assets2/images/pullup.jpeg';
import Squat from '../../assets2/images/squat.jpeg';
import Bench from '../../assets2/images/bench.jpeg';
import Lunge from '../../assets2/images/lunges.jpeg';
import Overhead from '../../assets2/images/overhead.png';




const Underweight = () => {
  return (
    <div>
    <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Diet Plan
    </Typography>
    <div>
    <img src={Und} alt="Underweight" style={{width:"25%"}} />
    <img src={Diet} alt="UnDiet" style={{width:"75%", padding:"25% 0 25% 0"}} />
    </div>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
      <br />    Do's
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Eat more often<br />
    2: Drink Milk<br />
    3: Try Weight gainer shakes<br />
    4: Use Bigger Plates<br />
    5: Add cream to your coffee<br />
    6: Take Creatine<br />
    7: Get Quality Sleep<br />
    8: Eat your protein first and vegetables last<br />
    </Typography>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
     Don'ts
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Drink water before meals<br />
    2: Smoke
   
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
    <br />What to eat to bulk up:
   </Typography>
   <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
   It’s not hard to gain weight by eating more. But be mindful of what you eat to gain healthy weight. <br />
   A diet to bulk up mainly consists of healthy fats, proteins, and complex carbohydrates that help build muscle and use fat to burn energy.
   lean proteins, such as chicken and fish<br /><br /> 
   Try some of the following foods:<br />
     -red meat with no growth hormones, such as grass-fed beef
     <br />  --eggs
     <br />  --full-fat dairy, such as whole milk and full-fat Greek yogurt
     <br />  --fat-rich fruits, such as avocados
     <br />  --nuts, such as almonds
     <br />  --whole-grain breads<br /><br />
  </Typography>    
    <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Exercise Plan
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Pushups
     <img src={Push} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Pullups
     <img src={Pull} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Squats
     <img src={Squat} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Lunges
     <img src={Lunge} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Bench Press
     <img src={Bench} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Overhead Press
     <img src={Overhead} alt="Underweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     <br />What exercises to avoid:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    To gain weight, minimize aerobic and cardio exercises. These are meant to burn fat and tone muscle, not bulk you up.<br />

    You don’t have to avoid them entirely, though. You can do these exercises in moderation to tone your muscles.<br /> This will help you build definition so that you can achieve the look that you want.
   </Typography>
  
    </div>
  )
}

export default Underweight