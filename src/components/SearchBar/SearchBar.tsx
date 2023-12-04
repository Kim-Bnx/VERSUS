import { TextInput } from '@mantine/core';
import './SearchBar.scss';

function SearchBar() {
  return (
    <TextInput
      className="search-bar"
      placeholder="Recherche un évent, team, joueur ..."
    />
  );
}

export default SearchBar;
