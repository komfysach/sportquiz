import {CategoryType} from 'typings/CategoryType';
import {supabase} from '../utils/superbase';

export const getSports = async () => {
  try {
    const {data, error} = await supabase.from('sports').select('*');

    if (error) {
      console.error('Error fetching sports:', error);
      // Handle error appropriately
      return null;
    }

    return data as CategoryType[];
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
