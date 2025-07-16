import { useEffect, useRef } from "react";

export default function usePrev(value, initial) {
  //   const prevValue = useRef();
  //   //   console.log(value)
  //   useEffect(() => {
  //     prevValue.current = value;
  //   }, [value]);
  //   return { prev: prevValue.current };

  const prevValue = useRef({ target: value, previous: initial });
  if (prevValue.current.target !== value) {
    prevValue.current.previous = prevValue.current.target;
    prevValue.current.target = value;
  }

  return { prev: prevValue.current.previous };
}
