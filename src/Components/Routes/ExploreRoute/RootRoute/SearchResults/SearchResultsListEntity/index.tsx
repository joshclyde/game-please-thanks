import React, { FC } from "react";
import styled from "styled-components";

import {
  useSelectSpotifySearchResultsAlbumName,
  useSelectSpotifySearchResultsAlbumArtistName,
  useSelectSpotifySearchResultsAlbumImageUrl,
} from "@Redux";

const Tile = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.tile};
  width: 100%;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const TextDiv = styled.div`
  margin: 0px 0px 0px 8px;
`;

const MainText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.75em;
  margin: 0px 0px 2px 0px;
`;

const SubText = styled.p`
  color: ${(props) => props.theme.mellowText};
  font-size: 0.625em;
  margin: 0px;
`;

interface Props {
  searchResultsKey: string;
  index: number;
}

const SearchResultsListEntityFC: FC<Props> = ({ searchResultsKey, index }) => {
  const imageUrl = useSelectSpotifySearchResultsAlbumImageUrl(searchResultsKey, index);
  const name = useSelectSpotifySearchResultsAlbumName(searchResultsKey, index);
  const artistName = useSelectSpotifySearchResultsAlbumArtistName(
    searchResultsKey,
    index,
  );

  return (
    <Tile>
      <Img src={imageUrl} />
      <TextDiv>
        <MainText>{name}</MainText>
        <SubText>{artistName}</SubText>
      </TextDiv>
    </Tile>
  );
};

export const SearchResultsListEntity = SearchResultsListEntityFC;
