import React from 'react';
import { Title } from '../Header/style';
import {
	Container,
	NewLT,
	NewLink,
	CLContainer,
	Description,
	HTApply,
	Header,
	LogoContainer,
	Main,
	NewLogo,
	NewText,
	RoleContainer,
	NewData,
} from './style';
import { Data, Location, Icon, Text } from '../Main/Job/jobStyle';
import clock from '../../asset/clock.svg';
import worldMap from '../../asset/worldMap.svg';
import parse from 'html-react-parser';

const detail = (props) => {
	const {
		how_to_apply,
		title,
		company,
		company_logo,
		description,
		created_at,
		type,
		location,
	} = props.location.state;
	return (
		<Container>
			<Header>
				<Title>
					<strong style={{ fontWeight: 'bolder' }}>Github</strong> Jobs
				</Title>
				<NewLink to='/'>Back to Search</NewLink>
				<NewText>HOW TO APPLY</NewText>
				<HTApply>{parse(how_to_apply)}</HTApply>
			</Header>
			<Main>
				<RoleContainer>
					<NewData role>{title}</NewData>
					<NewData style={{ marginTop: 5 }} period>
						Full time
					</NewData>
				</RoleContainer>
				<Location>
					<Icon src={clock} />
					<Text style={{ fontSize: 14 }}>{created_at}</Text>
				</Location>
				<LogoContainer>
					{company_logo && <NewLogo src={company_logo} />}
					<CLContainer>
						<Data style={{ marginLeft: 5, fontSize: 14 }} name>
							{company}
						</Data>
						<Location>
							<Icon src={worldMap} />
							<NewLT main>{location}</NewLT>
						</Location>
					</CLContainer>
				</LogoContainer>
				<Description>{parse(description)}</Description>
			</Main>
		</Container>
	);
};

export default detail;
