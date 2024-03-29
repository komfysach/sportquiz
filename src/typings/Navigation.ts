import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// Root tab
export type TabParamList = {
  Home: undefined;
  Rankings: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Quiz: QuizParamList;
  QuizLevel: QuizLevelParamList;
  Profile: undefined;
  AddName: undefined;
  Login: undefined;
};

export type QuizParamList = {
  Quiz: {
    id: number;
  };
};

export type QuizLevelParamList = {
  QuizLevel: {
    sport: number;
    level: number;
  };
};

export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;
