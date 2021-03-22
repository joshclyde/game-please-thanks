import { storiesOf } from "@storybook/react";
import React, { useEffect } from "react";

import { useAddSpotifySearchResults } from "@Redux";

import { ListEntity } from "../";

storiesOf(`ExploreRoute/SearchResults/Tracks`, module).add(`ListEntity`, () => {
  const add = useAddSpotifySearchResults();
  useEffect(() => {
    add(
      { term: `bts`, type: `track` },
      {
        tracks: {
          href: `https://api.spotify.com/v1/search?query=bts&type=track&market=from_token&offset=0&limit=10`,
          items: [
            {
              album: {
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
              disc_number: 1,
              duration_ms: 199053,
              explicit: false,
              external_ids: {
                isrc: `QM7282022872`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/4saklk6nie3yiGePpBwUoc`,
              },
              href: `https://api.spotify.com/v1/tracks/4saklk6nie3yiGePpBwUoc`,
              id: `4saklk6nie3yiGePpBwUoc`,
              is_local: false,
              is_playable: true,
              name: `Dynamite`,
              popularity: 91,
              preview_url: `https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 8,
              type: `track`,
              uri: `spotify:track:4saklk6nie3yiGePpBwUoc`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 207481,
              explicit: false,
              external_ids: {
                isrc: `QMBZ92051791`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/249gnXrbfmV8NG6jTEMSwD`,
              },
              href: `https://api.spotify.com/v1/tracks/249gnXrbfmV8NG6jTEMSwD`,
              id: `249gnXrbfmV8NG6jTEMSwD`,
              is_local: false,
              is_playable: true,
              name: `Life Goes On`,
              popularity: 89,
              preview_url: `https://p.scdn.co/mp3-preview/9dc29ff47cbdda2d3c5a66b3fabf9c7420f62950?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 1,
              type: `track`,
              uri: `spotify:track:249gnXrbfmV8NG6jTEMSwD`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 294463,
              explicit: false,
              external_ids: {
                isrc: `KRA381601901`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/1QWxddJmOhQb1vDdyTipMR`,
              },
              href: `https://api.spotify.com/v1/tracks/1QWxddJmOhQb1vDdyTipMR`,
              id: `1QWxddJmOhQb1vDdyTipMR`,
              is_local: false,
              is_playable: true,
              name: `BTS Cypher 4`,
              popularity: 67,
              preview_url: `https://p.scdn.co/mp3-preview/e6739259f7b08212e1a0aa2f35b8954e5496d026?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 11,
              type: `track`,
              uri: `spotify:track:1QWxddJmOhQb1vDdyTipMR`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 172244,
              explicit: false,
              external_ids: {
                isrc: `USQX92000866`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/5dn6QANKbf76pANGjMBida`,
              },
              href: `https://api.spotify.com/v1/tracks/5dn6QANKbf76pANGjMBida`,
              id: `5dn6QANKbf76pANGjMBida`,
              is_local: false,
              is_playable: true,
              name: `Blueberry Eyes (feat. SUGA of BTS)`,
              popularity: 76,
              preview_url: `https://p.scdn.co/mp3-preview/ffd02afb29f103dd4010010a1521f83181c7fa93?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 1,
              type: `track`,
              uri: `spotify:track:5dn6QANKbf76pANGjMBida`,
            },
            {
              album: {
                album_type: `single`,
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
                  spotify: `https://open.spotify.com/album/6K4chJALBBMYmXjwgvqahx`,
                },
                href: `https://api.spotify.com/v1/albums/6K4chJALBBMYmXjwgvqahx`,
                id: `6K4chJALBBMYmXjwgvqahx`,
                images: [
                  {
                    height: 640,
                    url: `https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8`,
                    width: 640,
                  },
                  {
                    height: 300,
                    url: `https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8`,
                    width: 300,
                  },
                  {
                    height: 64,
                    url: `https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8`,
                    width: 64,
                  },
                ],
                name: `Dynamite (DayTime Version)`,
                release_date: `2020-08-28`,
                release_date_precision: `day`,
                total_tracks: 6,
                type: `album`,
                uri: `spotify:album:6K4chJALBBMYmXjwgvqahx`,
              },
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
              disc_number: 1,
              duration_ms: 199053,
              explicit: false,
              external_ids: {
                isrc: `QM7282022872`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/0t1kP63rueHleOhQkYSXFY`,
              },
              href: `https://api.spotify.com/v1/tracks/0t1kP63rueHleOhQkYSXFY`,
              id: `0t1kP63rueHleOhQkYSXFY`,
              is_local: false,
              is_playable: true,
              name: `Dynamite`,
              popularity: 83,
              preview_url: `https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 1,
              type: `track`,
              uri: `spotify:track:0t1kP63rueHleOhQkYSXFY`,
            },
            {
              album: {
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
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2`,
                  },
                  href: `https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2`,
                  id: `26VFTg2z8YR0cCuwLzESi2`,
                  name: `Halsey`,
                  type: `artist`,
                  uri: `spotify:artist:26VFTg2z8YR0cCuwLzESi2`,
                },
              ],
              disc_number: 1,
              duration_ms: 229773,
              explicit: false,
              external_ids: {
                isrc: `QM6MZ1917908`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/5KawlOMHjWeUjQtnuRs22c`,
              },
              href: `https://api.spotify.com/v1/tracks/5KawlOMHjWeUjQtnuRs22c`,
              id: `5KawlOMHjWeUjQtnuRs22c`,
              is_local: false,
              is_playable: true,
              name: `Boy With Luv (feat. Halsey)`,
              popularity: 83,
              preview_url: `https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 2,
              type: `track`,
              uri: `spotify:track:5KawlOMHjWeUjQtnuRs22c`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 254950,
              explicit: false,
              external_ids: {
                isrc: `QMFME2038757`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/0n2moJpAEWHwaPYYjkzMDl`,
              },
              href: `https://api.spotify.com/v1/tracks/0n2moJpAEWHwaPYYjkzMDl`,
              id: `0n2moJpAEWHwaPYYjkzMDl`,
              is_local: false,
              is_playable: true,
              name: `Blue & Grey`,
              popularity: 81,
              preview_url: `https://p.scdn.co/mp3-preview/2a9059469af841645ac22da0a4e644ed18fe6a04?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 3,
              type: `track`,
              uri: `spotify:track:0n2moJpAEWHwaPYYjkzMDl`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 202313,
              explicit: false,
              external_ids: {
                isrc: `QMFME2038760`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/2FVpOsjT1iquZ3SpCjZ9Ne`,
              },
              href: `https://api.spotify.com/v1/tracks/2FVpOsjT1iquZ3SpCjZ9Ne`,
              id: `2FVpOsjT1iquZ3SpCjZ9Ne`,
              is_local: false,
              is_playable: true,
              name: `Telepathy`,
              popularity: 80,
              preview_url: `https://p.scdn.co/mp3-preview/e057af6f770b0a7a5b50a8152194db8e7b538282?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 5,
              type: `track`,
              uri: `spotify:track:2FVpOsjT1iquZ3SpCjZ9Ne`,
            },
            {
              album: {
                album_type: `single`,
                artists: [
                  {
                    external_urls: {
                      spotify: `https://open.spotify.com/artist/56mfhUDKa1vec6rSLZV5Eg`,
                    },
                    href: `https://api.spotify.com/v1/artists/56mfhUDKa1vec6rSLZV5Eg`,
                    id: `56mfhUDKa1vec6rSLZV5Eg`,
                    name: `Jawsh 685`,
                    type: `artist`,
                    uri: `spotify:artist:56mfhUDKa1vec6rSLZV5Eg`,
                  },
                  {
                    external_urls: {
                      spotify: `https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y`,
                    },
                    href: `https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y`,
                    id: `07YZf4WDAMNwqr4jfgOZ8y`,
                    name: `Jason Derulo`,
                    type: `artist`,
                    uri: `spotify:artist:07YZf4WDAMNwqr4jfgOZ8y`,
                  },
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
                  spotify: `https://open.spotify.com/album/5O6izFQ2veRaZOcQSyOi4o`,
                },
                href: `https://api.spotify.com/v1/albums/5O6izFQ2veRaZOcQSyOi4o`,
                id: `5O6izFQ2veRaZOcQSyOi4o`,
                images: [
                  {
                    height: 640,
                    url: `https://i.scdn.co/image/ab67616d0000b2733e0936633c4c927ac22818e1`,
                    width: 640,
                  },
                  {
                    height: 300,
                    url: `https://i.scdn.co/image/ab67616d00001e023e0936633c4c927ac22818e1`,
                    width: 300,
                  },
                  {
                    height: 64,
                    url: `https://i.scdn.co/image/ab67616d000048513e0936633c4c927ac22818e1`,
                    width: 64,
                  },
                ],
                name: `Savage Love (Laxed - Siren Beat) [BTS Remix]`,
                release_date: `2020-10-02`,
                release_date_precision: `day`,
                total_tracks: 2,
                type: `album`,
                uri: `spotify:album:5O6izFQ2veRaZOcQSyOi4o`,
              },
              artists: [
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/56mfhUDKa1vec6rSLZV5Eg`,
                  },
                  href: `https://api.spotify.com/v1/artists/56mfhUDKa1vec6rSLZV5Eg`,
                  id: `56mfhUDKa1vec6rSLZV5Eg`,
                  name: `Jawsh 685`,
                  type: `artist`,
                  uri: `spotify:artist:56mfhUDKa1vec6rSLZV5Eg`,
                },
                {
                  external_urls: {
                    spotify: `https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y`,
                  },
                  href: `https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y`,
                  id: `07YZf4WDAMNwqr4jfgOZ8y`,
                  name: `Jason Derulo`,
                  type: `artist`,
                  uri: `spotify:artist:07YZf4WDAMNwqr4jfgOZ8y`,
                },
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
              disc_number: 1,
              duration_ms: 184905,
              explicit: true,
              external_ids: {
                isrc: `USSM12005696`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/4TgxFMOn5yoESW6zCidCXL`,
              },
              href: `https://api.spotify.com/v1/tracks/4TgxFMOn5yoESW6zCidCXL`,
              id: `4TgxFMOn5yoESW6zCidCXL`,
              is_local: false,
              is_playable: true,
              name: `Savage Love (Laxed – Siren Beat) [BTS Remix]`,
              popularity: 80,
              preview_url: `https://p.scdn.co/mp3-preview/efd5dc3b16c735e2cf39d3e27fce6ce36a26fbdb?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 1,
              type: `track`,
              uri: `spotify:track:4TgxFMOn5yoESW6zCidCXL`,
            },
            {
              album: {
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
              disc_number: 1,
              duration_ms: 239722,
              explicit: false,
              external_ids: {
                isrc: `QMFME2038761`,
              },
              external_urls: {
                spotify: `https://open.spotify.com/track/54DmTIv86D3sYdiawjULQ0`,
              },
              href: `https://api.spotify.com/v1/tracks/54DmTIv86D3sYdiawjULQ0`,
              id: `54DmTIv86D3sYdiawjULQ0`,
              is_local: false,
              is_playable: true,
              name: `Dis-ease`,
              popularity: 79,
              preview_url: `https://p.scdn.co/mp3-preview/0ceaed1d6b96fc04e513d10f05d1c736caf70b3f?cid=7b5ef5a0d7094b5b84a2a6d85deccd65`,
              track_number: 6,
              type: `track`,
              uri: `spotify:track:54DmTIv86D3sYdiawjULQ0`,
            },
          ],
          limit: 10,
          next: `https://api.spotify.com/v1/search?query=bts&type=track&market=from_token&offset=10&limit=10`,
          offset: 0,
          previous: undefined,
          total: 2457,
        },
      },
    );
  }, [add]);
  return (
    <div>
      <ListEntity trackId="4saklk6nie3yiGePpBwUoc" />
    </div>
  );
});
