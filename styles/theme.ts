export interface StyledRingoTheme {
	color: {
		ringoRed: string
		ringoGreen: string
		ringoWhite: string
		ringoBlack: string
		ringoRedHoverDark: string
	}
	fonts: string[]
	fontSize: {
		small: string
		medium: string
		large: string
	}
}

export const theme: StyledRingoTheme = {
	color: {
		ringoRed: '#f20904',
		ringoGreen: '#00b721',
		ringoWhite: '#ffffff',
		ringoBlack: '#000000',
		ringoRedHoverDark: '#c90602',
	},
	fonts: ['Roboto', 'Oleo Script', 'sans-serif'],
	fontSize: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
}
