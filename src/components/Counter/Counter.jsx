import React from "react";
import styles from "./counter.module.css";

const Counter = ({count,setCount}) => {
  // sample value to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>

      <button data-cy="task-counter-increment-button" className={styles.btn} onClick={()=>(setCount(count+1))}>   +    </button>

      <span data-cy="task-counter-value" className={styles.text}>{count}</span>

      <button data-cy="task-counter-decrement-button" className={styles.btn} onClick={()=>{if(count> 1){setCount(count-1)}}}>   -   </button>

    </div>
  );
};

export default Counter;
