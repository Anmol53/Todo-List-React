import React, { useState } from "react";
import './style.css';

export default function Task(props){
  const [text, setText] = useState(props.text);
  const [editable, setEditable] = useState(false);
  const [editedText, setNewText] = useState("");

	const updateText = ({ target }) => {
    setNewText(target.value);
  }

  const editText = () => {
    if(editedText != ""){
      console.log(">" + editedText + "<");
      setText(editedText);
      setEditable(false);
      setNewText("");
      props.renderCallback();
    }
	}

  return (
    <li id="task" className="list">
      <p className="text-display">{text}</p>
      { !editable ? (<button className="edit btn btn-pink bl no-l-radius" onClick={() => setEditable(true)}>Edit</button>) : null }
      { !editable ? (<button className="delete btn btn-pink btn-right bl no-l-radius" onClick={() => props.deleteCallback(props.index)}>Delete</button>) : null }
      { editable ? (<input className="editTask text-input no-l-radius" onChange={updateText}/>) : null }
      { editable ? (<button className="saveTask btn btn-pink btn-right" onClick={editText}>Save</button>) : null }
    </li>
  );
}
