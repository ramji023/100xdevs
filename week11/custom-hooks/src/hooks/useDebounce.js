import { useRef } from "react";

export default function useDebounce(fn) {
  const timerID = useRef();

  function debouncedFn() {
    clearTimeout(timerID.current);
    timerID.current = setTimeout(fn, 5000);
  }
  return debouncedFn;
}
