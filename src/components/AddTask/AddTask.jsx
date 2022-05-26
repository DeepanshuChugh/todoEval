import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({input,setInput,inputList,setInputList,saveInfo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add New Task...📃" className={styles.input} value={input} onChange={(e)=>(setInput(e.target.value))} />
      <button data-cy="add-task-button" className={styles.addbtn} onClick={saveInfo}>+</button>
      <hr></hr>
    </div>
  );
};

export default AddTask;
