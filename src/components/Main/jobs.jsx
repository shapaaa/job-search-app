import React from 'react';
import Job from './Job/job';
import { JobList } from './style';

function Jobs(props) {
	return (
		<>
			<JobList>
				{props.data.map((job) => (
					<Job job={job} />
				))}
			</JobList>
		</>
	);
}

export default Jobs;
