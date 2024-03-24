import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import RankingsStack from './../RankingsStack';

// Mocking the module containing getAllUserProgress function
jest.mock('../../actions/getAllUserProgress', () => ({
  getAllUserProgress: jest.fn(),
}));

describe('RankingsStack Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders loading state initially', async () => {
    // Arrange
    const {getByText} = render(<RankingsStack />);

    // Assert
    expect(getByText('Loading...')).toBeTruthy();
    await waitFor(() => {
      expect(getByText('Rankings')).toBeTruthy(); // Assuming 'Rankings' is rendered when loading is done
    });
  });

  it('renders rankings when data is fetched', async () => {
    // Arrange
    const mockRankingsData = [
      {id: 1, name: 'Player 1', sport_points: [], total_points: 100},
      {id: 2, name: 'Player 2', sport_points: [], total_points: 90},
    ];
    const getAllUserProgress =
      require('../../actions/getAllUserProgress').getAllUserProgress;
    getAllUserProgress.mockResolvedValueOnce(mockRankingsData);

    // Act
    const {getByText} = render(<RankingsStack />);
    await waitFor(() => jest.runAllTimers());

    // Assert
    expect(getByText('Rankings')).toBeTruthy();
    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('Player 2')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
    expect(getByText('90')).toBeTruthy();
  });

  // Add more tests for other scenarios as needed
});
