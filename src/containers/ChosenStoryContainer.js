import React, { useState, useEffect } from "react";
import { getStory } from "../api/HackerNewsAPI";
import "../styles/ChosenStoryContainer.css";
import { UnixTime } from "../utils/UnixTime";

function ChosenStoryContainer({ values, storyId, toStories }) {
  const [story, setStory] = useState({});

  /**
   * get the story using the Story Id
   */
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return (
    <div className="chosen_wrapper">
      <div className="chosen_container">
        <div className="full_name">
          <h3>Your Name: {values.firstName}</h3>
          <h3>{values.lastName}</h3>
        </div>
        <div className="user_email">
          <h4>Your Email: {values.email}</h4>
        </div>
        <div className="chosen_story">
          <h3>Your Story: </h3>
          <div className="chosen_title">
            <h3>{story.title}</h3>
          </div>
          <div className="chosen_author">
            <h4>By: {story.by}</h4>
          </div>
          <div className="chosen_details">
            <h5>Score: {story.score}</h5>
            <h5> Posted: {UnixTime(story.time)}</h5>
          </div>
        </div>
        <button onClick={toStories}> Back to Stories </button>
      </div>
    </div>
  );
}

export default ChosenStoryContainer;
