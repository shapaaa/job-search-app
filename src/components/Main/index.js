import React from 'react';
import {
	Location,
	InputSection,
	NoJobs,
	Loading,
	ErrorM,
	Text,
	CheckBox,
	Container,
	Label,
} from './style';
import Jobs from './jobs';

function Main(props) {
	const handleChange = (e) => {
		props.onLocationChange(e.target.value);
	};
	const handleCheck = (e) => {
		props.onTypeChange(e.target.checked);
	};

	return (
		<Container>
			<InputSection>
				<CheckBox>
					<input onClick={handleCheck} id='input' type='checkbox' />
					<Label for='input'>Full Time</Label>
				</CheckBox>
				<Text>LOCATION</Text>
				<Location
					onChange={handleChange}
					placeholder='City,state,zip code or country'
					type='text'
				/>
			</InputSection>
			{props.error ? (
				<ErrorM>Something Went Wrong</ErrorM>
			) : props.isLoading ? (
				<Loading>JobList is Loading please wait...</Loading>
			) : props.data.length === 0 ? (
				<NoJobs>No Jobs Found Related To It</NoJobs>
			) : (
				<Jobs data={props.data} />
			)}
		</Container>
	);
}

export default Main;
