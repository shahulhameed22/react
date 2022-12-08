import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from "react";
import { json } from "react-router-dom";
 
function Useeffect(){
    const [Productlist, setProductlist] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(json=>setProductlist(json))
    });
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            {
                Productlist.map((value,index)=>(
                    <div className="col-lg-4">
                        <div className="card-section">
                            <div className="card-header">
                                
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
        </>
    );
}