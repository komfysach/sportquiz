import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Routes, {getTabBarIcon} from '../Routes';
import {AppContext} from '../../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const mockContext = {
  setUser: jest.fn(),
  setIsFinishedLoggingIn: jest.fn(),
  setPlayers: jest.fn(),
  isFinishedLoggingIn: false,
  user: null,
  userProgress: null,
  setUserProgress: jest.fn(),
  sports: null,
  setSports: jest.fn(),
  levels: null,
  setLevels: jest.fn(),
  questions: null,
  setQuestions: jest.fn(),
  players: null,
};

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
}));

jest.mock('../../actions/getPlayerByToken', () => ({
  getPlayerByToken: jest.fn(),
}));

jest.mock('../../actions/getPlayers', () => ({
  getPlayers: jest.fn(),
}));

describe('Routes Component', () => {
  it('renders loading state initially', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

    const {getByText} = render(
      <AppContext.Provider value={mockContext}>
        <Routes />
      </AppContext.Provider>,
    );

    expect(getByText('Loading...')).toBeTruthy();
    await waitFor(() => {
      expect(getByText('Home')).toBeTruthy();
      expect(getByText('Rankings')).toBeTruthy();
    });
  });

  it('renders HomeStack and RankingsStack when data is fetched', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('token');

    const {getByTestId} = render(
      <NavigationContainer>
        <AppContext.Provider value={mockContext}>
          <Routes />
        </AppContext.Provider>
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(getByTestId('home-icon-solid')).toBeTruthy();
      expect(getByTestId('trophy-icon-solid')).toBeTruthy();
    });
  });

  it('getTabBarIcon returns correct icons', () => {
    const homeIcon = getTabBarIcon('home', true);
    const rankingsIcon = getTabBarIcon('rankings', true);
    const nullIcon = getTabBarIcon('other', true);

    expect(homeIcon?.props.children.props.testID).toBe('home-icon-solid');
    expect(rankingsIcon?.props.children.props.testID).toBe('trophy-icon-solid');
    expect(nullIcon).toBeNull();
  });
});
