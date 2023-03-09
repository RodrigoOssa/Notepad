import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notepad from './components/notepad';
import AddNote from './components/addNote';

function App() {
  let [notes, setNotes] = useState([[]]);
  console.log("Esto se ejecuta una sola vez.")
  let array = [];

  const handleNote = (incomming) => {
    /* console.table(note)
    array.push(note)
    console.log(array) */
    setNotes(([...notes.reverse(), incomming]).reverse());
    console.log(notes)
  }
  return (
    <div className='notepad'>
      <AddNote getNote={handleNote}></AddNote>
      <Notepad notes={notes}></Notepad>
    </div>
  );
}

export default App;
