import React from "react";
import { ReactDOM } from "react";
import "../styles/notepad.css"

const Notes = ({ titulo, nota }) => {

    return (
        <div className="gridItem">
            <div className="gridItem-head">
                <div className="titulo">{titulo}</div>
                <img className="icono-nota" src="./img/chinche.png"></img>
            </div>
            <div className="gridItem-body">
                <div>{nota}</div>
            </div>
        </div>
    )
}

export default Notes;