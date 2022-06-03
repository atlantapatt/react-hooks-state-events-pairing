import React from "react";
import video from "../data/video";

function Comments(hiddenComments) {
    const comments = video.comments
    return (
        
        <div className={hiddenComments.show ? 'show-class' : 'hide-class'}>
        <h2>{comments.length} Comments</h2>
        <h3>{comments[0].user}</h3>
        <p>{comments[0].comment}</p>
        <h3>{comments[1].user}</h3>
        <p>{comments[1].comment}</p>
        </div>
    )
}

export default Comments
