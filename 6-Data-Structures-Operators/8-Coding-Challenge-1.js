'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const Bayern_Munich = {
  gk: [],
  field_players: [],
};

const Borrussia_Dortmund = {
  gk: '',
  field_players: [],
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thigo', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

const pringGoals = function (...players) {
  console.log(`${players.length} goals weere scored.`);
};

pringGoals(...game.scored);

team1 < team2 && console.log('Team 1 more likely to win');
team1 > team2 && console.log('Team 2 more likely to win');
