/* VENDOR */
import React from "react";

import { useSelector } from "react-redux";
/* APPLICATION */
import { ListItem } from "../components/Lists/ListItem";
import { selectAllTasks } from "../store/slices/tasksSlice";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
