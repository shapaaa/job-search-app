import styled from 'styled-components';
import worldMap from '../../asset/worldMap.svg';

export const Container = styled.div`
	display: grid;
	grid-template-areas:
		'input'
		'joblist';
	row-gap: 30px;
	@media screen and (min-width: 1000px) {
		grid-template-columns: 1.25fr 3fr;
		grid-template-areas: 'input joblist';
		gap: 25px;
	}
`;
export const Text = styled.div`
	color: var(--location-color);
	font-family: 'Poppins';
	font-weight: 700;
	font-size: 1.5rem;
	margin-bottom: 8px;
`;
export const InputSection = styled.div`
	font-size: 1.6rem;
	font-family: 'Poppins';
	color: var(--text-color);
	grid-area: input;
`;
export const Label = styled.label`
	padding: 1rem;
`;

export const JobList = styled.div`
	grid-area: joblist;
`;
export const Location = styled.input`
	background: white url(${worldMap}) no-repeat 1.8% 55%;
	background-size: 1.6rem 1.6rem;
	border-radius: 4px;
	height: 48px;
	border: 1px solid gray;
	width: 100%;
	min-width: 300px;
	max-width: 350px;
	padding-left: 30px;
`;
export const CheckBox = styled.div`
	margin-bottom: 15px;
`;
export const ErrorM = styled.div`
	color: red;
	font-size: clamp(1.8rem, 6vw, 3rem);
	text-align: center;
`;
export const Loading = styled.div`
	color: var(--text-color);
	font-size: clamp(1.6rem, 6vw, 3rem);
	text-align: center;
`;
export const NoJobs = styled.div`
	color: var(--location-color);
	font-size: clamp(1.6rem, 5vw, 2rem);
	text-align: center;
`;
