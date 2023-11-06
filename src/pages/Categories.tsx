/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllCategories } from "../app/store/categoriesSlice";
import { SearchInput } from "../features/SearchInput/SearchInput";

export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return <SearchInput categories={categories} />
};
