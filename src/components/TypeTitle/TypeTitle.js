import { Link } from "@mui/material";
import React from "react";
import './TypeTitle.css'

function TypeTitle({ title }) {
    return (
        <div className="type-title">
            <Link to='/'>{title}</Link>
        </div>
    )
}

export default TypeTitle