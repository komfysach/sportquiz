import {H4} from '../../../../../components/Typography/Headings';
import theme from '../../../../../constants/theme';
import React from 'react';
import styled from 'styled-components/native';
import {CategoryType} from 'typings/CategoryType';

const CategoryContainer = styled.View`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing15};
  border-radius: ${theme.borderRadius20};
  align-items: center;
  gap: ${theme.spacing5};
`;

const Image = styled.Image`
  width: 120px;
  height: 100px;
`;

export default function Category({category}: {category: CategoryType}) {
  return (
    <CategoryContainer testID="categories" key={category.id}>
      <Image source={category.icon} />
      <H4>{category.name}</H4>
    </CategoryContainer>
  );
}
