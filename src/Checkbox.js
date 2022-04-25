import React, { useState } from "react";

export default function Checkbox(props){
    const [selected, setSelected] = useState(true)
    const handleClickWeb = () => { 
        setSelected (prevState => !prevState)
        //console.log(event.target)
        //console.log(selectedCheck)
        if (selected === false){
            //setSelected(true)
            console.log('soy false')
            console.log(selected)
        }else{
            console.log('soy true')
            console.log(selected)
        }
    }
    

    return (
        <div>
            <input type="checkbox" onChange={handleClickWeb}  /> Web: 500€
        </div>
    )
  }