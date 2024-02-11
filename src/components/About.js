import React, { useState } from 'react'


export default function About(props) {
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : "black",
        backgroundColor: props.mode === 'dark' ? '#353030' : 'white',
    }
    return (
        <div className='container my-3'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Analysis</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            Textutils is utility a to analyze your text. It gives you features like to Word and Character counter, and tells you the approximate time required to read
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Text Manipulation</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            Text utils provide you with various feautures like Conversion to uppercase, Conversion to lowercase and Reversal of words in sentence.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>About our Team</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={myStyle} class="accordion-body">
                            This app was developed by Samagra Agrawal as part of React Learning course by codeWithHarry
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
