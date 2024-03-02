import {supabase} from '../utils/superbase';
import {PlayerDataType} from '../typings/PlayerDataType';

export const insertPlayer = async ({
  playerData,
}: {
  playerData: PlayerDataType;
}) => {
  try {
    const {data, error} = await supabase.from('players').insert(playerData);

    if (error) {
      console.error('Error adding player:', error);
      // Handle error appropriately
    } else {
      console.log('Player added successfully:', data);
      // Handle success
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
  }
};
