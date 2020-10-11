import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	text-decoration: none;
`;
const Button = styled.button`
	padding: 14px 20px;
	width: 300px;
	@media screen and (max-width: 400px) {
		width: 80%;
	}
	cursor: pointer;
	font-size: 1.6rem;
	background: hsla(171, 87%, 67%, 1);
	border: none;
	border-radius: 4px;
	background: linear-gradient(180deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%);

	background: -moz-linear-gradient(180deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%);

	background: -webkit-linear-gradient(
		180deg,
		hsla(171, 87%, 67%, 1) 0%,
		hsla(236, 100%, 72%, 1) 100%
	);

	filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61F4DE", endColorstr="#6E78FF", GradientType=1 );
`;
function Foot(props) {
	return (
		<Container>
			<Button onClick={props.handleMoreJobs}>Load More Jobs</Button>
		</Container>
	);
}

export default Foot;
