import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer.js";
import StoriesContainer from "./StoriesContainer.js";
import ChosenStoryContainer from "./ChosenStoryContainer";
import "../styles/AppContainer.css";

function AppContainer() {
  const [storiesContainerDisplay, setStoriesContainer] = useState(false);
  const [chosenStoryDisplay, setChosenStoryDisplay] = useState(false);
  const [values, setValues] = useState({});
  const [storyId, setStoryId] = useState([]);

  useEffect(() => {}, [storyId, values]);

  return (
    <div className="app_container">
      {chosenStoryDisplay ? (
        <ChosenStoryContainer
          values={values}
          storyId={storyId}
          toStories={() => {
            setChosenStoryDisplay(false);
            setStoriesContainer(true);
          }}
        />
      ) : storiesContainerDisplay ? (
        <StoriesContainer
          values={values}
          submitStory={(storyId) => {
            setStoryId(storyId);
            setStoriesContainer(false);
            setChosenStoryDisplay(true);
          }}
        />
      ) : (
        <FormContainer
          submitForm={(values) => {
            setValues(values);
            setStoriesContainer(true);
          }}
        />
      )}
    </div>
  );
}

export default AppContainer;
