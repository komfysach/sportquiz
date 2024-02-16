import React from 'react';
import styled from 'styled-components/native';
import {ParagraphLarge} from '../../components/Typography/Paragraph';
import theme from '../../constants/theme';

const ButtonWrapper = styled.TouchableOpacity`
  padding: ${theme.spacing15};
  background-color: ${theme.lightGreen};
  border-radius: ${theme.borderRadiusFull};
  flex-direction: row;
  gap: ${theme.spacing10};
  align-items: center;
`;

const Label = styled(ParagraphLarge)`
  color: ${theme.greenBlack};
  font-family: ${theme.SpaceGrotesqueBold};
`;

export default function Button({
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <ButtonWrapper>
      <Label>{label}</Label>
      {icon && icon}
    </ButtonWrapper>
  );
}
