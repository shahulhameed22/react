import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {  faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './note.css';

export function Notification(){
    return(
        
            <div className="text-center">
                <h1>Notification</h1>
                <div className="notecontainer">

                    <div className="col-lg-12 row" >
                        <div className=" col-lg-3 info1 bg-primary"><FontAwesomeIcon icon={faCircleCheck} className="text-light"/><span>Information Message</span> </div>
                        <div className=" col-lg-3 info2 bg-success" ><FontAwesomeIcon icon={faCircleCheck} className="text-light"/><span>Success Message</span> </div>
                        <div className=" col-lg-3 info3 bg-warning"><FontAwesomeIcon icon={faBell} className="text-light"/><span>Warning Message</span></div>
                        <div className=" col-lg-3 info4 bg-danger"><FontAwesomeIcon icon={faCircleExclamation} className="text-light"/><span>Error Message</span></div>
                    </div>           
                </div>
            </div>
            
    
    )

}