import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import CampaignContainer from './CampaignContainer';
import Form from './../organisms/Form';

import './Dashboard.css';

const Dashboard = () => {
	let match = useRouteMatch();

	return (
		<div className='dashboard'>
			<aside className='dashboard-nav'>
				<h1 className='dashboard-header'>dashboard</h1>
				<ul className='dashboard-nav-links'>
					<li>
						<Link to={`${match.url}/preview`}>Unsent Campagins</Link>
					</li>
					<li>
						<Link to={`${match.url}/sent`}>Sent Campaigns</Link>
					</li>
					<li>
						<Link to={`${match.url}`}>+ Create New</Link>
					</li>
				</ul>
			</aside>

			<Switch>
				<Route path={`${match.path}/:campaignType`}>
					<CampaignContainer className='campaign-container' />
				</Route>
				<Route path={`${match.path}`}>
					<Form />
				</Route>
			</Switch>
		</div>
	);
};

export default Dashboard;
