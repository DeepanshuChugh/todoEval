import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({elem,deleteItem}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <>
      <ul  data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <div  key={elem.id}><Task elem ={elem.value} id={elem.id} isChecked={elem.isChecked} deleteItem={deleteItem}  /></div>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
