#!/usr/bin/env node
import getName from '../src/cli.js';
import logicEvenGame from '../src/game-even.js';

const name = getName();
logicEvenGame(name);
