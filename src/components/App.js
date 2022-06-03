import video from "../data/video.js";
import Comments from "./Comments.js";
import Title from "./Title.js";
import React, {useState} from "react";


function App() {
  console.log("Here's your data:", video);
  const [hiddenComments, setHiddenComments] = useState(false)

  function brnName() {
    if (hiddenComments ===  false) {
        return (
            "Hide Comments"
            )
    }
    if (hiddenComments === true) {
        return "Show Comments"
    }
}
function handleClick() {
  setHiddenComments(hiddenComments => !hiddenComments)
}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title  />
      <button onClick={handleClick}>{brnName(handleClick)}</button>
      <hr></hr>
      {hiddenComments ? null : <Comments/>}
    </div>
    
  );
}

export default App;
