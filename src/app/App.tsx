import * as React from 'react';
import Routes from './Routes';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <SafeArea>
        <Routes />
      </SafeArea>
    </>
  );
}
