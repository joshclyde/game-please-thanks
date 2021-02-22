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
