import React, { useState } from "react";
import styles from "./addTask.module.css";
import Tasks from '../Tasks/Tasks'

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair\

  const [input,setInput]=useState("")
  const [inputList,setInputList]=useState([])
  
  const deleteItem = (id)=>{
    const updatedList = inputList.filter((el)=>{
      return el.id!==id;
    })
    setInputList(updatedList)
  }
  return (
    <div className={styles.todoForm}>
      <input  className={styles.input} data-cy="add-task-input" type="text" placeholder="Add task..." value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button  className={styles.btn} data-cy="add-task-button" onClick={()=>{
        if(input)
        {setInputList([...inputList,{id:Date.now(),value:input,isChecked:false}])
          setInput("")}}
    }>+</button>
    <hr></hr>

    {inputList.map((elem)=>(<Tasks   elem={elem} deleteItem={deleteItem}/>))}
    </div>
  );
};

export default AddTask;
