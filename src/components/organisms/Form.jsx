import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import { SEGMENT_OPTIONS } from '../../constants/segments';

export const FormComponent = () => {
	let { newCampaign } = useParams(); // TODO: setup as dashboard/new

	const [selectedFiles, setselectedFiles] = useState(null);
	const [createdCampaign, setCreatedCampaign] = useState([]);
	const [campaignName, setCampaignName] = useState('');
	const [campaignText, setCampaignText] = useState('');
	const [campaginSegment, setCampaginSegment] = useState(null);

	const onFileAddHandler = (event) => {
		setselectedFiles(event.target.files[0]);
	};

	const onFormSubmit = async (e, { formData }) => {
		e.preventDefault();
		const data = new FormData();
		console.log('selectedFiles', selectedFiles, 'data', data);

		for (let singleFile of selectedFiles) {
			data.append('file', selectedFiles[singleFile]);
		}

		// TODO abstract with Redux and send as a graphQL mutation
		const response = await fetch('https://accepted-elephant-62.hasura.app/v1/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((uploadedData) => setCreatedCampaign(uploadedData))
			.catch((error) => console.log(error));

		return response.json();
	};

	const nameInputHandler = (e) => {
		setCampaignName(e.target.value);
	};

	const textInputHandler = (e) => {
		setCampaignText(e.target.value);
	};

	const onSegementSelect = (e) => {
		setCampaginSegment(e.target.value);
	};

	return (
		<Form onSubmit={onFormSubmit}>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Campaign name'
					name='campaignName'
					placeholder='Campaign name'
					onChange={nameInputHandler}
					value={campaignName}
				/>
				<Form.Select
					fluid
					label='Add segment'
					name='segmentOption'
					options={SEGMENT_OPTIONS}
					placeholder='Add segment'
					onChange={onSegementSelect}
				/>
			</Form.Group>
			<div className='ui fluid segment'>
				<input type='file' onChange={onFileAddHandler} multiple />
			</div>
			<Form.TextArea
				label='Text'
				name='campaignText'
				placeholder='What do you want to say to the customer?'
				onChange={textInputHandler}
				value={campaignText}
			/>
			<Form.Button type='submit'>Submit</Form.Button>
		</Form>
	);
};

export default FormComponent;
