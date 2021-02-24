const fs = require(`fs`);

// creating a makePackageJson script cuz i cant put comments in a json file

const packageJson = {
  name: `all-the-things-ui`,
  version: `0.0.0`, // probably don't need this? not really versioning anything
  description: `All the Things - UI.`,
  main: `index.js`,
  scripts: {
    start: `webpack-dev-server`,
    build: `webpack`,
    test: `echo "Error: no test specified" && exit 1`,
    lint: `./node_modules/.bin/tslint -p tsconfig.json "src/**/*.{ts,tsx}"`,
    precommit: `npm run prettier:diff && npm run lint`,
    "prettier:write": `./node_modules/.bin/prettier --write "src/**/*.{ts,tsx}"`,
    "prettier:diff": `./node_modules/.bin/prettier --list-different "src/**/*.{ts,tsx}"`,
    storybook: `start-storybook -p 9001 -c storybook`,
  },
  repository: {
    type: `git`,
    url: `git+https://github.com/joshclyde/all-the-things-ui.git`,
  },
  author: `Josh Clyde`,
  license: `ISC`,
  bugs: {
    url: `https://github.com/joshclyde/all-the-things-ui/issues`,
  },
  homepage: `https://github.com/joshclyde/all-the-things-ui#readme`,
  dependencies: {
    "@storybook/react": `4.1.11`,
    "@types/lodash": `4.14.116`,
    "@types/mousetrap": `1.6.0`,
    "@types/react": `16.8.6`,
    "@types/react-dom": `16.8.4`,
    "@types/react-jss": `8.6.0`,
    "@types/react-redux": `7.0.9`,
    "@types/react-router-dom": `4.3.0`,
    "@types/url-parse": `1.4.1`,
    axios: `0.18.0`,
    lodash: `4.17.11`,
    mousetrap: `1.6.0`,
    react: `16.8.6`,
    "react-docgen-typescript-loader": `3.0.1`,
    "react-dom": `16.4.0`,
    "react-jss": `8.5.1`,
    "react-markdown": `^4.0.8`,
    "react-redux": `7.0.3`,
    "react-router-dom": `5.0.0`,
    redux: `4.0.1`,
    "redux-thunk": `2.3.0`,
    "url-parse": `1.4.3`,
    "utility-types": `2.1.0`,
  },
  devDependencies: {
    "@babel/core": `7.2.2`,
    "@storybook/addon-info": `4.1.11`,
    "@types/storybook__react": `4.0.0`,
    "awesome-typescript-loader": `5.2.1`,
    "babel-cli": `6.26.0`,
    "babel-loader": `7.1.2`,
    "babel-preset-es2015": `6.24.1`,
    "babel-preset-react": `6.24.1`,
    "copy-webpack-plugin": `4.5.2`,
    husky: `0.14.3`,
    path: `0.12.7`,
    prettier: `1.13.7`,
    "react-docgen-typescript-webpack-plugin": `1.1.0`,
    "source-map-loader": `0.2.3`,
    "style-loader": `0.19.0`,
    "ts-loader": `4.4.1`,
    tslint: `5.10.0`,
    "tslint-react": `3.6.0`,
    typescript: `2.9.1`,
    webpack: `4.12.0`,
    "webpack-cli": `3.0.3`,
    "webpack-dev-server": `3.1.4`,
  },
};

// Write data in 'Output.txt' .
fs.writeFile(`package.json`, `${JSON.stringify(packageJson, null, 2)}\n`, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
