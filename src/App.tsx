import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import './main.global.css';
import { Layout } from './shared/components/Layout';
import { Header } from './shared/components/Header';
import { Main } from './shared/components/Main';

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Main />
		</Layout>
	)
}

export const App = hot(() => 
	// <Provider store={store}>
		<AppComponent />
	// </Provider>
);