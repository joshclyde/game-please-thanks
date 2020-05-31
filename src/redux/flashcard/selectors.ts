import { State } from "../types";

// TODO: look into ReadOnly typescript for selectors?

export type StateJustFlashcard = Pick<State, "flashcard">;

export const selectFlashcardData = (state: StateJustFlashcard) => state.flashcard.data;

export const selectFlashcardDataSetIds = (state: StateJustFlashcard) =>
  Object.keys(state.flashcard.data);

export const selectFlashcardSetTitle = (state: StateJustFlashcard, setId: string) =>
  state.flashcard.data[setId].title;

export const selectFlashcardQuizCurrentId = (state: StateJustFlashcard) =>
  state.flashcard.quiz.id;

export const selectFlashcardQuizLength = (state: StateJustFlashcard) =>
  state.flashcard.quiz.cardResponses &&
  Object.keys(state.flashcard.quiz.cardResponses).length;

export const selectFlashcardQuizCurrentCardId = (state: StateJustFlashcard) =>
  state.flashcard.quiz.currentCard;

export const selectFlashcardQuizFlashcards = (state: StateJustFlashcard) =>
  state.flashcard.quiz.cardResponses &&
  Object.keys(state.flashcard.quiz.cardResponses).reduce<
    Record<
      string,
      {
        question: string;
        answer: string;
        isCorrect: boolean;
      }
    >
  >(
    (flashcardContents, flashcardKey) => ({
      ...flashcardContents,
      [flashcardKey]: {
        ...state.flashcard.quiz.cardResponses[flashcardKey],
        ...state.flashcard.data[state.flashcard.quiz.id].flashcards[flashcardKey],
      },
    }),
    {},
  );
//   (flashcardContents, flashcardKey) => {
//       ...flashcardContents,
//       [flashcardKey]: {}
//   },
// {}: any; )
