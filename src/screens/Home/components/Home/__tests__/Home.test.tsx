import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Home from '../Home';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Home', () => {
  it('renders the correct number of sports', () => {
    const {getAllByTestId} = render(<Home />);
    const sports = getAllByTestId('categories');
    expect(sports.length).toBe(4);
  });

  it('renders the correct sport names', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Football')).toBeDefined();
    expect(getByText('Basketball')).toBeDefined();
    expect(getByText('Baseball')).toBeDefined();
    expect(getByText('Rugby')).toBeDefined();
  });

  it('navigates to the correct quiz when a category is pressed', () => {
    const {getByTestId} = render(<Home />);
    const footballCategory = getByTestId('category-Football');
    fireEvent.press(footballCategory);
    console.log('mockCall', mockNavigate.mock.calls);
    expect(mockNavigate).toHaveBeenCalledWith('Quiz', {id: 1});
  });
});
