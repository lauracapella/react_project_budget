import React, { useState } from "react";
import styled from "styled-components"

export const Panell2 = styled.div`
border-radius: 10px;
border: 3px solid black;
padding:10px;
margin: 10px;
width: 300px
`

export default function Panell (props){
  return (
    <div>
     <label htmlFor="email">Nº pages</label>
      <button onClick={()=>{props.updateBudget('pages', props.budget.pages + 1)}} >+</button>
      <input
        type="number"
        name="pages"
        onChange={props.onChange}
        value={props.budget.pages}
      />
      <button onClick={()=>{props.updateBudget('pages', props.budget.pages - 1)}} >-</button>
      <br />
      <label htmlFor="email">Nº language</label>
      <button onClick={()=>{props.updateBudget('lenguages', props.budget.lenguages + 1)}} >+</button>
      <input
        type="number"
        name="lenguages"
        onChange={props.onChange}
        value={props.budget.lenguages}
      />
      <button onClick={()=>{props.updateBudget('lenguages', props.budget.lenguages - 1)}} >-</button>
      <br />
    </div>
  );
}