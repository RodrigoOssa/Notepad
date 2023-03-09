import React from "react";
import { ReactDOM } from "react";
import '../App.css';

const AddNote = ({ getNote }) => {
    const sendNote = (event) => {
        event.preventDefault();
        let titulo = document.getElementById("postTitle").value;
        let nota = document.getElementById("postContent").value;
        const myObj = {
            titulo: titulo,
            nota: nota
        }
        getNote(myObj);
    }
    return (
        <div className="addNote">
            <form className="noteForm" onSubmit={sendNote}>
                <label className="hoja-notas">
                    <textarea id="postContent" className="inputTextArea"></textarea>
                </label>
                <level className="titulo-nota">
                    <input id="postTitle" type="text" placeholder="Título Nota"></input>
                    <input className="inputBotton" type="submit" value="Añadir Nota"></input>
                </level>

            </form>
        </div>

    )
}

export default AddNote;