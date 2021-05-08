import React, { useEffect } from 'react';
import request from '../../lib/axiosConfig';
import JobInfoCard from '../../components/Jobs/JobInfoCard';
import Link from 'next/link';
const index = ({ jobs }) => {
  return (
    <div className="p-3 mx-auto max-w-5xl py-10">
      {jobs &&
        jobs.map((job) => (
          <Link href="/jobs/123" className="cursor-pointer" key={job.company_name}>
            <JobInfoCard job={job} />
          </Link>
        ))}
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
