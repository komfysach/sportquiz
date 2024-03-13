import React, {createContext, useState} from 'react';
import {CategoryType} from 'typings/CategoryType';
import {LevelType} from 'typings/LevelType';
import {PlayerDataType} from 'typings/PlayerDataType';
import {QuestionType} from 'typings/QuestionType';
import {UserProgressType} from 'typings/UserProgressType';

type AppContextType = {
  isFinishedOnboarding: boolean;
  setIsFinishedOnboarding: (isFinished: boolean) => void;
  user: PlayerDataType | null;
  setUser: (user: PlayerDataType | null) => void;
  userProgress: UserProgressType[] | null;
  setUserProgress: (userProgress: UserProgressType[]) => void;
  players: PlayerDataType[] | null;
  setPlayers: (players: PlayerDataType[]) => void;
  sports: CategoryType[] | null;
  setSports: (sports: CategoryType[]) => void;
  levels: LevelType[] | null;
  setLevels: (levels: LevelType[]) => void;
  questions: QuestionType[] | null;
  setQuestions: (questions: QuestionType[]) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({children}: AppProviderProps) {
  const [isFinishedOnboarding, setIsFinishedOnboarding] = useState(false);
  const [user, setUser] = useState<PlayerDataType | null>(null);
  const [sports, setSports] = useState<CategoryType[] | null>(null);
  const [levels, setLevels] = useState<LevelType[] | null>(null);
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [players, setPlayers] = useState<PlayerDataType[] | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgressType[] | null>(
    null,
  );

  return (
    <AppContext.Provider
      value={{
        isFinishedOnboarding,
        setIsFinishedOnboarding,
        user,
        setUser,
        sports,
        setSports,
        levels,
        setLevels,
        questions,
        setQuestions,
        players,
        setPlayers,
        userProgress,
        setUserProgress,
      }}>
      {children}
    </AppContext.Provider>
  );
}
