const createString = (chord: string, s1: number, s2: number, s3: number, s4: number) => {
  let chordString = `.  ${chord}  .\n\n`;
  s1 === 0 ? (chordString += "○ ") : (chordString += `${s1} `);
  s2 === 0 ? (chordString += "○ ") : (chordString += `${s2} `);
  s3 === 0 ? (chordString += "○ ") : (chordString += `${s3} `);
  s4 === 0 ? (chordString += "○\n") : (chordString += `${s4}\n`);
  chordString += "-------\n";
  s1 === 1 ? (chordString += "● ") : (chordString += "| ");
  s2 === 1 ? (chordString += "● ") : (chordString += "| ");
  s3 === 1 ? (chordString += "● ") : (chordString += "| ");
  s4 === 1 ? (chordString += "●\n") : (chordString += "|\n");
  chordString += "-------\n";
  s1 === 2 ? (chordString += "● ") : (chordString += "| ");
  s2 === 2 ? (chordString += "● ") : (chordString += "| ");
  s3 === 2 ? (chordString += "● ") : (chordString += "| ");
  s4 === 2 ? (chordString += "●\n") : (chordString += "|\n");
  chordString += "-------\n";
  s1 === 3 ? (chordString += "● ") : (chordString += "| ");
  s2 === 3 ? (chordString += "● ") : (chordString += "| ");
  s3 === 3 ? (chordString += "● ") : (chordString += "| ");
  s4 === 3 ? (chordString += "●\n") : (chordString += "|\n");
  chordString += "-------\n";
  s1 === 4 ? (chordString += "● ") : (chordString += "| ");
  s2 === 4 ? (chordString += "● ") : (chordString += "| ");
  s3 === 4 ? (chordString += "● ") : (chordString += "| ");
  s4 === 4 ? (chordString += "●\n") : (chordString += "|\n");
  chordString += "-------\n";
  return chordString;
};

export const getChordString = (chord: string) => {
  switch (chord) {
    case "C":
      return createString("C", 0, 0, 0, 3);
    case "G":
      return createString("G", 0, 2, 3, 2);
    case "Am":
      return createString("Am", 2, 0, 0, 0);
    case "F":
      return createString("F", 2, 0, 1, 0);
    default:
      return "";
  }
};

export const randomChord = () => {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return "C";
    case 1:
      return "G";
    case 2:
      return "Am";
    case 3:
      return "F";
    default:
      return "C";
  }
};
