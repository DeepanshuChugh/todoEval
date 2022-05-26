import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'

const Task = ({elem,id,deleteItem,}) => {


  // NOTE: do not delete `data-cy` key value pair
  const [count,setCount] = useState(elem.count)
  const [striked,setStriked] = useState(elem.done)  

  return (

    <li data-cy="task" className={styles.task} key={id}>

      <input type="checkbox" data-cy="task-checkbox" className={styles.checkBox} checked={striked} onChange={e=>setStriked(e.target.checked)} />

      <div data-cy="task-text" className={striked?styles.striked:styles.non} >{elem.text}</div>

      {/* Counter here */}
      <Counter count={count} setCount={setCount}/>

      <button data-cy="task-remove-button" className={styles.deleteBtn} onClick={()=>deleteItem(elem.id)}>X</button>

    </li>
  );
};

export default Task;
