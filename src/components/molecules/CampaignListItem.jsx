import React from 'react';
import { useParams } from 'react-router-dom';

import { campaigns } from '../../data/campaigns.json';
import './CampaignListItem.css';

export const CampaignListItem = () => {
	let { campaignType } = useParams();

	return (
		<React.Fragment>
			{campaigns.length > 0
				? campaigns
						.filter((item) => item.status.toLowerCase() === campaignType)
						.map((item) => {
							return (
								<main key={item.id} className='main-card'>
									<div className='stats-container'>
										<h2 className='card-title'>{item.name}</h2>
										{item.stats !== null ? (
											<>
												<h3 className='stats-line'>
													Individual recipients:{' '}
													<span className='stats-number'>{item.stats.sent}</span>
												</h3>
												<h3 className='stats-line'>
													Clicked: <span className='stats-number'>{item.stats.clicked} times</span>
												</h3>
											</>
										) : null}
										<h4>
											<em>Status: {item.status}</em>
										</h4>
									</div>
									{item.media ? (
										<div className='image-container'>
											<img src={item.media} alt={`${item.name} campaign`} />
										</div>
									) : (
										<div>
											<em>No Image Available</em>
										</div>
									)}
								</main>
							);
						})
				: null}
		</React.Fragment>
	);
};

export default CampaignListItem;
