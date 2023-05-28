import React from 'react';
import Nor from '../../assets2/images/Normal.png'
import Diet from '../../assets2/images/inddiet.png';
import {Typography} from '@mui/material';

const Normal = () => {
  return (
    <div>
    <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     Diet Plan
    </Typography>
    <div>
    <img src={Nor} alt="Normal" style={{width:"25%"}} />
    <img src={Diet} alt="UnDiet" style={{width:"75%", padding:"25% 0 25% 0"}} />
    </div>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
        <br />  Do's
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Eat Healthy Fat to Lose Weight<br />
    2: Eat 2-3 hours before going to sleep<br />
    3: Make Healthy Swaps<br />
    4: Follow Smart Tips for Dining Out<br />
    </Typography>
    <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }} fontWeight={700} textTransform="capitalize">
     Don'ts
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1: Don't starve yourself<br />
    2: Dont dehydrate yourself<br />
    3: Dont eat if your are not hungry<br />
    4: Dont eat too much saturated fat<br />
   
    </Typography>
   
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     <br />Food Items To Limit
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
   1: Avoid candy, soda, sugar, white rice, white pasta, white bread, sweet syrup, breakfast cereal, desserts, and pastries contain simple carbohydrates.
   <br />2:  Avoid margarine, butter, eggs, milk, cheese, and red meat are high in saturated fat.
   <br />3:  Avoid eating red meat as it contains high levels of saturated fat that shoot up the cholesterol levels in the blood.
   <br />4:  Avoid eating fried foods such as fried chicken, deep fried foods, and potato fries.
   <br />5:  Avoid alcohol
   <br />6:  Avoid aerated and artificially sweetened drinks.
   </Typography>
   <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     <br />Food Items You Can Easily Consume:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    1:  Non-starchy fruits and vegetables
    <br />2:  Complex carbohydrates, found in whole grain bread and pasta, bran, etc.
    <br />3:  Use olive oil, vegetable oil, rice bran oil, canola oil, mustard oil, and peanut oil.
    <br />4:  Eat lentils, beans, soy, mushroom, tofu, fish, turkey, chicken breast, and lean cuts of beef.
    <br />5: Have five or six small meals throughout the day.
    <br />6:  Eat a heavy breakfast
   </Typography>    
   <Typography sx={{ fontSize: { lg: '25px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
   <br />Exercise Plan
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={700} textTransform="capitalize">
     To maintain your weight:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    Work your way up to 150 minutes of moderate-intensity aerobic activity each week.
     This could be brisk walking 30 minutes a day, 5 days a week.<br /> OR 
     <br />You could do 75 minutes of vigorous-intensity aerobic activity each week, such as swimming laps.
    </Typography>
    <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} fontWeight={500} >
     <br />Moderate:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
     While performing the physical activity, if your breathing and heart rate is noticeably faster but
      you can still carry on a conversation<br /> — it’s probably moderately intense.Examples include:
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Walking briskly (a 15-minute mile)
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Light yard work (raking/bagging leaves or using a lawn mower)
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Light snow shoveling
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Actively playing with children
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Biking at a casual pace
    </Typography>
    <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} fontWeight={500} >
    <br /> Vigorous:
    </Typography>
    <Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
    If your heart rate is increased substantially and you are breathing too hard and fast to have a conversation, it’s probably vigorously intense. Examples include:
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Jogging/running
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Swimming laps
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Rollerblading/inline skating at a brisk pace
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Cross-country skiing
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Jumping rope
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Most competitive sports (football, basketball)
    </Typography>
    </div>
  )
}

export default Normal