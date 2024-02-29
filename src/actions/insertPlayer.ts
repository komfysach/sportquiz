import {supabase} from '../utils/superbase';
import {PlayerDataType} from '../typings/PlayerDataType';

export const insertPlayer = async ({
  playerData,
}: {
  playerData: PlayerDataType;
}) => {
  try {
    const {data, error} = await supabase.from('Users').insert(playerData);
    if (error) {
      console.error('Error adding player:', error);
      // Handle error appropriately (e.g., display an error message to the user)
    } else {
      console.log('Player added successfully:', data);
      // Handle success (e.g., show a confirmation message or redirect the user)
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
  }
};
