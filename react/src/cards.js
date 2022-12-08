import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './cards.css';
import d1 from './data1.jpg';
import d2 from './data2.jpg';
import d3 from './data3.jpg';
import d4 from './data4.jpg';

export function Cards(){
    return(
        <>
        <div className="cardcontainer">
            <div className="row">
                <div className="col-lg-12">
              
              
                    <h1>Learn 4.0 Technologies</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>Boost your career with this Data Analytics certification program, in partnership with Purdue University & in collaboration with IBM. The Data Analytics certification program features master classes and follows an applied learning model designed with real-life projects and business case studies.
                        Watch Intro Video</p>
                </div>

            </div>  
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-header">
                            <h3>Data scientist</h3>
                        </div>
                        <div className="card-body">
                            <p>Data scientists determine the questions their team should be asking and figure out how to answer those questions using data. They often develop predictive models for theorizing and forecasting.</p>
                        </div>
                        <div className="card-footer">
                            <img src={d1} className="img-fluid"/>
                        </div>
                    </div>
                         <div className="col-lg-6">
                            <div className="card-header">
                                <h3>IOT Developer</h3>
                                </div>
                                <div className="card-body">
                                    <p>Today, the Internet of Things (IoT) has found applications in numerous fields like smart homes (home automation), medical & healthcare, environmental monitoring, agriculture, manufacturing, energy management, and old-age care, among other things. </p>
                                    </div>
                                    <div className="card-footer">
                                        <img src={d2} className="img-fluid"/>

                                    </div>
                        </div>

                  </div>
                  <div className="row">
                  <div className="col-lg-6">
                    <div className="card-holder">
                        <h3>VR Developer</h3>
                        </div>
                        <div className="card-body">
                            <p>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create a layer of digital experience in our reality, such as Pokemon Go, a game that uses this technology.</p>
                            </div>
                            <div className="card-footer">
                             <img src={d3} className="img-fluid"/>
                            </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-header">
                        <h3>ML Engineer</h3>
                        </div>
                        <div className="card-body">
                            <p>Machine learning engineers act as critical members of the data science team. Their tasks involve researching, building, and designing the artificial intelligence responsible for machine learning and maintaining</p>
                        </div>
                        <div className="card-footer">
                            <img src={d4} className="img-fluid"/>
                                
                            </div>

                  </div>
                  </div>
                
            </div>
        </>

    );

}