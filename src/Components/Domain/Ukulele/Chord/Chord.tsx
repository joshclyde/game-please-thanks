import React from "react";

import { ChordProps } from "./types";
import { getChordString } from "./utils";

const DumbChord = ({ chord }: ChordProps) => (
  <div>
    <pre>{getChordString(chord)}</pre>
  </div>
);

export const Chord = DumbChord;
