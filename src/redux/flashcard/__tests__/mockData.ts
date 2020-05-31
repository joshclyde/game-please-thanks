import { StateJustFlashcard } from "../selectors";

export const mockFlashcardA: StateJustFlashcard = {
  flashcard: {
    data: {
      setOne: {
        title: "Set One",
        flashcards: {
          a1: {
            question: "a1 question",
            answer: "a1 answer",
          },
          a2: {
            question: "a2 question",
            answer: "a2 answer",
          },
        },
      },
    },
    quiz: {
      id: "setOne",
      currentCard: "a1",
      cardResponses: {
        a1: {
          isCorrect: true,
        },
        a2: {
          isCorrect: true,
        },
      },
    },
  },
};
