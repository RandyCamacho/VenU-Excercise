import React, { useState, useEffect } from "react";
import { getStory } from "../api/HackerNewsAPI";
import { UnixTime } from "../utils/UnixTime";
import "../styles/Story.css";

/**
 * displays the individual stories.
 *
 */

function Story({ storyId, submitStory }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return (
    <div className="story_container">
      <div
        className="title"
        onClick={() => {
          submitStory(storyId);
        }}
      >
        <h3>{story.title}</h3>
      </div>
      <div className="author">
        <h4>By: {story.by}</h4>
      </div>
      <div className="details">
        <h5>Score: {story.score}</h5>
        <h5> Posted: {UnixTime(story.time)}</h5>
      </div>
      <span></span>
    </div>
  );
}

export default Story;
