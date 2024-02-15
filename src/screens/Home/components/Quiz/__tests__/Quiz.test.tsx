import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Quiz from '../Quiz'; // replace with the path to your Quiz component

const mockNavigate = jest.fn();

// Mock the useNavigation hook from '@react-navigation/native'
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(() => ({
      navigate: mockNavigate,
    })),
  };
});

describe('Quiz', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        id: 1,
      },
    };

    const {getByText} = render(<Quiz route={route} />);

    // Replace 'Sport Name' with the name of the sport for the quiz with id 1
    expect(getByText('Football')).toBeTruthy();
  });

  it('navigates to the correct level when a level is pressed', () => {
    const route = {
      params: {
        id: 1,
      },
    };

    const {getByText} = render(<Quiz route={route} />);

    // Replace 'Level 1' with the text for the level button you want to press
    const levelButton = getByText('Level 1');
    fireEvent.press(levelButton);

    // Replace 'QuizLevel' with the name of the screen you're navigating to
    // Replace 1 with the id of the level you're navigating to
    expect(mockNavigate).toHaveBeenCalledWith('QuizLevel', {id: 1});
  });
});
