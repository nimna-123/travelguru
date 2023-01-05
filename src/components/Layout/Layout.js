import React from "react";
import Classes from "./Layout.module.css";
import { useSelector } from 'react-redux';

const Layout = (props) => {
    const showMode= useSelector((state) => state.lightMode);
  return (
    <div className="container-fluid nopadmar">
      <div className={showMode?`${Classes.bgD}`:`${Classes.bgL}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className={`${"col-md-10"} ${Classes.MainBox}`}>
            <div className="row nopadmar">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
