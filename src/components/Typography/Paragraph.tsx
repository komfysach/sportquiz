// Components==============
import theme from 'constants/theme';
import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {ParagraphTypes} from 'typings/ParagraphTypes';
// =========================

type Opacities = 30 | 50 | 80 | 100;

interface TextPropsWithOpacities extends React.PropsWithChildren<TextProps> {
  opacity?: Opacities;
}

const Text = styled.Text<{paragraphType: ParagraphTypes; opacity: Opacities}>`
  color: ${theme.greenBlack};
  font-family: ${theme.SpaceGrotesqueRegular};
  opacity: ${({opacity}) => {
    switch (opacity) {
      case 30:
        return 0.3;
      case 50:
        return 0.5;
      case 80:
        return 0.8;
      case 100:
        return 0.8;
      default:
        return 1;
    }
  }};
  font-size: ${({paragraphType}) => {
    switch (paragraphType) {
      case 'ParagraphSmall':
        return theme.Paragraph12;
      case 'Paragraph':
        return theme.Paragraph14;
      case 'ParagraphLarge':
        return theme.Paragraph16;
    }
  }};
  line-height: ${({paragraphType}) => {
    switch (paragraphType) {
      case 'ParagraphSmall':
        return '20px';
      case 'Paragraph':
        return '24px';
      case 'ParagraphLarge':
        return '26px';
    }
  }};
`;

export function ParagraphSmall({
  children,
  style,
  opacity = 100,
  ...rest
}: TextPropsWithOpacities) {
  return (
    <Text
      paragraphType="ParagraphSmall"
      opacity={opacity}
      style={style}
      {...rest}>
      {children}
    </Text>
  );
}

export function Paragraph({
  children,
  style,
  opacity = 100,
  ...rest
}: TextPropsWithOpacities) {
  return (
    <Text paragraphType="Paragraph" opacity={opacity} style={style} {...rest}>
      {children}
    </Text>
  );
}

export function ParagraphLarge({
  children,
  style,
  opacity = 100,
  ...rest
}: TextPropsWithOpacities) {
  return (
    <Text
      paragraphType="ParagraphLarge"
      opacity={opacity}
      style={style}
      {...rest}>
      {children}
    </Text>
  );
}
