import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../Home';

describe('Home', () => {
  it('renders the correct number of sports', () => {
    const {getAllByTestId} = render(<Home />);
    const sports = getAllByTestId('categories');
    expect(sports).toHaveLength(4);
  });

  it('renders the correct sport names', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Football')).toBeDefined();
    expect(getByText('Basketball')).toBeDefined();
    expect(getByText('Baseball')).toBeDefined();
    expect(getByText('Rugby')).toBeDefined();
  });
});
