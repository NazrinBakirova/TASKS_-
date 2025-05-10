export interface Question {
  id: number;
  question: string;
  description: string | null;
  answers: Record<'A' | 'B' | 'C' | 'D' | 'E' | 'F', string | null>;
  multiple_correct_answers: 'true' | 'false';
  correct_answers: Record<
    | 'answer_a_correct'
    | 'answer_b_correct'
    | 'answer_c_correct'
    | 'answer_d_correct'
    | 'answer_e_correct'
    | 'answer_f_correct',
    'true' | 'false'
  >;
}
