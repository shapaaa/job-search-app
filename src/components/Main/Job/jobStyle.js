import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
	width: 100%;
	display: grid;
	box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
	margin-bottom: 25px;
	border-radius: 4px;
	grid-template-columns: 1.3fr 4fr;
	grid-template-areas:
		'logo detail'
		' .   info';
	@media screen and (min-width: 1200px) {
		grid-template-columns: 1.5fr 2fr 3fr;
		grid-template-areas: 'logo detail info';
	}
`;
export const Logo = styled.img`
	margin: 10px 0 10px 12px;
	object-fit: contain;
	padding: 0;
	height: 90%;
	max-height: 100px;
	border-radius: 4px;
	width: 100%;
`;
export const LogoContainer = styled(Link)`
	grid-area: logo;
`;
export const Detail = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 3px;
	margin: 12px 0 10px 30px;
	grid-area: detail;
`;
export const Data = styled.p`
	color: var(--text-color);
	font-family: 'Roboto';
	letter-spacing: 0.9px;
	margin: 0;
	${(props) =>
		props.main &&
		css`
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		`}
	${(props) =>
		props.name &&
		css`
			font-weight: bold;
			letter-spacing: 1.1px;
			font-size: clamp(1.3rem, 2.1vw, 1.45rem);
			line-height: 1.5;
			width: clamp(150px, 30vw, 300px);
		`}
	${(props) =>
		props.role &&
		css`
			width: clamp(150px, 30vw, 300px);
			font-size: clamp(1.5rem, 3.1vw, 1.8rem);
			font-weight: normal;
			line-height: 1.5;
			padding: 1rem 0;
		`}
	${(props) =>
		props.period &&
		css`
			font-size: 1.2rem;
			padding: 9px;
			font-weight: bolder;
			border: 1px solid var(--text-color);
			border-radius: 4px;
			width: fit-content;
			height: fit-content;
		`}
`;
export const Info = styled.div`
	grid-area: info;
	display: flex;
	@media screen and (max-width: 470px) {
		justify-content: flex-start;
	}
	@media screen and (min-width: 471px) {
		justify-content: flex-end;
	}
	align-items: flex-end;
`;
export const Location = styled.div`
	display: flex;
	text-decoration: none;
	align-items: center;
	margin-right: 20px;
	@media screen and (max-width: 471px) {
		margin-right: 10px;
	}
`;
export const Icon = styled.img`
	margin-bottom: -3px;
	margin-right: 2px;
	width: 20px;
	height: 18px;
`;
export const Text = styled.p`
	color: var(--location-color);
	font-family: 'Roboto';
	width: clamp(70px, 15vw, 100px);
	white-space: nowrap;
	${(props) =>
		props.main &&
		css`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	line-height: 1;
	font-size: clamp(1.3rem, 1.2vw, 1.55rem);
	letter-spacing: 0.5px;
`;
