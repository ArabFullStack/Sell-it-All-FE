import React from 'react'
import './Uploaded.css'
import Nav from './Nav'
import Footer from  './Footer'
export default function Uploaded() {
    return (
        <>
            <Nav />
            <div className="profile-items">
<div className="uploaded_profilecard">

    <button></button>
    <button></button> 
   
                </div>
                <div className="items-onsale-boxes">
                <div className="first-row-box">
                        <div className="uploaded_1" id="items-on-sale"></div>
                        <div className="uploaded_1" id="items-on-sale"></div>
                    </div>
                    
                <div className="second-row-box">
                <div className="uploaded_1" id="items-on-sale"></div>
                        <div className="uploaded_1" id="items-on-sale"></div>
                        </div>
                    </div>
            </div>

            <Footer/>
        </>
    )
}
