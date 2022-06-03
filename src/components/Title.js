import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";


function Title() {
    
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)
    const [hideComments, setHideComments] = useState(false)
    let commentClass = Comments 

    function upClick() {
        setUpVotes(upVotes + 1)
    }
    function downClick() {
        setDownVotes(downVotes + 1)
    }

    return (
        <div>
        <h2>{video.title}</h2>
        <p>{parseInt(video.views)} views | Uploaded {video.createdAt}</p>
        <button onClick={upClick}>{upVotes}</button> 
        <button onClick={downClick}>{downVotes}</button>
        <br></br>
        <br></br>        

        </div>
    )
}
// not sure how to get emojis
export default Title