import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase is clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been successfully converted to uppercase','success');
    if(newText===''){
      props.showAlert('Please enter any text to use this feature','danger');
    }
  };
  const handleLowClick = () => {
    // console.log('lowercase is clicked'+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been successfully converted to lowercase','success');
    if(newText===''){
      props.showAlert('Please enter any text to use this feature','danger');
    }
  };
  const handleClear = () => {
    // console.log('bold is clicked'+text);
    let newText = "";
    setText(newText);
    props.showAlert('Text has been successfully cleared','success');
  };
  const handleCopy = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text has been copied to clipboard','success');
  };
  const handleOnChange = (event) => {
    // console.log('onchanged is clicked');
    setText(event.target.value);
  };

  const [text, setText] = useState("Click Below for Demo ~ Enter text here");
  return (
    <>
      <div className="container" style={{
              color: props.mode === "light" ? "black" : "white",
            }}>
        <div className="mb-3">
          <h1>{props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myText"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary  my-2" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container my-4" style={{
              color: props.mode === "light" ? "black" : "white",
            }}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          <b> {text.split(" ").length}</b> words, <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
