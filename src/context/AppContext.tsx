import React, {createContext, useEffect, useState} from 'react';
import {supabase} from '../utils/initSuperbase';

type AppContextType = {
  isFinishedOnboarding: boolean;
  setIsFinishedOnboarding: (isFinished: boolean) => void;
};

// create a context here
export const AppContext = createContext<AppContextType>({} as AppContextType);

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({children}: AppProviderProps) {
  const [isFinishedOnboarding, setIsFinishedOnboarding] = useState(false);
  const [quizData, setQuizData] = useState<any[]>([]);

  useEffect(() => {
    const getQuizData = async () => {
      const {data: quiz} = await supabase.from('sport-categories').select();

      if (quiz && quiz.length > 1) {
        setQuizData(quiz!);
      }
    };

    getQuizData();
    console.log('quizData', quizData);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isFinishedOnboarding,
        setIsFinishedOnboarding,
      }}>
      {children}
    </AppContext.Provider>
  );
}
