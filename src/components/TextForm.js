import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        console.log("Uppercase Button Clicked !!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase","success");
    }

    const handleLoClick = ()=>{
        console.log("Lowercase Button Clicked !!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
