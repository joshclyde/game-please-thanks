import React from "react";

import { Chord } from "./Chord";
import { randomChord } from "./Chord/utils";

const DumbUkulele = () => (
  <div>
    <Chord chord={randomChord()} />
  </div>
);

export const Ukulele = DumbUkulele;
