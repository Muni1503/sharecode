import React from 'react'
import  Ove from '../../assets2/images/Overweight.png'
import Diet from '../../assets2/images/obdiet.png'
import {Typography} from '@mui/material'
import Stretch from '../../assets2/images/stretch.png';
import Cardio from '../../assets2/images/cardio.jpeg';
import Yoga from '../../assets2/images/yoga.jpeg';
import Dance from  '../../assets2/images/dance.jpeg';


const Overweight = () => {
  return (
    <div>
    <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Diet Plan
    </Typography>
    <div>
    <img src={Ove} alt="Obese" style={{width:"25%"}} />
    <img src={Diet} alt="UnDiet" style={{width:"75%", padding:"25% 0 25% 0"}} />
    </div>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
      <br />    Do's
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Eat more vegetables - add them at every meal.<br />
    2: Drink plenty of water - you can become hungry when thirsty.<br />
    3: Try eating off smaller plates so as to eat smaller portions<br />
    4: Exercise between 30 minutes to one hour each day with moderate exercise<br /> - brisk walking, team sport, cycling or swimming.<br />
    5: Be mindful of what you put in your mouth and your shopping trolley.<br />
   
    </Typography>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
     Don'ts
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Rely on soft drinks, sweetened cereals, cookies and cakes, donuts and pastries,<br /> chips, and confectionery to get you through the day.<br />
    2: Don't skip meals. This will tempt you to snack and DO NOT snack between meals<br />
    3: Avoid eating quickly. Sit and chew each bite. <br />
    4: Don't food shop when you're hungry. <br />
    5: Don't eat more than two or three pieces of fruit per day<br />
   
    </Typography>   
    <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Exercise Plan
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
    <br /> Stretching
     <img src={Stretch} alt="Overweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
    <br />Cardio
     <img src={Cardio} alt="Overrweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
    <br />Yoga Poses
     <img src={Yoga} alt="Overrweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
    <br />Dancing
     <img src={Dance} alt="Overrweight"  />
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     <br />What exercises to avoid:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
     Avoid very heavy and intense workouts as your body needs to adapt to exercising in a slower pace<br />
     Also only start with very light weights and overload as time passes on.  
     </Typography>
     <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
   <br />Make exercise a regular part of your daily routine
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Skip the elevator and take the stairs.<br />
    2: Park far away from the entrance at the grocery store.<br />
    3: Sit on an exercise ball at work to strengthen your core and back muscles.<br />
    4: Go for a walk at lunch or after work.<br />
    5: Nuts, seeds, beans, and other healthful sources of protein (fish and poultry)<br />
    6: Use hand weights or resistance bands while you watch TV.<br />
    7: Turn on some music and dance.<br /><br />
  </Typography> 
    </div>
  )
}

export default Overweight