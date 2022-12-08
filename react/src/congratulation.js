import React from 'react'
import App from './App'
import './App.css'
import profile from './profile-img.png'
import watch from './watch.jpg'

function Congratulation(){
    return(
        <div className='background'>
        <div className='fish'>
            <h1>Congratulation</h1>
            <img src={profile}/>
            <p>vishnu institute of computer education ond technology</p>
            <img src={watch} className="watch"/>

        </div>

        </div>  


    )
}
export default Congratulation;