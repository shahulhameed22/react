import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './member.css';
import lap from './Laptop_002.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowCircleLeft, faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";

export function Member(){
    return(
        <div className="member_a1">
            <div className="container">
                <div className=" col-lg-12 row">
                    <div className="col-lg-6 ">
                        <img src={lap} className='col-lg-6 col-md-6 col-sm-12 lap img-fluid'/>
                    </div>
                    <div className="col-lg-6 p-5">
                        <h4 className="mem"> Member Login</h4>
                        <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <input type="text" className="member_d1" placeholder="Email"/>
                        </div><br></br>
                        <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faLock}/>
                            <input type="text" className="member_e1" placeholder="...."/>
                        </div><br></br>
                        <div className="col-lg-4" >
                            <input type="button" className="member_b1" value="LOGIN"/>
                        </div><br></br>
                        <div>
                            <p className="member_f1">Forgot <span className="member_c1">Username/Password?</span></p>
                            <p><span className="member_g1">Create your password <FontAwesomeIcon icon={faArrowRight} /></span></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}