/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "../components/Lists/ListItem";
import { selectAllCategories } from "../store/slices/categoriesSlice";

export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
