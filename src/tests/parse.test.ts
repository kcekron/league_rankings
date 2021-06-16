import { parseScores } from "../parse";
import { expect } from "chai";
describe("Parsing tests", () => {
  it(`should parse a score line`, () => {
    const parsed = parseScores(`Lions 3, Snakes 3`);

    expect(parsed).to.have.property("teamA");
    expect(parsed.teamA).to.have.property("name");
    expect(parsed.teamA.name).to.equal("Lions");
    expect(parsed.teamA).to.have.property("score");
    expect(parsed.teamA.score).to.equal(3);
    expect(parsed).to.have.property("teamB");
    expect(parsed.teamB).to.have.property("name");
    expect(parsed.teamB.name).to.equal("Snakes");
    expect(parsed.teamB).to.have.property("score");
    expect(parsed.teamB.score).to.equal(3);
  });

  it(`should fail to parse a malformed score line`, () => {
    const parsed = parseScores(`I am wrong`);

    expect(parsed).to.have.property("teamA");
    expect(parsed.teamA).to.have.property("name");
    expect(parsed.teamA.name).to.equal(null);
    expect(parsed.teamA).to.have.property("score");
    expect(parsed.teamA.score).to.equal(NaN);
    expect(parsed).to.have.property("teamB");
    expect(parsed.teamB).to.have.property("name");
    expect(parsed.teamB.name).to.equal(null);
    expect(parsed.teamB).to.have.property("score");
    expect(parsed.teamB.score).to.equal(NaN);
  });
});
