import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Page from './Page';

const theme = {
	color: { negative: 'hotpink', primary: 'aqua', positive: '' },
};

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Page></Page>
			</ThemeProvider>
		</>
	);
};

export default hot(App);
