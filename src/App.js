import './App.css';
import React, { useState } from "react";
import Panell from './Panell'
import {Panell2} from './Panell'

function App(props) {
const [formData, setFormData] = useState({
    isweb: false,
    isseo: false,
    isads: false,
    pages:0,
    lenguages:0  
})
const [suma , setSuma] = useState(0)
const [sumaAd, setSumaAd] = useState(0)

function selectpages (event){
    //props.updatePages(event.target.value)  
    //const sumaAdicionalTotal =  (formData.pages * 30) + (formData.lenguages * 30) 
    //const sumaAdicionalTotal =  event.target.value * 30
    const sumaAdicionalTotal = event.target.value * 30 + (formData.pages * 30 + formData.lenguages * 30)
    setSumaAd(sumaAdicionalTotal)
    const {type, name, value} = event.target
    setFormData(prevFormData => {
        return{
        ...prevFormData,
        [event.target.name]:event.target.value
        }
    }) 
}  

function handleClick(event){
    let sumaTotal = 0
    if (event.target.checked === true){
        sumaTotal = parseInt(parseInt(suma) + parseInt(event.target.value));
        
    } else {
        sumaTotal = parseInt(parseInt(suma) - parseInt(event.target.value) );
    }

    const {type, name, value, checked} = event.target
    //const {type, name, value} = event.target
    setSuma(sumaTotal)

    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name] : checked,
            //[event.target.name] : event.target.value
        }
    })
}

return (
  <div>
      <p>¿Qué quieres hacer?</p>
      <form>
        <input 
        type="checkbox"
        value="500" 
        name="isweb" 
        onChange={handleClick}
        defaultChecked={formData.isweb} /> 
        <label htmlFor="email">Web: 500€</label>
        <br /> 
        
        {formData.isweb ? <Panell2><Panell onChange={(event) => selectpages(event)} /></Panell2> : <span></span>}
        
        <input 
        type="checkbox" 
        value="300" 
        name="isseo" 
        onChange={handleClick} 
        defaultChecked={formData.isseo}/> 
        <label htmlFor="email">Consultoria SEO: 300€</label>
        <br />

        <input 
        type="checkbox" 
        value="200" 
        name="isads" 
        onChange={handleClick} 
        defaultChecked={formData.isads}/> 
        <label htmlFor="email">Google ADS: 200€</label>

        </form>
        
        <p>Preu: {suma + sumaAd} €</p>
    </div>
);

}

export default App;