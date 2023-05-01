import React from "react";
import "./Button.css";
// import styled from "styled-components";
const Button = ({ text, onClick }) => {
  const className = () => {
    if (text === "ADD") {
      return "Addbtn";
    } else if (text === "EDIT") {
      return "Editbtn";
    } else if (text === "Delete") {
      return "Deletebtn";
    } else if (text === "Cancel" || text === "No") {
      return "btnWhite";
    } else if (text === "Yes" ) {
      return "btnBlue";
    }
    else{
      return "btnBlue";
    }
  };
  return (
    <button className={className()} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

