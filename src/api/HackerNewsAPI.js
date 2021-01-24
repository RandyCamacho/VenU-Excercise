import axios from "axios";

//URLs to get data from API
export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesURL = `${baseURL}topstories.json`;
export const storyURL = `${baseURL}item/`;

/**
 * Using Ajax's axios get the top stories Ids from the API and return the data.
 * note: async always returns promises.
 */
export const getStoryIds = async () => {
  const result = await axios
    .get(topStoriesURL)
    .then(({ data }) => data)
    .catch(() => {
      console.log("error");
    });

  return result;
};

/**
 * Using the story Id to get the story
 * note: async always returns promises.
 */

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyURL + storyId}.json`)
    .then(({ data }) => data)
    .catch(() => {
      console.log("error");
    });
  return result;
};
