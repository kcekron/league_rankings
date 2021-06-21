import { readFileSync } from "fs";
import { evaluateScores } from "./evaluate";
import { parseScores } from "./parse";
import { calculateRank, calculateTotalPoints } from "./rank";

const args = process.argv.slice(2);
if (args.length !== 1) {
  throw new Error("usage: node main.js <path>");
}
const scoresPath = args[0];
const scores = readFileSync(scoresPath, "utf-8").split("\n");

// Parse scores file & calculate scores
const parsed = scores.map((score) => parseScores(score)).map((score) => evaluateScores(score));

// Calculatre points
const totals = calculateTotalPoints(parsed);

// Sort and rank
const ranked = calculateRank(totals);

// Print
ranked
  .map((rank) => `${rank.position}. ${rank.name}, ${rank.points} ${rank.points === 1 ? "pt" : "pts"}`)
  .forEach((rank) => console.info(rank));
