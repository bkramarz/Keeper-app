import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  //Add item to notes array
  function addItem(input) {
    setNotes([...notes, input]);
  }

  //Delete item from notes array
  function deleteItem(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmitted={addItem} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
