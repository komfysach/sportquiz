import {LevelType} from 'typings/LevelType';
import {supabase} from '../utils/superbase';

export const getLevelsWithSportId = async (sportId: number) => {
  try {
    const {data, error} = await supabase
      .from('levels')
      .select('*')
      .eq('sport_id', sportId);

    if (error) {
      console.error('Error fetching levels:', error);
      // Handle error appropriately
      return null;
    }

    return data as LevelType[];
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
