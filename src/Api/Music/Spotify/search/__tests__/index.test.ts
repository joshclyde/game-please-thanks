import axios from "axios";

import { spotifySearch } from "../";

jest.mock(`axios`, () => {
  return {
    get: jest.fn(),
  };
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe(`Spotify Search`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test(`should return the response from spotify search`, async () => {
    mockedAxios.get.mockReturnValueOnce(Promise.resolve(`this is the search result`));
    const result = await spotifySearch({
      accessToken: `ACCESSTOKENTESTVALUE`,
      q: `bts`,
      type: `album`,
      market: `from_token`,
      limit: 12,
    });
    expect(result).toMatchSnapshot();
  });
  test(`should call axios with proper values`, async () => {
    mockedAxios.get.mockReturnValueOnce(Promise.resolve(`this is the search result`));
    await spotifySearch({
      accessToken: `ACCESSTOKENTESTVALUE`,
      q: `bts`,
      type: `album`,
      market: `from_token`,
      limit: 12,
    });
    expect(mockedAxios.get.mock.calls).toMatchSnapshot();
  });
});
