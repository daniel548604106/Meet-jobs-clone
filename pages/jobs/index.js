import React, { useEffect } from 'react';
import request from '../../lib/axiosConfig';
const index = ({ jobs }) => {
  // const [jobs, setJobs] = useState(null);
  // const getJobs = async () => {
  //   try {
  //     const { data } = await request.get('/api/jobs');
  //     setJobs(data.jobs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getJobs();
  // });
  return (
    <div>
      Jobs
      {jobs && jobs.map((job) => <div key={job.company_name}>{job.company_name}</div>)}
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await request.get('/api/jobs');
  const jobs = res.data.jobs;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      jobs,
    },
  };
}

export default index;
