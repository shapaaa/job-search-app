import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/index';
import { debounce } from 'lodash';
import Main from './components/Main/index';
import getJobs from './services/positions';
import { Container } from './style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobDetail from '../src/components/JobDetail/detail';
import Footer from './components/Footer/footer';

function App() {
	const [state, setState] = useState({ description: '', location: '', fullTime: false });
	const [page, setPage] = useState(0);
	const [data, setData] = useState({ result: [], error: false, isLoading: true });
	const [description, setDescription] = useState('');
	useEffect(() => {
		getJobs({ ...state, page }).then((props) => {
			if (page > 0)
				setData({
					result: [...data.result, ...props.data],
					error: props.error,
					isLoading: props.isLoading,
				});
			else
				setData({
					result: props.data,
					error: props.error,
					isLoading: props.isLoading,
				});
		});
	}, [state, page]);
	const handleMoreJobs = () => {
		setPage(page + 1);
	};
	const debouncedState = useCallback(
		debounce((location, description) => {
			setState({ ...state, location, description });
			setPage(0);
		}, 1000),
		[]
	);
	const handleLocation = (location) => {
		debouncedState(location, description);
	};

	const handleDescription = () => {
		setState({ ...state, description });
		setPage(0);
	};

	const handleFullTime = (fullTime) => {
		setState({ ...state, fullTime });
	};
	const handleChange = (description) => {
		setDescription(description);
	};

	return (
		<Router>
			<Container>
				<Switch>
					<Route exact path='/'>
						<Header onChange={handleChange} onDescriptionChange={handleDescription} />
						<Main
							data={data.result}
							error={data.error}
							isLoading={data.isLoading}
							onLocationChange={handleLocation}
							onTypeChange={handleFullTime}
						/>
						{data.result.length !== 0 && data.result.length % 50 === 0 ? (
							<Footer page={page} handleMoreJobs={handleMoreJobs} />
						) : null}
					</Route>
					<Route path='/:id' component={JobDetail} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;

//** here we are using debouncing to wait for 1000ms after user stops typing
//** and then setState will be called with real-time location value
//** so here we are only making resucing the requets to api
//** & increasing performance
