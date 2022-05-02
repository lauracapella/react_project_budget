import React from "react";
import styled from "styled-components"


export const Panell2 = styled.div`
border-radius: 10px;
border: 3px solid black;
padding:10px;
margin: 10px;
width: 300px
`

export default function Panell (props, {onChange, placeholder}){

    return(
        <div>
            <label>Nº pages</label>
            <input 
                type='text' 
                name='pages'
                value={props.pages}
                placeholder='nº pages'
                onChange={props.onChange}
            /> <br/>
            <label>Nº lenguages</label>
            <input 
                type='text' 
                name='lenguages'
                value={props.lenguages}
                placeholder='nº languages'
                onChange={props.onChange}
            />
        </div>
    )
}