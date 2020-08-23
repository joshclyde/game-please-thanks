import { selectFlashcardQuizFlashcards } from "../selectors";
import { mockFlashcardA } from "./mockData";

describe(`selectors`, () => {
  // test.each(Object.keys(selectors))("selector: %s", (selector) => {
  //   // @ts-ignore
  //   expect(selectors[selector](mockData)).toMatchSnapshot();
  // });

  describe(`selectFlashcardQuizFlashcards`, () => {
    test(`should return merged flashcard data and quiz data`, () => {
      expect(selectFlashcardQuizFlashcards(mockFlashcardA)).toMatchSnapshot();
    });
  });

  // test("selectFlashcardQuizFlashcards", () => {
  //   expect(selectFlashcardQuizFlashcards(mockData)).toMatchSnapshot();
  // });
});
