/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllTasks } from "../app/store/tasksSlice";
import { SearchInput } from "../widgets/SearchInput/SearchInput";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <SearchInput categories={tasks} />
  );
};
