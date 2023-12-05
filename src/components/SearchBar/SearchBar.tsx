import { TextInput } from '@mantine/core';
import './SearchBar.scss';
import { IconSearch } from '@tabler/icons-react';

function SearchBar() {
  const icon = <IconSearch />;
  return (
    <TextInput
      className="search-bar"
      placeholder="Recherche un évent, team, joueur ..."
      aria-label="Barre de recherche"
      rightSection={icon}
    />
  );
}

export default SearchBar;
