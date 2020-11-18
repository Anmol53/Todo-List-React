import React, { useState, Fragment } from "react";
import "./style.css";

export default function Task(props) {
  const [editable, setEditable] = useState(false);
  const [editedText, setNewText] = useState("");

  const darkInput = props.dark ? " dark-input" : "";

  //Keep Track of edit task input
  const updateText = ({ target }) => {
    setNewText(target.value);
  };

  //Callback edittext & reset states if updated text is not empty.
  const editText = () => {
    if (editedText != "") {
      props.editCallback(props.index, editedText);
      setEditable(false);
      setNewText("");
    }
  };

  return (
    <li id="" className="list-enclosure">
      <p className="list text-display">{props.text}</p>
      {editable ? (
        <>
          <input
            type="text"
            className={`editTask text-input text-input-pink no-l-radius${darkInput}`}
            onChange={updateText}
            placeholder="Edit item here"
            autoFocus
          />
          <button
            className="saveTask btn btn-pink btn-right"
            onClick={editText}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <button
            className="edit btn btn-pink bl no-l-radius"
            onClick={() => setEditable(true)}
          >
            Edit
          </button>
          <button
            className="delete btn btn-pink btn-right bl no-l-radius"
            onClick={() => props.deleteCallback(props.index)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
