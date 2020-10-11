import styled from 'styled-components';
import img from '../../asset/backgroundImg.webp';
import suitcase from '../../asset/suitcase.svg';

export const Container = styled.div`
	width: 100%;
	margin-bottom: 50px;
`;
export const Title = styled.div`
	font-family: 'Poppins', sans-serif;
	font-size: clamp(
		1.9rem,
		3vw,
		3rem
	); //** 62.5% => 10px =>  1rem && 1vw => 1% of width of viewport */
	line-height: 2;
	margin-bottom: auto;
`;
export const SearchBar = styled.div`
	background: url(${img}) no-repeat center;
	width: 100%;
	background-size: cover;
	height: 138px;
	border-radius: 11px;
	margin-top: 1.3vw;
`;
export const Input = styled.input`
	width: 100%;
	white-space: nowrap; //** the text will not wrap to next line it will go till <b/> is reached */
	overflow: hidden !important;
	text-overflow: ellipsis;
	background: white url(${suitcase}) no-repeat 20px 53%;
	background-size: 1.6rem 1.6rem;
	height: 48px;
	border-radius: 4px;
	border: none;
	padding-right: 30%;
	padding-left: 40px;
	&:focus,
	&:active {
		border: 1px solid var(--button-color);
	}
	&:placeholder-shown {
		line-height: 1.6;
		letter-spacing: 1px;
		color: var(--location-color);
		font-weight: 400;
	}
`;
export const Button = styled.button`
	position: absolute;
	height: 41px;
	font-size: 1.4rem;
	@media screen and (max-width: 899px) {
		width: max(28%, 17vw);
	}
	@media screen and (min-width: 900px) {
		width: min(23vw, 20%);
	}
	top: 3px;
	right: 2px;
	border: none;
	background-color: var(--button-color);
	border-radius: 4px;
	color: rgba(255, 255, 255, 1);
	cursor: pointer;
`;
export const InputContainer = styled.form`
	width: 80%;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	top: 40px;
`;
