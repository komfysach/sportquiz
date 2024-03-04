import {UserProgressType} from 'typings/UserProgressType';
import {supabase} from '../utils/superbase';

export const getUserProgress = async (userId: number) => {
  try {
    const {data, error} = await supabase
      .from('user_progress')
      .select('*')
      .eq('player_id', userId);

    if (error) {
      console.error('Error fetching user progress:', error);
      // Handle error appropriately
      return null;
    }

    return data as UserProgressType[];
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
