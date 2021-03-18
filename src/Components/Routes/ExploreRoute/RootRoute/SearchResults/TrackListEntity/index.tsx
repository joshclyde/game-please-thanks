import React, { FC } from "react";
import styled from "styled-components";

import { IconMoreVertical, Tile, Text } from "@Design";
// import {
//   useSelectSpotifySearchResultsAlbumName,
//   useSelectSpotifySearchResultsAlbumArtistName,
//   useSelectSpotifySearchResultsAlbumImageUrl,
// } from "@Redux";

const StyledTile = styled(Tile)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const NameArtistDiv = styled.div`
  margin: 0px 0px 0px 8px;
`;

const Name = styled(Text)`
  margin: 0px 0px 2px 0px;
`;

const Artist = styled(Text).attrs(() => ({ size: `xs`, soft: true }))`
  margin: 0px;
`;

const TrackLength = styled(Text).attrs(() => ({ size: `xs`, soft: true }))`
  margin: 0px 8px; 0px; 0px;
`;

interface Props {
  term?: string;
  index?: number;
  imageUrl: string;
  name: string;
  artistName: string;
}

const TrackListEntityFC: FC<Props> = ({ term, index, imageUrl, name, artistName }) => {
  // const imageUrl = useSelectSpotifySearchResultsAlbumImageUrl(
  //   { term, type: `track` },
  //   index,
  // );
  // const name = useSelectSpotifySearchResultsAlbumName({ term, type: `track` }, index);
  // const artistName = useSelectSpotifySearchResultsAlbumArtistName(
  //   { term, type: `track` },
  //   index,
  // );

  return (
    <StyledTile>
      <Left>
        <Img src={imageUrl} />
        <NameArtistDiv>
          <Name>{name}</Name>
          <Artist>{artistName}</Artist>
        </NameArtistDiv>
      </Left>
      <Right>
        <TrackLength>2:59</TrackLength>
        <IconMoreVertical color="#8C8C8C" />
      </Right>
    </StyledTile>
  );
};

export const TrackListEntity = TrackListEntityFC;
