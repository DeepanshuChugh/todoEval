import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({elem,isChecked,id,deleteItem}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(elem.value);
  const [strikeditem,setStriked]=useState(isChecked)
  return (
    <li key={id} data-cy="task" className={styles.task}>
      
      <input type="checkbox" data-cy="task-checkbox" className={styles.checkbox} onChange={(e)=>{setStriked(e.target.checked)}}/>
      {<span  className={strikeditem?styles.striked:""}>{elem}</span>}
      <div key={id} data-cy="task-text"><Counter/></div>
      
      {/* Counter here */}
      <button data-cy="task-remove-button" className={styles.cross} onClick={()=>deleteItem(elem.id)}>X</button>
    </li>
  );
};

export default Task;
