import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import clock from '../../../asset/clock.svg';
import worldMap from '../../../asset/worldMap.svg';
import {
	Container,
	Location,
	Logo,
	LogoContainer,
	Detail,
	Data,
	Info,
	Text,
	Icon,
} from './jobStyle';

function Job(props) {
	const { id, type, created_at, company, location, title, company_logo } = props.job;
	var time = moment(created_at).fromNow();
	return (
		<Container key={id}>
			{company_logo && (
				<LogoContainer
					style={{ textDecoration: 'none' }}
					to={{
						pathname: `/${id}`,
						state: {
							...props.job,
							created_at: time,
						},
					}}>
					<Logo src={company_logo} loading='lazy' />
				</LogoContainer>
			)}
			<Detail>
				<Data main name>
					{company}
				</Data>
				<Link
					style={{ textDecoration: 'none' }}
					to={{
						pathname: `/${id}`,
						state: {
							...props.job,
							created_at: time,
						},
					}}>
					<Data main role>
						{title}
					</Data>
				</Link>
				<Data main period>
					{type}
				</Data>
			</Detail>
			<Info>
				<Location>
					<Icon src={worldMap} />
					<Text main>{location}</Text>
				</Location>
				<Location>
					<Icon src={clock} />
					<Text main>{time}</Text>
				</Location>
			</Info>
		</Container>
	);
}

export default Job;
