import React from 'react'
import { useState } from 'react';

export default function TextForm() {
    let text2 = `This is text2`
    const [text, setText] = useState("type here...")
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
        < div className='container' >
            <div className="mb-3">
                <h2 className='my-3'>Enter text below</h2>
                <textarea value={text} onChange={changeHandler} className="form-control" id="textForm" rows="5"></textarea>
                <button className='btn btn-primary my-2' onClick={clickHandler} value="uppercase">Uppercase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={clickHandler} value="lowercase">Lowercase</button>
            </div>
        </div >
    )
}
