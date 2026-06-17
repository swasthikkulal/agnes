import React from "react";
import Boc2 from "./Boc2";

const Box = (props) => {
  return (
    <div>
      <h1>hello iam box {props.name}</h1>
      <Boc2 name={props.name}/>
    </div>
  );
};

export default Box;
