/**
 * Returns a function that as longs it stays invoked, will not be triggered.
 * controlled in milliseconds
 *
 * @param  func
 * @param  wait
 * @param  immediate
 * @param  args
 *
 */

export const Debounce = (func, wait, immediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
