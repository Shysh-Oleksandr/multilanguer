import React, { useEffect, useRef } from "react";
import "./alert.css";

const Alert = ({ msg, removeAlert }) => {
  const alertRef = useRef();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3300);
    const fadeInTimeout = setTimeout(() => {
      alertRef.current.className += " show";
    }, 50);
    const fadeOutTimeout = setTimeout(() => {
      alertRef.current.className = "alert";
    }, 2600);
    return () => clearTimeout(timeout, fadeInTimeout, fadeOutTimeout);
  }, []);
  return (
    <p ref={alertRef} className="alert">
      {msg}
    </p>
  );
};

export default Alert;
