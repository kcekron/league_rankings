import * as fs from "fs";
import { evaluateScores } from "./evaluate";
import { parseScores } from "./parse";
import { calculateRank, calculateTotalPointsAndSort } from "./rank";

const lines = fs.readFileSync("./scores", "utf-8");

const parsed = lines
  .split("\n")
  .map((l) => parseScores(l))
  .map((scores) => evaluateScores(scores));

const scores = calculateTotalPointsAndSort(parsed);

const ranked = calculateRank(scores);

console.log(
  ranked.map((rank) => `${rank.position}. ${rank.name}, ${rank.points} ${rank.points === 1 ? "pt" : "pts"}`).join("\n"),
);
