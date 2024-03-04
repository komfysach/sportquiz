import {supabase} from '../utils/superbase';

export const getPlayerByToken = async (token: string) => {
  try {
    const {data, error} = await supabase
      .from('players')
      .select('*')
      .eq('token', token);

    if (error) {
      console.error('Error fetching player:', error);
      // Handle error appropriately
      return null;
    }

    return data ? data[0] : null; // Return the first player that matches the token
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
