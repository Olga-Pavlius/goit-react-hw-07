import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../../src/assets/redux/filtersSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
