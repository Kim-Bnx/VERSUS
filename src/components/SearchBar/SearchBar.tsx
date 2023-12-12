import { Box, TextInput } from '@mantine/core';
import './SearchBar.scss';
import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeSearchInputValue, search } from '../../store/reducers/search';

function SearchBar() {
  const icon = <IconSearch />;
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const errorMsg = useAppSelector((state) => state.search.error);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeSearchInputValue(newValue));
  };

  const handleSubmitSearchForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(search(searchTerm));
  };

  return (
    <Box component="form" onSubmit={handleSubmitSearchForm}>
      <TextInput
        className="search-bar"
        placeholder="Recherche un évent, team, joueur ..."
        aria-label="Barre de recherche"
        rightSection={icon}
        value={searchTerm}
        onChange={handleChangeSearchValue}
      />
      {errorMsg && <Box>{errorMsg}</Box>}
    </Box>
  );
}

export default SearchBar;
