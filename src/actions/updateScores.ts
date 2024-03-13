import {supabase} from '../utils/superbase';

export const updateScores = async (
  playerId: number,
  sportId: number,
  points: number,
) => {
  try {
    // Fetch the existing record
    const {data: existingRecord, error: fetchError} = await supabase
      .from('scores')
      .select('*')
      .eq('player_id', playerId)
      .eq('sport_id', sportId);

    if (fetchError) {
      console.error('Error fetching score:', fetchError);
      return null;
    }

    if (existingRecord && existingRecord.length > 0) {
      // If the record exists, add the new points to the existing points and update the record
      const {data: updatedRecord, error: updateError} = await supabase
        .from('scores')
        .update({points: existingRecord[0].points + points})
        .eq('player_id', playerId)
        .eq('sport_id', sportId);

      if (updateError) {
        console.error('Error updating score:', updateError);
        return null;
      }

      return updatedRecord;
    } else {
      // If the record doesn't exist, create a new record with the given points
      const {data: newRecord, error: insertError} = await supabase
        .from('scores')
        .insert({player_id: playerId, sport_id: sportId, points});

      if (insertError) {
        console.error('Error inserting score:', insertError);
        return null;
      }

      return newRecord;
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return null;
  }
};
