import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  //Get current title and content of note
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setInput({ title: value, content: input.content });
    } else if (name === "content") {
      setInput({ title: input.title, content: value });
    }
  }

  //When submit button is clicked, add input to notes array
  function handleClick(event) {
    //Pass input into addItem function on App.jsx
    props.onSubmitted(input);
    //Prevent form from automatically resetting
    event.preventDefault();
    //Clear input field
    setInput({ title: "", content: "" });
    //Shrink down text area
    setIsExpanded(false);
  }

  //Expand text areo when user starts typing
  function handleExpand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        ) : null}
        <textarea
          onClick={handleExpand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
        />
        <button onClick={handleClick}> Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
