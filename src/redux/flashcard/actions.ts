export const NAVIGATE_TO_FLASHCARD_QUIZ = `NAVIGATE_TO_FLASHCARD_QUIZ`;
export const navigateToFlashcardQuiz = (setId: string) => ({
  type: NAVIGATE_TO_FLASHCARD_QUIZ,
  payload: {
    setId,
  },
});

export const SET_FLASHCARD_QUIZ_ID = `SET_FLASHCARD_QUIZ_ID`;
export const makeActionSetFlashcardQuizId = (quizId: string) => ({
  type: SET_FLASHCARD_QUIZ_ID,
  payload: {
    quizId,
  },
});

export const SET_CARD_RESPONSE_IS_CORRECT = `SET_CARD_RESPONSE_IS_CORRECT`;
export const makeActionSetCardResponseIsCorrect = (
  flashcardId: string,
  isCorrect: boolean,
) => ({
  type: SET_CARD_RESPONSE_IS_CORRECT,
  payload: {
    flashcardId,
    isCorrect,
  },
});

export type ActionSetFlashcardQuizId = ReturnType<typeof makeActionSetFlashcardQuizId>;
export type ActionSetCardResponseIsCorrect = ReturnType<
  typeof makeActionSetCardResponseIsCorrect
>;

export type Actions = ActionSetFlashcardQuizId | ActionSetCardResponseIsCorrect;
