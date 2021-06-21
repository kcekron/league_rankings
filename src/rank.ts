import { MatchResults, TeamDetails } from "./parse";

export const calculateTotalPoints = (results: MatchResults[]): TeamDetails[] => {
  const points: TeamDetails[] = [];

  results.forEach((result) => {
    let teamA = points.find((team) => team.name === result.teamA.name);
    let teamB = points.find((team) => team.name === result.teamB.name);
    if (!teamA) {
      teamA = {
        name: result.teamA.name,
        points: 0,
      };
      points.push(teamA);
    }
    if (!teamB) {
      teamB = {
        name: result.teamB.name,
        points: 0,
      };
      points.push(teamB);
    }

    teamA.points += result.teamA.points;
    teamB.points += result.teamB.points;
  });

  return points;
};

export const calculateRank = (teamDetails: TeamDetails[]): TeamDetails[] => {
  const sorted = teamDetails.sort(
    (teamA, teamB) => teamB.points - teamA.points || teamA.name.localeCompare(teamB.name),
  );
  sorted.forEach((element, index) => {
    if (index > 0 && sorted[index - 1].points === element.points) {
      element.position = sorted[index - 1].position;
    } else {
      element.position = index + 1;
    }
  });

  return sorted;
};
