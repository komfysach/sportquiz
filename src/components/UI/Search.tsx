import theme from '../../constants/theme';
import React from 'react';
import styled from 'styled-components/native';
import {MagnifyingGlassIcon as SearchIcon} from 'react-native-heroicons/solid';

const SearchContainer = styled.View`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing2};
  border-radius: ${theme.borderRadiusFull};
  flex-direction: row;
`;

const SearchInput = styled.TextInput`
  border-radius: ${theme.borderRadiusFull};
  font-family: ${theme.UrbanistRegular};
`;

const SearchWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: ${theme.spacing10};
  flex-direction: row;
  gap: ${theme.spacing5};
`;

export default function Search() {
  return (
    <SearchContainer>
        <SearchWrapper>
      <SearchIcon color={theme.greenBlack} size={20} />
      <SearchInput placeholder="Search" />
      </SearchWrapper>

    </SearchContainer>
  );
}
