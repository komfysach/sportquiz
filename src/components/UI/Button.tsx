import React from 'react';
import styled from 'styled-components/native';
import {ParagraphLarge} from '../../components/Typography/Paragraph';
import theme from '../../constants/theme';

const ButtonWrapper = styled.TouchableOpacity<{inActive?: boolean}>`
  padding: ${theme.spacing15};
  background-color: ${theme.lightGreen};
  border-radius: ${theme.borderRadiusFull};
  flex-direction: row;
  gap: ${theme.spacing10};
  align-items: center;
  opacity: ${({inActive}) => (inActive ? 0.5 : 1)};
`;

const Label = styled(ParagraphLarge)<{center?: Boolean}>`
  color: ${theme.greenBlack};
  font-family: ${theme.SpaceGrotesqueBold};
  text-align: ${({center}) => (center ? 'center' : 'left')};
  flex: ${({center}) => (center ? 1 : 'auto')};
`;

export default function Button({
  label,
  icon,
  onPress,
  inActive,
  center,
}: {
  label: string;
  icon?: React.ReactNode;
  onPress: () => void;
  inActive?: boolean;
  center?: boolean;
}) {
  return (
    <ButtonWrapper inActive={inActive} onPress={onPress} disabled={inActive}>
      <Label center={center}>{label}</Label>
      {icon && icon}
    </ButtonWrapper>
  );
}
