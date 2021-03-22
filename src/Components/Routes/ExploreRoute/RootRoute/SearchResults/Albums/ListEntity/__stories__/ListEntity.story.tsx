import { storiesOf } from "@storybook/react";
import React, { useEffect } from "react";

import { useAddSpotifySearchResults } from "@Redux";

import { ListEntity } from "../";

storiesOf(`ExploreRoute/SearchResults/Albums`, module).add(`ListEntity`, () => {
  const add = useAddSpotifySearchResults();
  useEffect(() => {
    add(
      { term: `bts`, type: `album` },
      {
        albums: {
          href: `https://api.spotify.com/v1/search?query=bts&type=album&market=from_token&offset=0&limit=10`,
          items: [
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/2qehskW9lYGWfYb0xPZkrS`,
              },
              href: `https://api.spotify.com/v1/albums/2qehskW9lYGWfYb0xPZkrS`,
              id: `2qehskW9lYGWfYb0xPZkrS`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b2733deb4b0115410a85afe31c29`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e023deb4b0115410a85afe31c29`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d000048513deb4b0115410a85afe31c29`,
                  width: 64,
                },
              ],
              name: `BE`,
              release_date: `2020-11-20`,
              release_date_precision: `day`,
              total_tracks: 8,
              type: `album`,
              uri: `spotify:album:2qehskW9lYGWfYb0xPZkrS`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/6mJZTV8lCqnwftYZa94bXS`,
              },
              href: `https://api.spotify.com/v1/albums/6mJZTV8lCqnwftYZa94bXS`,
              id: `6mJZTV8lCqnwftYZa94bXS`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b2738afcb7dd182cffe8d53b781e`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e028afcb7dd182cffe8d53b781e`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d000048518afcb7dd182cffe8d53b781e`,
                  width: 64,
                },
              ],
              name: `MAP OF THE SOUL : 7`,
              release_date: `2020-02-21`,
              release_date_precision: `day`,
              total_tracks: 20,
              type: `album`,
              uri: `spotify:album:6mJZTV8lCqnwftYZa94bXS`,
            },
            {
              album_type: `compilation`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp`,
              },
              href: `https://api.spotify.com/v1/albums/2lATw9ZAVp7ILQcOKPCPqp`,
              id: `2lATw9ZAVp7ILQcOKPCPqp`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b2736feb6d9ed7891f40e9a524dd`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e026feb6d9ed7891f40e9a524dd`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d000048516feb6d9ed7891f40e9a524dd`,
                  width: 64,
                },
              ],
              name: `Love Yourself 結 'Answer'`,
              release_date: `2018-08-24`,
              release_date_precision: `day`,
              total_tracks: 26,
              type: `album`,
              uri: `spotify:album:2lATw9ZAVp7ILQcOKPCPqp`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/1AvXa8xFEXtR3hb4bgihIK`,
              },
              href: `https://api.spotify.com/v1/albums/1AvXa8xFEXtR3hb4bgihIK`,
              id: `1AvXa8xFEXtR3hb4bgihIK`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7`,
                  width: 64,
                },
              ],
              name: `MAP OF THE SOUL : PERSONA`,
              release_date: `2019-04-12`,
              release_date_precision: `day`,
              total_tracks: 7,
              type: `album`,
              uri: `spotify:album:1AvXa8xFEXtR3hb4bgihIK`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/7qvA0kf1dkmR1As2gOnBPn`,
              },
              href: `https://api.spotify.com/v1/albums/7qvA0kf1dkmR1As2gOnBPn`,
              id: `7qvA0kf1dkmR1As2gOnBPn`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b273ad7586bf7c4cccada24a36ce`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e02ad7586bf7c4cccada24a36ce`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d00004851ad7586bf7c4cccada24a36ce`,
                  width: 64,
                },
              ],
              name: `The Most Beautiful Moment in Life: Young Forever`,
              release_date: `2016-05-02`,
              release_date_precision: `day`,
              total_tracks: 23,
              type: `album`,
              uri: `spotify:album:7qvA0kf1dkmR1As2gOnBPn`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/2jJfnAZE6IG3oYnUv2eCj4`,
              },
              href: `https://api.spotify.com/v1/albums/2jJfnAZE6IG3oYnUv2eCj4`,
              id: `2jJfnAZE6IG3oYnUv2eCj4`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b27321108e396b83d171cc5c2692`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e0221108e396b83d171cc5c2692`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d0000485121108e396b83d171cc5c2692`,
                  width: 64,
                },
              ],
              name: `Love Yourself 轉 'Tear'`,
              release_date: `2018-05-18`,
              release_date_precision: `day`,
              total_tracks: 11,
              type: `album`,
              uri: `spotify:album:2jJfnAZE6IG3oYnUv2eCj4`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/17FnTn4P3Bkyf6mbNQDhhy`,
              },
              href: `https://api.spotify.com/v1/albums/17FnTn4P3Bkyf6mbNQDhhy`,
              id: `17FnTn4P3Bkyf6mbNQDhhy`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b273aabacdacfb6eceeb819c6ed6`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e02aabacdacfb6eceeb819c6ed6`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d00004851aabacdacfb6eceeb819c6ed6`,
                  width: 64,
                },
              ],
              name: `Wings`,
              release_date: `2016-10-10`,
              release_date_precision: `day`,
              total_tracks: 15,
              type: `album`,
              uri: `spotify:album:17FnTn4P3Bkyf6mbNQDhhy`,
            },
            {
              album_type: `compilation`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of`,
                  },
                  href: `https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of`,
                  id: `0LyfQWJT6nXafLPZqxe9Of`,
                  name: `Various Artists`,
                  type: `artist`,
                  uri: `spotify:artist:0LyfQWJT6nXafLPZqxe9Of`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/3LgNJmZ4QPkSvdt9JB8Tb8`,
              },
              href: `https://api.spotify.com/v1/albums/3LgNJmZ4QPkSvdt9JB8Tb8`,
              id: `3LgNJmZ4QPkSvdt9JB8Tb8`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b2736fca8304dc8899561b7e6c8c`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e026fca8304dc8899561b7e6c8c`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d000048516fca8304dc8899561b7e6c8c`,
                  width: 64,
                },
              ],
              name: `BTS WORLD (Original Soundtrack)`,
              release_date: `2019-06-28`,
              release_date_precision: `day`,
              total_tracks: 14,
              type: `album`,
              uri: `spotify:album:3LgNJmZ4QPkSvdt9JB8Tb8`,
            },
            {
              album_type: `album`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX`,
                  },
                  href: `https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX`,
                  id: `3Nrfpe0tUJi4K4DXYWgMUX`,
                  name: `BTS`,
                  type: `artist`,
                  uri: `spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/2FTS6a6DLXMNp8flyA0HGO`,
              },
              href: `https://api.spotify.com/v1/albums/2FTS6a6DLXMNp8flyA0HGO`,
              id: `2FTS6a6DLXMNp8flyA0HGO`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b273f9a16d4b6cd94eca041f00b8`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e02f9a16d4b6cd94eca041f00b8`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d00004851f9a16d4b6cd94eca041f00b8`,
                  width: 64,
                },
              ],
              name: `Love Yourself 承 'Her'`,
              release_date: `2017-09-18`,
              release_date_precision: `day`,
              total_tracks: 9,
              type: `album`,
              uri: `spotify:album:2FTS6a6DLXMNp8flyA0HGO`,
            },
            {
              album_type: `single`,
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/1bqxdqvUtPWZri43cKHac8`,
                  },
                  href: `https://api.spotify.com/v1/artists/1bqxdqvUtPWZri43cKHac8`,
                  id: `1bqxdqvUtPWZri43cKHac8`,
                  name: `MAX`,
                  type: `artist`,
                  uri: `spotify:artist:1bqxdqvUtPWZri43cKHac8`,
                },
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/0ebNdVaOfp6N0oZ1guIxM8`,
                  },
                  href: `https://api.spotify.com/v1/artists/0ebNdVaOfp6N0oZ1guIxM8`,
                  id: `0ebNdVaOfp6N0oZ1guIxM8`,
                  name: `SUGA`,
                  type: `artist`,
                  uri: `spotify:artist:0ebNdVaOfp6N0oZ1guIxM8`,
                },
              ],
              external_urls: {
                spotify: `https://open.spotify.com/album/2dEJHnsuxIij7YeBbt0sVm`,
              },
              href: `https://api.spotify.com/v1/albums/2dEJHnsuxIij7YeBbt0sVm`,
              id: `2dEJHnsuxIij7YeBbt0sVm`,
              images: [
                {
                  height: 640,
                  url: `https://i.scdn.co/image/ab67616d0000b2739660ae57836f713884d86cbb`,
                  width: 640,
                },
                {
                  height: 300,
                  url: `https://i.scdn.co/image/ab67616d00001e029660ae57836f713884d86cbb`,
                  width: 300,
                },
                {
                  height: 64,
                  url: `https://i.scdn.co/image/ab67616d000048519660ae57836f713884d86cbb`,
                  width: 64,
                },
              ],
              name: `Blueberry Eyes (feat. SUGA of BTS)`,
              release_date: `2020-09-15`,
              release_date_precision: `day`,
              total_tracks: 1,
              type: `album`,
              uri: `spotify:album:2dEJHnsuxIij7YeBbt0sVm`,
            },
          ],
          limit: 10,
          next: `https://api.spotify.com/v1/search?query=bts&type=album&market=from_token&offset=10&limit=10`,
          offset: 0,
          previous: undefined,
          total: 426,
        },
      },
    );
  }, [add]);

  return (
    <div>
      <ListEntity term="bts" index={0} />
    </div>
  );
});
