import {supabase} from '../utils/superbase';

export const updateUserProgress = async (
  sportId: number,
  currentLevel: number,
  playerId: number,
  points: number,
) => {
  try {
    const {data, error} = await supabase.from('user_progress').upsert({
      sport_id: sportId,
      current_level: currentLevel,
      player_id: playerId,
      points: points,
    });

    if (error) {
      console.error('Error updating user progress:', error);
      // Handle error appropriately
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
