import axios from 'axios';

const getJobs = async ({ description, fullTime, location, page }) => {
	const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
	// const url = `${process.env.REACT_APP_API_URL}positions?description=${description}&location=${location}&full_time=${fullTime}&page=${page}`;
	const url = `https://jobs.github.com/positions.json?description=${description}
	&location=${location}&full_time=${fullTime}&page=${page}`;
	try {
		const response = await axios.get(proxyUrl + url);
		return { data: response.data, error: false, isLoading: false };
	} catch (e) {
		return { data: [], error: true, isLoading: true };
	}
};
export default getJobs;
