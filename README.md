# all-the-things-ui

How to deploy

```sh
yarn build
# after, copy public/index.html into build/

# will run the site locally to test before deploying
firebase serve --only hosting --project allthethings-d87f5

# will deploy to firebase
firebase deploy --project allthethings-d87f5

```