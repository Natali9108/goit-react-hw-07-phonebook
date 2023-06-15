import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterBox, FilterText, FilterField } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <FilterBox>
      <FilterText>Find contacts by name</FilterText>
      <FilterField
        autoComplete="off"
        type="text"
        name="name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterBox>
  );
};

export default Filter;
