# league_rankings

Simple command line app to calculate league rankings based on a given input file. Sample input is provided in the `scores` file.

```bash
npm i
npm start scores
```

Expected output:
```bash
> node built/main.js "scores"

1. Tarantulas, 6 pts
2. Lions, 5 pts
3. FC Awesome, 1 pt
3. Snakes, 1 pt
5. Grouches, 0 pts
```

To run automated tests:
```bash
npm test
```

Expected output:
```bash
> nyc mocha -r ts-node/register src/tests/*.test.ts --exit

  Evaluation function tests
    ✔ Team A wins
    ✔ Team B wins
    ✔ Draw - zero scores
    ✔ Draw - non-zero scores

  Parsing function tests
    ✔ should parse a score line
    ✔ should fail to parse a malformed score line

  Rank function tests
    ✔ should calculate scores
    ✔ should calculate rankings - no ties
    ✔ should calculate rankings - some ties
    ✔ should calculate rankings - all ties


  10 passing (60ms)

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |      100 |     100 |     100 |                   
 evaluate.ts |     100 |      100 |     100 |     100 |                   
 parse.ts    |     100 |      100 |     100 |     100 |                   
 rank.ts     |     100 |      100 |     100 |     100 |                   
-------------|---------|----------|---------|---------|-------------------
```