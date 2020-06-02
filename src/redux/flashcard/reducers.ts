import {
  Actions,
  ActionSetCardResponseIsCorrect,
  ActionSetFlashcardQuizId,
  SET_CARD_RESPONSE_IS_CORRECT,
  SET_FLASHCARD_QUIZ_ID,
} from "./actions";
import { data } from "./data";
import { FlashcardState } from "./types";

const initialState: FlashcardState = {
  data,
  quiz: {},
};

const reduceSetFlashcardQuizId = (
  state: FlashcardState,
  { payload }: ActionSetFlashcardQuizId,
) => {
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
};

const reduceSetCardResponseIsCorrect = (
  state: FlashcardState,
  { payload }: ActionSetCardResponseIsCorrect,
) => {
  return {
    ...state,
    quiz: {
      ...state.quiz,
      cardResponses: {
        ...state.quiz.cardResponses,
        [payload.flashcardId]: {
          ...state.quiz.cardResponses[payload.flashcardId],
          isCorrect: payload.isCorrect,
        },
      },
    },
  };
};

export const flashcard = (state = initialState, action: Actions): FlashcardState => {
  const { type } = action;
  switch (type) {
    case SET_FLASHCARD_QUIZ_ID:
      return reduceSetFlashcardQuizId(state, action as ActionSetFlashcardQuizId);
    case SET_CARD_RESPONSE_IS_CORRECT:
      return reduceSetCardResponseIsCorrect(
        state,
        action as ActionSetCardResponseIsCorrect,
      );
  }
  return { ...state };
};
