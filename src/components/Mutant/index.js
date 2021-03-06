import React from "react";
import "./style.css";

function Mutant(props) {
  return (
    <div className="img-container mutant" onClick={props.handleClick}>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Mutant;