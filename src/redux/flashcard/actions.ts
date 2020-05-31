export const NAVIGATE_TO_FLASHCARD_QUIZ = "NAVIGATE_TO_FLASHCARD_QUIZ";
export const navigateToFlashcardQuiz = (setId: string) => ({
  type: NAVIGATE_TO_FLASHCARD_QUIZ,
  payload: {
    setId,
  },
});

export const SET_FLASHCARD_QUIZ_ID = "SET_FLASHCARD_QUIZ_ID";
export const makeActionSetFlashcardQuizId = (quizId: string) => ({
  type: SET_FLASHCARD_QUIZ_ID,
  payload: {
    quizId,
  },
});

export type Actions = ReturnType<typeof makeActionSetFlashcardQuizId>;
