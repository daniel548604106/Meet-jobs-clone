import React, { useEffect } from 'react';
import request from '../../lib/axiosConfig';
import JobInfoCard from '../../components/Jobs/JobInfoCard';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/solid';
const index = ({ jobs }) => {
  const router = useRouter();
  return (
    <div className="p-3 mx-auto max-w-5xl py-5 sm:py-10">
      <div className="flex justify-between items-center mb-2 sm:mb-5">
        <p>
          1-{jobs.length < 20 ? jobs.length : 20} of {jobs.length} jobs
        </p>
        <div className="focus:bg-blue-500 focus:text-white rounded px-5 py-3 hover:bg-white transition-all duration-200 cursor-pointer text-blue-500 flex items-center">
          <span className="inline pr-5">最相關</span> <ChevronDownIcon className="h-6" />
        </div>
      </div>
      {jobs &&
        jobs.map((job) => (
          <div onClick={() => router.push('/jobs/123')} key={job.company_name}>
            <JobInfoCard job={job} />
          </div>
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
