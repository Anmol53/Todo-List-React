import React, { useState, useEffect } from "react";
import "./style.css";

export default function Cursor(props) {
  const [idle, setIdle] = useState(true);
  const onMouseMove = (e) => {
    const cursor = document.querySelector(".cursor");
    setIdle(false);
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    setTimeout(() => setIdle(true), 1000);
  };
  const idleClass = idle ? " cursor-idle" : "";

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return <div className={`cursor${idleClass}`}></div>;
}
