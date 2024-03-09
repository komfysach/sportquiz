export type QuestionType = {
  question_id: number;
  question_text: string;
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  correct_answer: string;
  points: number;
  level_id: number;
  sport_id: number;
};
