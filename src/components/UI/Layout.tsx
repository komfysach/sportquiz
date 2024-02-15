import React from 'react';
import styled from 'styled-components/native';
import theme from '../../constants/theme';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const LayoutContainer = styled.View<{color?: string}>`
  flex: 1;
  padding: ${theme.spacing20};
  background-color: ${({color}) => color || theme.greenBlack};
`;

const BackLinkWrapper = styled.TouchableOpacity`
  padding-bottom: ${theme.spacing20};
`;

export default function Layout({
  children,
  backLink,
}: {
  children: React.ReactNode;
  backLink?: boolean;
}) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <LayoutContainer>
      {backLink && (
        <BackLinkWrapper onPress={goBack}>
          <ArrowLeftCircleIcon size={50} color={theme.lightGreen} />
        </BackLinkWrapper>
      )}
      {children}
    </LayoutContainer>
  );
}
