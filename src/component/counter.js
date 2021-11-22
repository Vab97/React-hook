import React, { useState, useEffect } from "react";
import { useUpdateEffect } from "react-use";
const Counter = () => {

//useState hook

  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
 

//useEffect hook

  useEffect(() => {
    console.log(`UseEffect Hook - Button was clicked: ${count} times.`);
  });

  //useUpdateEffect hook
  useUpdateEffect(() => {
    console.log(`UseUpdateEffect Hook - Button was clicked: ${count} times.`);
  },[count]);


  return (
    <div>
      <h5 className="my-4" >You clicked {count} times</h5>
      <div>
        <button className="btn btn-secondary" onClick={incrementCount}>Click</button>
        
      </div>
    </div>
  );
};

export default Counter;
