import React from "react";
import { ReactDOM } from "react";
import ".././styles/notepad.css"
import Notes from "./notes";

const Notepad = ({ notes }) => {
    return (
        <div className="container">
            {
                notes.map(item => {

                    return <Notes titulo={item.titulo} nota={item.nota}></Notes>
                })
            }
        </div>
    )
}

export default Notepad;