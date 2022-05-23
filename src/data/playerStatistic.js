import * as React from 'react';

export const StatisticContext = React.createContext();

export const playerStatistic = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	datasets: [
	  {
		data: [0, 0, 0, 0, 0, 0, 0, 0],
	  }
	],
	
	totalWins: 0,
	winRatio: 0,
	winStreak: 0,
	gameCount: 0,
};

