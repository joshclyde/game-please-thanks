import { configure } from "@storybook/react";

const req = require.context('../src/', true, /\.story.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// const loadStories = () => {
//   require("../src/**/*.story.tsx");
//   // You can require as many stories as you need.
// };

configure(loadStories, module);
