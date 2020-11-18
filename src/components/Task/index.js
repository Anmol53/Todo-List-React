import React, { useState } from "react";
import "./style.css";

export default function Task(props) {
  const [editable, setEditable] = useState(false);
  const [editedText, setNewText] = useState("");

  const darkInput = props.dark ? " dark-input" : "";

  const updateText = ({ target }) => {
    setNewText(target.value);
  };

  const editText = () => {
    if (editedText != "") {
      // TODO: Delete console log
      console.log(">" + editedText + "<");
      props.editCallback(props.index, editedText);
      setEditable(false);
      setNewText("");
    }
  };

  return (
    <li id="" className="list-enclosure">
      <p className="list text-display">{props.text}</p>
      {!editable ? (
        <button
          className="edit btn btn-pink bl no-l-radius"
          onClick={() => setEditable(true)}
        >
          Edit
        </button>
      ) : null}
      {!editable ? (
        <button
          className="delete btn btn-pink btn-right bl no-l-radius"
          onClick={() => props.deleteCallback(props.index)}
        >
          Delete
        </button>
      ) : null}
      {editable ? (
        <input
          type="text"
          className={`editTask text-input text-input-pink no-l-radius${darkInput}`}
          onChange={updateText}
          placeholder="Edit item here"
          autoFocus
        />
      ) : null}
      {editable ? (
        <button className="saveTask btn btn-pink btn-right" onClick={editText}>
          Save
        </button>
      ) : null}
    </li>
  );
}
