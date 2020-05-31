import { Actions, NAVIGATE_TO_FLASHCARD_QUIZ, SET_FLASHCARD_QUIZ_ID } from "./actions";
import { data } from "./data";
import { FlashcardState } from "./types";

const initialState: FlashcardState = {
  data,
  quiz: {},
};

export const flashcard = (state = initialState, action: Actions): FlashcardState => {
  const { type, payload } = action;
  switch (type) {
    case SET_FLASHCARD_QUIZ_ID:
      const flashcardKeys = Object.keys(state.data[payload.quizId].flashcards);
      return {
        ...state,
        quiz: {
          id: payload.quizId,
          currentCard: flashcardKeys[0],
          cardResponses: flashcardKeys.reduce(
            (accumlatedCardResponses, flashcardKey) => ({
              ...accumlatedCardResponses,
              [flashcardKey]: { isCorrect: undefined },
            }),
            {},
          ),
        },
      };
  }
  return { ...state };
};
