import React, { useState } from "react";
//import Checkbox from './Checkbox.js'

export default function Services(props){

    const [formData, setFormData] = useState({
        isWeb: false,
        isSeo: false,
        isAds: true
    })
    const [suma , setSuma] = useState(0)
    
    function handleClick(event){
        let sumaTotal = 0
        if (event.target.checked === true){
            sumaTotal = parseInt(parseInt(suma) + parseInt(event.target.value));

        } else {
            sumaTotal = parseInt(parseInt(suma) - parseInt(event.target.value));

        }
        const {name, value, type, checked, price} = event.target
        setSuma(sumaTotal)
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name] : checked
            }
        })
    }
    
    return (
      <div>
          <p>Que quieres hacer</p>
          <form>
             <input 
             type="checkbox"
             value="500" 
             name="isseb" 
             onChange={handleClick}
             checked={formData.isseb} /> 
             <label htmlFor="email">Web: 500€</label>
          <br /> 
            
            <input 
            type="checkbox" 
            value="300" 
            name="isseo" 
            onChange={handleClick} 
            checked={formData.isseo}/> 
            <label htmlFor="email">Consultoria SEO: 300€</label>
          <br />
  
            <input 
            type="checkbox" 
            value="200" 
            name="isads" 
            onChange={handleClick} 
            checked={formData.isads}/> 
            <label htmlFor="email">Google ADS: 200€</label>

            </form>
            <p>Preu: {suma}€</p>
        </div>
    );
  }