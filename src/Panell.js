import React, {useState} from "react";

export default function Panell (){
    const [formData, setFormData] = useState({
        pages:'',
        lenguages:''})
    const sumaAdicionalTotal =  (formData.pages * 30) + (formData.lenguages * 30)

    function selectpages (event){
        props.updatePages(event.target.value)



        
        const {type, name, value} = event.target
        setFormData(prevFormData => {
            return{
             ... prevFormData,
            [event.target.name] : event.target.value
            }
        }) 
    }


    return(
        <div>
            <label>Nº pages</label>
            <input 
                type='text' 
                name='pages'
                value={formData.pages}
                placeholder='page'
                onChange={selectpages}
                
            /> <br/>
            <label>Nº lenguages</label>
            <input 
                type='text' 
                name='lenguages'
                value={formData.lenguages}
                placeholder='lang'
                onChange={selectpages}
            />
           <p>Precio adicional = {sumaAdicionalTotal} €</p>
        </div>
    )
}