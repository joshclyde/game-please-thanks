import { getGameIds } from "../hooks";

describe(`getGameIds`, () => {
  test(`works`, () => {
    expect(
      getGameIds(
        [`test1`],
        {
          test1: {
            name: `name`,
            hasGamePass: true,
            games: { testGame1: { isOwned: true, isInstalled: true } },
            friends: {},
          },
        },
        {
          testGame1: {
            id: `testGame1`,
            name: `Test Game 1`,
            minPlayers: 1,
            maxPlayers: 5,
            externalUrl: `test game 1 external url`,
            price: 5,
            isOnGamePass: true,
            images: {
              TitledLong: {
                url: `asdf`,
              },
            } as any,
            size: 100,
            rating: 2,
            ratingCount: 100,
          },
          testGame2: {
            id: `testGame2`,
            name: `Test Game 2`,
            minPlayers: 1,
            maxPlayers: 5,
            externalUrl: `test game 2 external url`,
            price: 5,
            isOnGamePass: true,
            images: {
              TitledLong: {
                url: `asdf`,
              },
            } as any,
            size: 100,
            rating: 2,
            ratingCount: 100,
          },
        },
        true,
      ),
    ).toMatchInlineSnapshot(`
      Array [
        "testGame1",
      ]
    `);
  });
});
