export const flexboxData = {
  set4: {
    title: "Flexbox",
    flashcards: {
      "4_1": {
        question: "**Question:** How many dimensions is the flexbox layout?",
        answer: `**Answer:** 1-dimensional\n
    \nFlexbox deals with layout in one dimension at a time -- either as a row or a column.`,
      },
      "4_2": {
        question: "**Question:** What are the 2 axes of flexbox?",
        answer: "**Answer:** The **main** axis and the **cross** axis.",
      },
      "4_3": {
        question: "**Question:** Which axis defines `flex-direction`?",
        answer: "**Answer**: The **main** axis defines `flex-direction`",
      },
      "4_4": {
        question: "**Question:** What are the values available for `flex-direction`?",
        answer:
          "**Answer:** The values available for `flex-direction` are\n" +
          "- `row`\n- `row-reverse`\n- `column`\n- `column-reverse`",
      },
      "4_5": {
        question:
          "**Question:** Which direction does `flex-direction: row || row-reverse` run?",
        answer:
          "**Answer:** `row` || `row-reverse` will run along the row in the **inline** direction",
      },
      "4_6": {
        question:
          "**Question:** Which direction does `flex-direction: column || column-reverse` run?",
        answer:
          "**Answer:** `column` || `column-reverse` will run along the column in the **block** direction",
      },
      "4_7": {
        question:
          "**Question:** What is an area of a document laid out using flexbox called?",
        answer: "**Answer:** A **flex container**",
      },
      "4_8": {
        question: "**Question:** How do you create a flex container?",
        answer:
          "**Answer:** Set the value of the area's container to `display: flex || inline-flex`",
      },
      "4_9": {
        question:
          "**Question:** What are the direct children of a flex container called?",
        answer: "**Answer:** **flex items**",
      },
      "4_10": {
        question: "**Question:** What are the default values of a flex container?",
        answer:
          "**Answer:** The default values of a flex container are\n" +
          "- Items display in a row (`flex-direction: row`)\n" +
          "- Items start from the start edge of the main axis\n" +
          "- Items do not stretch on the main dimension but can shrink\n" +
          "- Items will stretch to fit the main axis\n" +
          "- The `flex-basis` property is set to `auto`\n" +
          "- The `flex-wrap` property is set to `nowrap`\n",
      },
    },
  },
};
