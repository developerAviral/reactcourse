import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your Text Here.....');
    const handleUpClick = ()=>{
        console.log("Uppercase Button Clicked !!");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    )
}
