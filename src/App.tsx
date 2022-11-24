import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';

import { UserContentProvider } from './shared/context/userContext';
import { PostsContentProvider } from './shared/context/postsContext';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getToken, rootReducer, RootState } from './store/reducer';
import thunk from 'redux-thunk';

function AppComponent() {
	return (
		<Layout>
			
		</Layout>

		// <UserContentProvider>
		
		// 		<Header />
		// 		<Content>
		// 			<PostsContentProvider>
		// 				<CardsList />
		// 			</PostsContentProvider>
		// 		</Content>
		
		// </UserContentProvider>
	)
}

export const App = hot(() => 
	// <Provider store={store}>
		<AppComponent />
	// </Provider>
);