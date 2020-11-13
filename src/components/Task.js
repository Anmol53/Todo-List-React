import React, { useState } from "react";

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
      {text}
      { !editable ? (<button className="edit" onClick={() => setEditable(true)}>Edit</button>) : null }
      { !editable ? (<button className="delete" onClick={() => props.deleteCallback(props.index)}>Delete</button>) : null }
      { editable ? (<input className="editTask" onChange={updateText}/>) : null }
      { editable ? (<button className="saveTask" onClick={editText}>Save</button>) : null }
    </li>
  );
}
