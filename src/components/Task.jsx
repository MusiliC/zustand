import classNames from "classnames";
import "./Task.css";

const STATUS = 'PLANNED'

function Task({ title }) {
  return (
    <div className="task">
      <div> {title}</div>

      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", STATUS)}>{STATUS}</div>
      </div>
      {/* 
      <Task title="Todo" /> */}
    </div>
  );
}

export default Task;
