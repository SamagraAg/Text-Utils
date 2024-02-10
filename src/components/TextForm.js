import React from 'react'
import { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState("Welcome to textUtils")
    function clickHandler(event) {
        const userCase = event.target.value;
        if (userCase === "uppercase")
            setText(text.toUpperCase());
        else if (userCase === "lowercase")
            setText(text.toLowerCase());
    }
    function changeHandler(event) {
        const textVal = event.target.value
        setText(textVal)
    }
    return (
        <>
            <div className='container my-3'>
                <h2 className='my-2'>Enter text below</h2>
                <div>
                    <textarea value={text} onChange={changeHandler} className="form-control" id="textForm" rows="5"></textarea>
                    <button className='btn btn-primary my-2' onClick={clickHandler} value="uppercase">Uppercase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={clickHandler} value="lowercase">Lowercase</button>
                </div>
            </div >
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p className='my-1'>{text.split(" ").length} words and {text.length} characters</p>
                <p className='my-1'>{text.split(" ").length * 0.008} minutes read</p>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
