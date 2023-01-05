import React from "react";
import Classes from "./SocialMedia.module.css";
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {BsApple} from 'react-icons/bs'
import { useSelector } from 'react-redux';
const SocialMedia = () => {
    const showMode= useSelector((state) => state.lightMode);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className={showMode?`${Classes.GoogleD}`:`${Classes.GoogleL}`}><FcGoogle size={22}/>&nbsp;Google</div>
        <div className={showMode?`${Classes.faceBookD}`:`${Classes.faceBookL}`}><AiFillFacebook  size={22} color='#1D22C0'/></div>
        <div className={showMode?`${Classes.AndroidD}`:`${Classes.AndroidL}`}><BsApple size={22}/></div>
      </div>
    </React.Fragment>
  );
};
export default SocialMedia;
