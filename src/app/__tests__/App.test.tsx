/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

// Import render and fireEvent from the testing library
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByTestId} = render(<App />);
  const safeArea = getByTestId('safe-area');
  expect(safeArea).toBeDefined();
});
