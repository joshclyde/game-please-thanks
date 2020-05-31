export interface FlashcardState {
  data: Record<
    string,
    {
      title: string;
      flashcards: Record<
        string,
        {
          question: string;
          answer: string;
        }
      >;
    }
  >;
  quiz: {
    id?: string;
    currentCard?: string;
    cardResponses?: Record<string, { isCorrect: boolean }>;
  };
}

export interface FlashcardStartQuizAction {
  type: string;
  setId: string;
}

export interface Actions {
  type: string;
  width?: number;
  height?: number;
}
