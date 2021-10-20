import React from 'react'
import './Upload.css'

export default function Upload() {
    return (
        <>
            <div className="Sell-it-title">
                Sell It
           </div>
            <div className="sell-it-all-content">
        
           <form>
                <label>
                    Title
                    <input class="Title" id="Sell-it-boxes" type="text" placeholder="20 Characters Max" /> 
                </label>

                <label>
                    Price
                    <input class="Price" id="Sell-it-boxes" type="text" placeholder="$0.00" /> 
                </label>

                <label>
                    Location
                    <input class="location" id="Sell-it-boxes" type="text" placeholder="City, State, Zipcode" /> 
                    </label>
                    
                    <label>
                    Description
                    <input class="Description"  type="text" placeholder="Full Description. Maximum 500 characters." /> 
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
                <div className="add-image1" id="add-image">Add Image <span>&#43;</span></div>
                <div className="add-image1" id="add-image">Add Image <span>&#43;</span></div>
                <div className="add-image1" id="add-image">Add Image <span>&#43;</span></div>
                <div className="add-image1" id="add-image">Add Image <span>&#43;</span></div>
                </div>
                <div className="sell-it-cancel-buttons">

                   <button className="sell-it-button" id="upload-last-buttons">Sell it</button>
                    <button className="cancel-button" id="upload-last-buttons" >Cancel</button>
                </div>
        </div>
        </>
    )
}
