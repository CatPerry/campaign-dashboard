import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

import Dashboard from './molecules/Dashboard';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
	const createApolloClient = () => {
		return new ApolloClient({
			link: new HttpLink({
				uri: 'https://hasura.io/learn/graphql',
			}),
			cache: new InMemoryCache(),
		});
	};

	const client = createApolloClient();

	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='app'>
					<nav>
						<ul>
							<li className='header-nav'>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li className='header-nav'>
								<Link to='/'>Home</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;

function Home() {
	return (
		<div className='home'>
			<h2>E.T. Phone Home</h2>
			<div>
				<img src='https://i.gifer.com/61z.gif' alt='E.T. movie GIF' />
			</div>
		</div>
	);
}
