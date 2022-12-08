import React from "react";
import './box.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export function Box(){
    return(
        <>
    <div className="boxcontainer">
        <h1>Boxes</h1>
        <div className="d-flex boxa1">
            <div className="boxb1 col-lg-4 p-5">
                <h4 className="boxc1 m-auto">Small</h4>
            </div>
            <div className="boxd1 col-lg-4 p-5">
                <h4 className="boxe1 m-auto">Medium</h4>
            </div>
            <div className="boxf1 col-lg-4">
                <h4 className="g1 m-auto">Large</h4>
            </div>
     </div>

    </div>
    </>
    );

}
