import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = (e) => {

        setText(text.toUpperCase());
    }

    const handleLowClick = (e) => {

        setText(text.toLowerCase());
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }


    const [text, setText] = useState('Enter Text Here3');



    return (
        <>

            <div className='container'>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>

            </div>
            <div className="container my-3">
                <h1>Yout Text Summary</h1>
                <p>{text.split(" ").length} words, and {text.length} charecters</p>
                <p>{text.split(" ").length * 0.008} Minutes to read.</p>
            </div>

            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
