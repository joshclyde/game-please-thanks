import { useAtomValue } from "jotai";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import {
  useListenForAuth,
  useLoadGames,
  currentUserIdStatusAtom,
  useLoadUsers,
} from "@State";
import { COLORS } from "@Utils";

import { EditProfileRoute } from "./EditProfileRoute";
import { FindGameRoute } from "./FindGameRoute";
import { FriendsRoute } from "./FriendsRoute";
import { GameEntityRoute } from "./GameEntityRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";
import { LoadingRoute } from "./LoadingRoute";
import { ProfileRoute } from "./ProfileRoute";
import { SettingsRoute } from "./SettingsRoute";
import { UserEntityRoute } from "./UserEntityRoute";
import { UsersRoute } from "./UsersRoute";

const Div = styled.div`
  margin: 15px;
  border: ${COLORS.YELLOW} solid 1px;

  width: calc(100vw - 32px);
  min-height: calc(100vh - 64px);
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AuthRoutesFC: FC<{}> = () => {
  useListenForAuth();
  const authStatus = useAtomValue(currentUserIdStatusAtom);

  const usersState = useLoadUsers();
  const gamesState = useLoadGames();

  if (authStatus != `COMPLETE` || gamesState != `hasData` || usersState != `hasData`) {
    return (
      <Div>
        {/* only show the logo if we're for sure on the home page */}
        <Routes>
          <Route path="/" element={<LoadingRoute />} />
        </Routes>
      </Div>
    );
  }

  return (
    <Div>
      <Routes>
        <Route path="/games/:gameId" element={<GameEntityRoute />} />
        <Route path="/games" element={<GamesRoute />} />
        <Route path="/users/:userId" element={<UserEntityRoute />} />
        <Route path="/users" element={<UsersRoute />} />
        <Route path="/friends" element={<FriendsRoute />} />
        <Route path="/find" element={<FindGameRoute />} />
        <Route path="/settings" element={<SettingsRoute />} />
        <Route path="/profile/edit" element={<EditProfileRoute />} />
        <Route path="/profile" element={<ProfileRoute />} />
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </Div>
  );
};

export const AuthRoutes = AuthRoutesFC;
