import { useStore } from "../../store";
import "./Column.css";
import Task from "./Task";
import { useMemo } from "react";

function Column({ state }) {
  const tasks = useStore((store) => store.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.state === state);
  }, [tasks, state]);

  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => addTask("test " + state, state)}>Add</button>
      </div>
      {filteredTasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}

export default Column;
