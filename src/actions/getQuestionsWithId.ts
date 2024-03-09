import {QuestionType} from 'typings/QuestionType';
import {supabase} from '../utils/superbase';

export const getQuestionsWithId = async (
  sportId: number,
  levelId: number,
  sectionId: number,
) => {
  try {
    const {data, error} = await supabase
      .from('questions')
      .select('*')
      .eq('sport_id', sportId)
      .eq('level_id', levelId)
      .eq('section_id', sectionId);

    if (error) {
      console.error('Error fetching questions:', error);
      // Handle error appropriately
      return null;
    }

    return data as QuestionType[];
  } catch (error) {
    console.error('Unexpected error:', error);
    // Handle unexpected errors
    return null;
  }
};
