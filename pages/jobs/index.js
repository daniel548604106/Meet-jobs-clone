import React, { useEffect, useState } from 'react';
import request from '../../lib/axiosConfig';
const index = () => {
  const [jobs, setJobs] = useState(null);
  const getJobs = async () => {
    try {
      const { data } = await request.get('/api/jobs');
      setJobs(data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  });
  return (
    <div>
      Jobs
      {jobs && jobs.map((job) => <div>{job.company_name}</div>)}
    </div>
  );
};

export default index;
