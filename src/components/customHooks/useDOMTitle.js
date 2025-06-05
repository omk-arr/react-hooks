import {useEffect} from "react";

const useDOMTitle = (count) => {
  useEffect(() => {
    document.title = `Title through hook : ${count}`;
  }, [count]);
};

export default useDOMTitle;
