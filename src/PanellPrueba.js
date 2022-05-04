import React, { useState } from "react";

export default function PanellPrueba(props) {
  return (
    <div>
      Panel de prueba! <br></br>
      <button onClick={()=>{props.updateBudget('pages', props.budget.pages + 1)}} >
        +
      </button>
      
      <input
        type="number"
        name="pages"
        onChange={props.onChange}
        value={props.budget.pages}
      />

      <button onClick={()=>{props.updateBudget('pages', props.budget.pages - 1)}} >
        -
      </button>

      <br />
      <button onClick={()=>{props.updateBudget('lenguages', props.budget.lenguages + 1)}} >
        +
      </button>
      <input
        type="number"
        name="lenguages"
        onChange={props.onChange}
        value={props.budget.lenguages}
      />
      <button onClick={()=>{props.updateBudget('lenguages', props.budget.lenguages - 1)}} >
        -
      </button>
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
  );
}
