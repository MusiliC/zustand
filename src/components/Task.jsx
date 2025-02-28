import classNames from "classnames";
import "./Task.css";
import { useStore } from "../../store";


function Task({ title }) {

    const task = useStore(store => store.tasks.find(task => task.title === title))

  return (
    <div className="task">
      <div> {task.title}</div>

      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
      {/* 
      <Task title="Todo" /> */}
    </div>
  );
}

export default Task;
