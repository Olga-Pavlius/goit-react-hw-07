import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); // Оновлюємо фільтр
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search contacts by name"
      />
    </div>
  );
};

export default Filter;
