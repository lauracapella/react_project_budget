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
    return(
        <div>
          <button onClick={props.onClick} onChange={props.onChange} value = "add" >+</button>
            {/* <button onClick={props.onClick} name='suma' >+</button> */}
          <input
          type="number"
          name = "pages"
          //onChange={(e) => props.updateBudget("pages", e.target.value)}
          onChange={props.onChange}
          value= {props.defaultValue}        
          //defaultChecked={props.budget.pages}
        />            
        <button onClick={props.onClick} value = "substract" >--</button>

        <br />
        <input
          type="number"
          name = "lenguages"
          //onChange={(e) => props.updateBudget("languages", e.target.value)}
          onChange={props.onChange}
          //defaultChecked={props.budget.pages}
        />
        <br />
        </div>
       /*  <div>
            <label>Nº pages</label>
            <button onClick={contadorMas}> + </button>
            <input 
                type='text' 
                name='pages'
                value={props.pages}
                placeholder='nº pages'
                onChange={props.onChange}
            /> <button onClick={props.onClick}> - </button>
            <input type="number" value={quantity} onChange={updatePages} /><br/>
            <label>Nº lenguages</label>
            <input 
                type='text' 
                name='lenguages'
                value={props.lenguages}
                placeholder='nº languages'
                onChange={props.onChange}
            />
            <div>
   </div>
        </div> */
    )
}