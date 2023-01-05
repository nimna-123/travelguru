import React from 'react'
import { useSelector } from 'react-redux';
import LightBg from '../assets/images/light.jpg'
import DarkBg from '../assets/images/dark.jpeg'
const SideImage = () =>{
   const show = useSelector((state) => state.lightMode);
    return(
        <div className='col-md-7 nopadmar'>
           <img src={show?DarkBg:LightBg} alt='lightbg' width='100%' height='850px'/>

        </div>
    )
}
export default SideImage