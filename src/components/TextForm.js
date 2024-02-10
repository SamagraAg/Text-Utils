import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Welcome to textUtils")
    function HandleUcase() {
        const newText = text.toUpperCase();
        setText(newText);
    }
    function HandleLcase() {
        const newText = text.toLowerCase();
        setText(newText);
    }
    function HandleClear() {
        const newText = "";
        setText(newText);
    }
    function HandleReverse() {
        const words = text.split(" ");
        const wordsRev = words.reverse();
        const newText = wordsRev.join(" ");
        setText(newText);
    }
    function HandleCopy() {
        navigator.clipboard.writeText(text).then(function () {
        }, function (err) {
        });
        props.showAlert(`Copied to clipboard`, `success`)
    }
    function changeHandler(event) {
        const textVal = event.target.value
        setText(textVal)
    }
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className='container my-3'>
                <h2 className='my-2'>Enter text below</h2>
                <div>
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#112440' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={changeHandler} className="form-control" id="textForm" rows="5"></textarea>
                    <button className='btn btn-primary my-2' onClick={HandleUcase} value="uppercase">Uppercase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={HandleLcase} value="lowercase">Lowercase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={HandleClear} value="lowercase">Clear Text</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={HandleReverse} value="lowercase">Reverse Text</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={HandleCopy} value="lowercase">Copy to clipboard</button>
                </div>
            </div >
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="container my-3">
                <h2>Text Summary</h2>
                <p className='my-1'>{text.split(" ").length} words and {text.length} characters</p>
                <p className='my-1'>{text.split(" ").length * 0.008} minutes read</p>
            </div>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
