import {PlayerDataType} from 'typings/PlayerDataType';
import {supabase} from '../utils/superbase';

export const getPlayers = async () => {
  try {
    const {data, error} = await supabase.from('players').select('*');

    if (error) {
      console.error('Error fetching players:', error);
      // Handle error appropriately
      return null;
    }

    return data as PlayerDataType[];
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
