import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = (e) => {

        setText(text.toUpperCase());
    }

    const handleLowClick = (e) => {

        setText(text.toLowerCase());
    }
    const handleCamelClick = (e) => {

        setText(text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
    }

    const handleCopy = (e) => {

        navigator.clipboard.writeText(text);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }


    const [text, setText] = useState('');



    return (
        <>
            <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'grey',color : props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCamelClick}>Convert to CamelCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
                <h1>Yout Text Summary</h1>
                <p>{text.split(" ").length} words, and {text.length} charecters</p>
                <p>{text.split(" ").length * 0.008} Minutes to read.</p>
            </div>

            <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
