import React, { FC } from "react";
import styled from "styled-components";

import { useSelectSpotifySearchResultsAlbum } from "@Redux";

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
  const album = useSelectSpotifySearchResultsAlbum(searchResultsKey, index);

  return (
    <Tile>
      <Img src={album?.images[1].url} />
      <TextDiv>
        <MainText>{album?.name}</MainText>
        <SubText>{album?.artists[0].name}</SubText>
      </TextDiv>
    </Tile>
  );
};

export const SearchResultsListEntity = SearchResultsListEntityFC;
