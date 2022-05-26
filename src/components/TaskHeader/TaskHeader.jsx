import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({inputList}) => {
  // sample values to be replaced

  let totalTask = inputList.length;

  let x = inputList.filter((el) => {
    return el.done === true;
  })
  let unCompletedTask =inputList.length - x.length;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <img src="http://images.squarespace-cdn.com/content/v1/572b90fa8a65e243d508a96d/1523859090212-O7KEV0TF29OIV2CL7ZNL/TODO+-+Logo+%28White%29+Grid+6.30.17.png" className={styles.logo} alt="" />
      <b data-cy="header-remaining-task">You have {unCompletedTask} of {totalTask} tasks remaining</b>
      <b data-cy="header-total-task"> </b>
      
    </div>
  );
};

export default TaskHeader;
