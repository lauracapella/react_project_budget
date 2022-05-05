import React from "react";
import {Link} from "react-router-dom"

export default function Wellcome(){
    return(
        <div>
            <ul>
                <li><Link to="/">Wellcome</Link></li>
                <li><Link to="/budget">Budget</Link></li>
            </ul>
        </div>
    )
}