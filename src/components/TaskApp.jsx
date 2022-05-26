import React, { useEffect, useState } from "react";
import TaskHeader from '../components/TaskHeader/TaskHeader'
import AddTask from '../components/AddTask/AddTask'
import Tasks from '../components/Tasks/Tasks'
import styles from "./taskApp.module.css";
import axios from "axios";
// import data from "../data/tasks.json"


const TaskApp = () => {


  const [input,setInput] = useState("")
  const [inputList,setInputList] = useState([])
  const [page,setPage] =  useState(1)
  const [totalPage,setTotalPage]=useState(0)  
  const [pageLimit,setPageLimit]=useState(5)
  
  useEffect(()=>{
    axios
    .get(`http://localhost:8080/todos?_page=${page}&_limit=${pageLimit}`)
    .then((res)=>{
      setInputList(res.data);
      setTotalPage(res.headers['x-total-count'])
    })
  },[page,pageLimit])
  
  // useEffect(()=>{
  //   const getTodo = async ()=>{
  //     let res = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=5`)
  //     setInputList(res.data)
  //   }
  //   getTodo()
  // },[page])

  // useEffect(()=>{
  //   fetch(`http://localhost:8080/todos?_page=${page}&_limit=5`)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setInputList(data)     
  //   })
// },[page])
 

  const saveInfo =()=>{
    fetch("http://localhost:8080/todos",{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        text:input,
        done:false,
        count:1
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(input)
      {
        setInputList([...inputList,data]);setInput("")
      }
    })
  }

  const deleteItem = (id) =>{
    const updatedList = inputList.filter(el=>{return el.id!==id})
    setInputList(updatedList)
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>

      {/* Header */}
      <TaskHeader inputList={inputList}/>

      {/* Add Task */}
      <AddTask  input={input} setInput={setInput} inputList={inputList} setInputList={setInputList} saveInfo={saveInfo} />

      {/* Tasks */}
      <Tasks input={input} setInput={setInput} inputList={inputList} setInputList={setInputList} deleteItem={deleteItem}/>

      {/* Buttons */}
      <button  disabled={page<=1} onClick={()=>{if(page>1)setPage(page-1)}}>Previous</button>
      <select onChange={e=>setPageLimit(e.target.value)}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      </select>
      <button  disabled={page>(Math.floor(totalPage/5))} onClick={()=>{return setPage(page+1)}}>Next</button>
      
      {/* Breaks */}
      <br></br>
      <br></br> 
      <br></br>
      <br></br>
      
    </div>
  );
};

export default TaskApp;
