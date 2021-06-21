import { expect } from "chai";
import { evaluateScores } from "../evaluate";
describe("Evaluation function tests", () => {
  const testData = [
    {
      testName: "Team A wins",
      expectedScores: {
        teamA: 3,
        teamB: 0,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 2,
        },
        teamB: {
          name: "Team B",
          score: 0,
        },
      },
    },
    {
      testName: "Team B wins",
      expectedScores: {
        teamA: 0,
        teamB: 3,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 0,
        },
        teamB: {
          name: "Team B",
          score: 2,
        },
      },
    },
    {
      testName: "Draw - zero scores",
      expectedScores: {
        teamA: 1,
        teamB: 1,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 1,
        },
        teamB: {
          name: "Team B",
          score: 1,
        },
      },
    },
    {
      testName: "Draw - non-zero scores",
      expectedScores: {
        teamA: 1,
        teamB: 1,
      },
      result: {
        teamA: {
          name: "Team A",
          score: 1,
        },
        teamB: {
          name: "Team B",
          score: 1,
        },
      },
    },
  ];

  testData.forEach((test) => {
    it(test.testName, () => {
      const result = evaluateScores(test.result);
      expect(result).to.have.property("teamA");
      expect(result.teamA).to.have.property("name");
      expect(result.teamA.name).to.equal(test.result.teamA.name);
      expect(result.teamA).to.have.property("score");
      expect(result.teamA.score).to.equal(test.result.teamA.score);
      expect(result.teamA).to.have.property("points");
      expect(result.teamA.points).to.equal(
        test.expectedScores.teamA,
        `${test.result.teamA.name} should have ${test.expectedScores.teamA} points`,
      );

      expect(result).to.have.property("teamB");
      expect(result.teamB).to.have.property("name");
      expect(result.teamB.name).to.equal(test.result.teamB.name);
      expect(result.teamB).to.have.property("score");
      expect(result.teamB.score).to.equal(test.result.teamB.score);
      expect(result.teamB).to.have.property("points");
      expect(result.teamB.points).to.equal(
        test.expectedScores.teamB,
        `${test.result.teamB.name} should have ${test.expectedScores.teamB} points`,
      );
    });
  });
});
