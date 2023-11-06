/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllTasks } from "../app/store/tasksSlice";
import { SearchInput } from "../features/SearchInput/SearchInput";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <SearchInput categories={tasks}/>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
