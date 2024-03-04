import {NavigationProp, useNavigation} from '@react-navigation/native';
import {H4} from '../../../../../components/Typography/Headings';
import theme from '../../../../../constants/theme';
import React from 'react';
import styled from 'styled-components/native';
import {CategoryType} from 'typings/CategoryType';
import {QuizParamList} from 'typings/Navigation';

const CategoryContainer = styled.TouchableOpacity`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing15};
  border-radius: ${theme.borderRadius20};
  align-items: center;
  gap: ${theme.spacing5};
  width: 45%;
`;

const Image = styled.Image`
  width: 120px;
  height: 100px;
`;

const CategoryName = styled(H4)`
  color: ${theme.greenBlack};
`;

export default function Category({category}: {category: CategoryType}) {
  const navigation = useNavigation<NavigationProp<QuizParamList>>();

  const handleCategoryPress = () => {
    navigation.navigate('Quiz', {id: category.sport_id});
  };

  return (
    <CategoryContainer
      onPress={handleCategoryPress}
      testID="categories"
      key={category.sport_id}>
      <Image source={{uri: category.image}} />
      <CategoryName testID={`category-${category.sport_name}`}>
        {category.sport_name}
      </CategoryName>
    </CategoryContainer>
  );
}
