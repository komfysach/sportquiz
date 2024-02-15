import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from '../HomeStack';

describe('HomeStack', () => {
  it('renders the Home screen as the initial route', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>,
    );
    expect(getByTestId('home-screen')).toBeDefined();
  });

  // Add more tests to cover edge cases and other scenarios
});
