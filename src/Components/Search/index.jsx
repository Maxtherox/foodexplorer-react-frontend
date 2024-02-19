// components/Search/index.js
import React from 'react';
import { Container } from './styles';
import { Input } from '../Input';
import { MagnifyingGlass } from '@phosphor-icons/react';

const Search = ({ onSearch }) => {
  const handleSearchChange = (searchTerm) => {
    // Chama a função de pesquisa passada como propriedade
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </Container>
  );
};

export default Search;
