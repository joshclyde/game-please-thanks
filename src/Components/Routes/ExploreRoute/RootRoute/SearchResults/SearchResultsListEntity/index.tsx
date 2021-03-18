import React, { FC } from "react";
import styled from "styled-components";

import { Tile, Text } from "@Design";
import {
  useSelectSpotifySearchResultsAlbumName,
  useSelectSpotifySearchResultsAlbumArtistName,
  useSelectSpotifySearchResultsAlbumImageUrl,
} from "@Redux";

const StyledTile = styled(Tile)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const TextDiv = styled.div`
  margin: 0px 0px 0px 8px;
`;

const Name = styled(Text)`
  margin: 0px 0px 2px 0px;
`;

const Artist = styled(Text).attrs(() => ({ size: `xs`, soft: true }))`
  margin: 0px;
`;

interface Props {
  term: string;
  index: number;
}

const SearchResultsListEntityFC: FC<Props> = ({ term, index }) => {
  const imageUrl = useSelectSpotifySearchResultsAlbumImageUrl(
    { term, type: `album` },
    index,
  );
  const name = useSelectSpotifySearchResultsAlbumName({ term, type: `album` }, index);
  const artistName = useSelectSpotifySearchResultsAlbumArtistName(
    { term, type: `album` },
    index,
  );

  return (
    <StyledTile>
      <Img src={imageUrl} />
      <TextDiv>
        <Name>{name}</Name>
        <Artist>{artistName}</Artist>
      </TextDiv>
    </StyledTile>
  );
};

export const SearchResultsListEntity = SearchResultsListEntityFC;
