import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"; 

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter); 

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts by name"
      />
    </div>
  );
};

export default Filter;
