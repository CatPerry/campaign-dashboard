import React from 'react';
import CampaignListItem from './CampaignListItem';

import './CampaignContainer.css';

export const CampaignContainer = () => {
	return (
		<div className='campaign-container'>
			<h1>campaigns</h1>
			<CampaignListItem />
		</div>
	);
};

export default CampaignContainer;
