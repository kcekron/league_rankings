export type MatchResults = {
  teamA: {
    name: string;
    score: number;
  };
  teamB: {
    name: string;
    score: number;
  };
};

export const parseScores = (scoreLine: string): MatchResults => {
  const regex = /(?<teamAName>.*?)\s*(?<teamAScore>\d+)\s*,\s*(?<teamBName>.*?)\s*(?<teamBScore>\d+)/;

  const matches = scoreLine.match(regex);

  return {
    teamA: {
      name: matches?.groups?.teamAName ?? null,
      score: parseInt(matches?.groups?.teamAScore),
    },
    teamB: {
      name: matches?.groups?.teamBName ?? null,
      score: parseInt(matches?.groups?.teamBScore),
    },
  };
};
