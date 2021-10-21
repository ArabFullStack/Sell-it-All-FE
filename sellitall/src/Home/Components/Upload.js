import React from 'react'
import './Upload.css'
import Nav from "./Nav"
import Footer from "./Footer"

export default function Upload() {
    return (
        <>
            <Nav/>
            <div className="Sell-it-title">
                Sell It
           </div>
            <div className="sell-it-all-content">
        
           <form className="upload-form">
                <label className="info-form">
                    Title
                    <input class="Title" id="Sell-it-boxes" type="text" placeholder="20 Characters Max" /> 
                </label>

                <label className="info-form">
                    Price
                    <input class="Price" id="Sell-it-boxes" type="text" placeholder="$0.00" /> 
                </label>

                <label className="info-form">
                    Location
                    <input class="location" id="Sell-it-boxes" type="text" placeholder="City, State, Zipcode" /> 
                    </label>
                    
                    <label className="info-form">
                        Description
                    <textarea class="Description" placeholder="Full Description. Maximum 500 characters." ></textarea>
                        
                </label>
                </form>
                <div className="category-buttons-contain">
                    <div className="Select-a-category">Select a category:</div>
                    <div className="buttons">
                <button id="sell-it-buttons">Bedroom</button>
                <button id="sell-it-buttons">Books</button>
                <button id="sell-it-buttons">Clothes</button>
                <button id="sell-it-buttons">Decor</button>
                <button id="sell-it-buttons">Living Room</button>
                    </div>
                    
                </div>
                <div className="add-images-container">
                <div className="add-image1" id="add-image">Add Image <span className="Plus-logo">&#43;</span></div>
                <div className="add-image2" id="add-image">Add Image <span className="Plus-logo">&#43;</span></div>
                <div className="add-image3" id="add-image">Add Image <span className="Plus-logo">&#43;</span></div>
                <div className="add-image4" id="add-image">Add Image <span className="Plus-logo">&#43;</span></div>
                </div>
                <div className="sell-it-cancel-buttons">

                   <button className="sell-it-button" id="upload-last-buttons">Sell it</button>
                    <button className="cancel-button" id="upload-last-buttons" >Cancel</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
