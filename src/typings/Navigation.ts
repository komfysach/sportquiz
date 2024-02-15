import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// Root tab
export type TabParamList = {
  Home: undefined;
  Rankings: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Quiz: undefined;
  Profile: undefined;
};

export type QuizParamList = {
  Quiz: {
    id: number;
  };
};

export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;
