import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// This will use type Question and add choices prop in it
export type QuestionState = Question & { choices: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    choices: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
