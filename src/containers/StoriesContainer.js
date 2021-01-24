import React, { useState, useEffect } from "react";
import "../styles/StoriesContainer.css";
import { getStoryIds } from "../api/HackerNewsAPI";
import Story from "../components/Story";
import Header from "../components/Header";
import { InfiniteScroll } from "../utils/InfiniteScroll";

function StoriesContainer({ values, submitStory }) {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = InfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <div className="stories_container">
      <div className="header">
        <Header values={values} />
      </div>
      {storyIds.slice(0, count).map((storyId) => (
        <Story
          key={storyId}
          storyId={storyId}
          submitStory={(storyId) => {
            submitStory(storyId);
          }}
        />
      ))}
    </div>
  );
}

export default StoriesContainer;
