import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../constants/theme';
import {HeadingTypes} from '../../typings/HeadingTypes';

const Heading = styled.Text<{headingType: HeadingTypes}>`
  color: ${theme.greenBlack};
  font-family: ${({headingType}) =>
    headingType === 'H4'
      ? theme.SpaceGrotesqueMedium
      : theme.SpaceGrotesqueMedium};
  font-size: ${({headingType}) => {
    switch (headingType) {
      case 'H1':
        return theme.Heading32;
      case 'H2':
        return theme.Heading24;
      case 'H3':
        return theme.Heading18;
      case 'H4':
        return theme.Paragraph16;
    }
  }};
`;

export function H1(props: TextProps) {
  return (
    <Heading headingType="H1" {...props}>
      {props.children}
    </Heading>
  );
}

export function H2(props: TextProps) {
  return (
    <Heading headingType="H2" {...props}>
      {props.children}
    </Heading>
  );
}

export function H3(props: TextProps) {
  return (
    <Heading headingType="H3" {...props}>
      {props.children}
    </Heading>
  );
}

export function H4(props: TextProps) {
  return (
    <Heading headingType="H4" {...props}>
      {props.children}
    </Heading>
  );
}
