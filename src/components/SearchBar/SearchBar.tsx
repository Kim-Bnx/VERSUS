import { Autocomplete, Box } from '@mantine/core';
import './SearchBar.scss';
import { IconSearch } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeSearchInputValue, search } from '../../store/reducers/search';

function SearchBar() {
  const icon = <IconSearch />;
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const errorMsg = useAppSelector((state) => state.search.error);
  const data = useAppSelector((state) => state.search.searchResults);

  const events = data.events.map((event) => event.title);
  const users = data.users.map((user) => user.username);
  const teams = data.teams.map((team) => team.name);

  const handleChangeSearchValue = (newValue: string) => {
    dispatch(changeSearchInputValue(newValue));
    dispatch(search(newValue));
  };

  return (
    <Box>
      <Autocomplete
        className="search-bar"
        placeholder="Recherche un event, team, joueur ..."
        aria-label="Barre de recherche"
        rightSection={icon}
        value={searchTerm}
        onChange={handleChangeSearchValue}
        data={[
          { group: 'Events', items: events },
          { group: 'Utilisateurs', items: users },
          { group: 'Teams', items: teams },
        ]}
      />
      {errorMsg && <Box>{errorMsg}</Box>}
    </Box>
  );
}

export default SearchBar;
