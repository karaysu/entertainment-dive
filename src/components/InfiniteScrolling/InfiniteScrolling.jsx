import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  //Checking the scroll values of the window
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //When isFetching is true, run the callback onSearchSubmit to load more results to display
  useEffect(() => {
    if (!isFetching) return;
    callback();
    setIsFetching(false);
  }, [isFetching]);

  //Comparing the values and change isFetching to true for API call
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop <= (document.documentElement.offsetHeight - 200) || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;