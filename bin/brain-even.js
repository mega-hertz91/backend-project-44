#!/usr/bin/env node

import getName from '../src/cli.js';
import startGame from '../games/index.js';

// Init player
const name = getName();
// Init game by name
const game = startGame('even');
// Start game
game(name);
