import { MatchResults } from "./parse";

export const evaluateScores = (results: MatchResults): MatchResults => {
  let teamAPoints = 0;
  let teamBPoints = 0;
  if (results.teamA.score > results.teamB.score) {
    teamAPoints = 3;
  } else if (results.teamA.score < results.teamB.score) {
    teamBPoints = 3;
  } else {
    teamAPoints = 1;
    teamBPoints = 1;
  }
  return {
    teamA: {
      ...results.teamA,
      points: teamAPoints,
    },
    teamB: {
      ...results.teamB,
      points: teamBPoints,
    },
  };
};
