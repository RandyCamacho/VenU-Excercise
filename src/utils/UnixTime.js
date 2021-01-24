/**
 * takes in a unix timestamp and converts it.
 * @param timestamp
 * returns a date in 1/23/2021, 5:50:13 PM MST format
 */

export const UnixTime = (timestamp) => {
  const milliseconds = timestamp * 1000;

  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toLocaleString("en-US", {
    timeZoneName: "short",
  }); // 1/23/2021, 5:50:13 PM MST

  return humanDateFormat;
};
