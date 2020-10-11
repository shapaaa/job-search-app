import React from 'react';
// import smallImg from '../../asset/small.png';
import { Button, Container, Input, InputContainer, SearchBar, Title } from './style';

function Header(props) {
	const handlePress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			props.onDescriptionChange();
		}
	};
	const handleSearch = (e) => {
		e.preventDefault();
		props.onDescriptionChange();
	};
	const handleChange = (e) => {
		props.onChange(e.target.value);
	};
	return (
		<Container>
			<Title>
				<strong style={{ fontWeight: 'bolder' }}>Github</strong> Jobs
			</Title>
			<SearchBar>
				<InputContainer onSubmit={handleSearch}>
					<Input
						onChange={handleChange}
						onKeyPress={handlePress}
						placeholder='Title,companies,expertise or benefits'
					/>
					<Button type='submit'>Search</Button>
				</InputContainer>
			</SearchBar>
		</Container>
	);
}

export default Header;
