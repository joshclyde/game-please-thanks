import React, { FunctionComponent } from "react";

import { FlashcardQuiz } from "@Components/Flashcard";

type Props = {};

const flashcardContents = [
  {
    front: "**Question:** How many dimensions is the flexbox layout?",
    back: `**Answer:** 1-dimensional\n
      \nFlexbox deals with layout in one dimension at a time -- either as a row or a column.`,
  },
  {
    front: "**Question:** What are the 2 axes of flexbox?",
    back: "**Answer:** The **main** axis and the **cross** axis.",
  },
  {
    front: "**Question:** Which axis defines `flex-direction`?",
    back: "**Answer**: The **main** axis defines `flex-direction`",
  },
  {
    front: "**Question:** What are the values available for `flex-direction`?",
    back:
      "**Answer:** The values available for `flex-direction` are\n" +
      "- `row`\n- `row-reverse`\n- `column`\n- `column-reverse`",
  },
  {
    front: "**Question:** Which direction does `flex-direction: row || row-reverse` run?",
    back:
      "**Answer:** `row` || `row-reverse` will run along the row in the **inline** direction",
  },
  {
    front:
      "**Question:** Which direction does `flex-direction: column || column-reverse` run?",
    back:
      "**Answer:** `column` || `column-reverse` will run along the column in the **block** direction",
  },
  {
    front: "**Question:** What is an area of a document laid out using flexbox called?",
    back: "**Answer:** A **flex container**",
  },
  {
    front: "**Question:** How do you create a flex container?",
    back:
      "**Answer:** Set the value of the area's container to `display: flex || inline-flex`",
  },
  {
    front: "**Question:** What are the direct children of a flex container called?",
    back: "**Answer:** **flex items**",
  },
  {
    front: "**Question:** What are the default values of a flex container?",
    back:
      "**Answer:** The default values of a flex container are\n" +
      "- Items display in a row (`flex-direction: row`)\n" +
      "- Items start from the start edge of the main axis\n" +
      "- Items do not stretch on the main dimension but can shrink\n" +
      "- Items will stretch to fit the main axis\n" +
      "- The `flex-basis` property is set to `auto`\n" +
      "- The `flex-wrap` property is set to `nowrap`\n",
  },
];

export const HomePage: FunctionComponent<Props> = () => (
  // <div>
  <FlashcardQuiz flashcardContents={flashcardContents} />
  // </div>
);
