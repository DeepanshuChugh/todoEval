import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  
  let count = 1;
  const [counter,setCount] = useState(count) 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.plus} onClick={()=>{setCount(counter+1)}}>+</button>
      <span  className={styles.text} data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button"  className={styles.minus} onClick={()=>{if(counter>1)setCount(counter-1)}}>-</button>
    </div>
  );
};

export default Counter;
