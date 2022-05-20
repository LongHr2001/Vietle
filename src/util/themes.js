import * as React from 'react';

export const ThemeContext = React.createContext();

export const LIGHT_THEME = {
	dark: false,
	accessible: false,
	colors: {
		primary: '#FFFFFF',
		background: '#FFFFFF',
		card: '#FFFFFF',
		text: '#000000',
		border: '#FFFFFF',
		notification: '#FFFFFF',
	},
};

export const DARK_THEME = {
	dark: true,
	accessible: false,
	colors: {
		primary: '#000000',
		background: '#121213',
		card: '#000000',
		text: '#FFFFFF',
		border: '#000000',
		notification: '#000000',
	},
};