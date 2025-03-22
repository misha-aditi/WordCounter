import React, { useState } from 'react'


export default function Textform(props) {

    const[text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const upperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","primary")
    }
    const lowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","warning")
    }
    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Are you sure","danger")
    }
    const copyText = ()=>{
        let text = document.getElementById("myBox");
        let selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
        navigator.clipboard.writeText(selectedText.value);
        console.log(selectedText);
        props.showAlert("successfully copied","success")
    }
    const extraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra space","primary")
    }  
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? 'black' : 'white' ,color:  props.mode==='dark'? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={upperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={lowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>Copy</button>
        <button className="btn btn-primary my-1 mx-1" onClick={extraSpace}>Remove extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black' }}>
        <h3>Text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
    </div>
    </>
  )
}
