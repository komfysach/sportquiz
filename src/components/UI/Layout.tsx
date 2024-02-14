import React from 'react';
import styled from 'styled-components/native';
import theme from '../../constants/theme';

const LayoutContainer = styled.View<{color?: string}>`
  flex: 1;
  padding: ${theme.spacing20};
  background-color: ${({color}) => color || theme.green};
`;

export default function Layout({children}: {children: React.ReactNode}) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
