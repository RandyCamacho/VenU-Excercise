/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants/Constant";
import { Debounce } from "./Debounce.js";

/**
 * Utility Function to only present 20 stories at a time
 * uses a debounce method to controll when the handleScroll
 * method should be fired
 *
 * return the count - number of stories
 */

export const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = Debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 300);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
