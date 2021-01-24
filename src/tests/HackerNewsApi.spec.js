import axios from "axios";
import { getStoryIds, getStory, topStoriesURL } from "../api/HackerNewsAPI";
import { singleStory, storyIds, emptyStory } from "../fixtures/Fixture";

jest.mock("axios");

describe("HackerNewsApi", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getStory functionality", () => {
    it("requests and gets a story from the HackerNews Api", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singleStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(singleStory);
    });

    it("fails to get the story but is handled", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: emptyStory }));

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(emptyStory);
    });
  });

  describe("getStoryIds functionality", () => {
    it("gets the story Ids from the api", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(topStoriesURL);
      expect(entity).toEqual(storyIds);
    });
  });
});
