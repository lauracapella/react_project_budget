import React, { useState } from "react";

export default function ButtonPlus (props){
    return (
        <div>
          <button onClick={props.onClick} onChange={props.onChange} value = "add" >+</button>
        </div>
    )
}