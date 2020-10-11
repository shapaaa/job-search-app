import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import leftArrow from '../../asset/leftArrow.svg';
import { Text as Boom } from '../Main/style';
import { Logo, Data, Text } from '../Main/Job/jobStyle';
export const Container = styled.div`
	display: grid;
	grid-template-areas:
		'header'
		'main';
	row-gap: 30px;
	@media screen and (min-width: 1000px) {
		grid-template-columns: 1.25fr 3fr;
		grid-template-areas: 'header main';
		row-gap: 25px;
	}
`;
export const NewLink = styled(Link)`
	color: var(--button-color);
	font-family: 'Poppins';
	font-weight: 500;
	line-height: 1.6;
	text-decoration: none;
	font-size: 1.5rem;
	background: url(${leftArrow}) no-repeat 0 2px;
	padding-left: 25px;
	margin-top: 20px;
	display: block;
`;
export const NewText = styled(Boom)`
	margin-top: clamp(20px, 2vw, 30px);
`;
export const HTApply = styled.div`
	color: var(--text-color);
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 1.5;
	& > p > a {
		font-size: 14px;
		padding-right: 10px;
		overflow: hidden;
		margin-right: 10px;
		white-space: normal;
		text-decoration: none;
	}
`;
export const NewData = styled(Data)`
	${(props) =>
		props.role &&
		css`
			width: fit-content;
			font-weight: bold;
			font-size: max(2rem, 2vw);
			margin-right: 15px;
			padding: 0;
		`};
`;
export const NewLogo = styled(Logo)`
	margin: 0;
	height: 60px;
	width: 60px;
	padding: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const NewLT = styled(Text)`
	width: 100%;
	margin: 8px 0;
	font-size: 1.4rem;
`;
export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2vw;
`;
export const CLContainer = styled.div`
	margin-left: 15px;
`;
export const RoleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;
export const Description = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: normal;
	font-size: 17px;
	line-height: 150%;
	color: var(--text-color);
	text-decoration: none;
	& > p > strong {
		font-size: 19px;
		word-spacing: 3px;
	}
	& > p > a {
		text-decoration: none;
	}
`;
export const Main = styled.div`
	padding-right: 10px;
`;
export const Header = styled.div``;
