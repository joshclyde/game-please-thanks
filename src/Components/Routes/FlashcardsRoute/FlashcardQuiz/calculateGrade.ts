export const calculateGrade = (percentage: number) => {
  if (percentage >= 0.97) {
    return "A+";
  } else if (percentage >= 0.94) {
    return "A";
  } else if (percentage >= 0.9) {
    return "A-";
  } else if (percentage >= 0.87) {
    return "B+";
  } else if (percentage >= 0.84) {
    return "B";
  } else if (percentage >= 0.8) {
    return "B-";
  } else if (percentage >= 0.77) {
    return "C+";
  } else if (percentage >= 0.74) {
    return "C";
  } else if (percentage >= 0.7) {
    return "C-";
  } else if (percentage >= 0.67) {
    return "D+";
  } else if (percentage >= 0.64) {
    return "D";
  } else if (percentage >= 0.6) {
    return "D-";
  }
  return "F";
};
