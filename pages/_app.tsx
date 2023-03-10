import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</ThemeProvider>
		</Fragment>
	)
}

export default MyApp
