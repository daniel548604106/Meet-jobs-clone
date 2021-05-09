import React from 'react';
import Image from 'next/image';
const Event = () => {
  return (
    <div className="lg:min-w-350px  sm:min-w-200px md:min-w-300px w-full h-auto cursor-pointer">
      <Image
        src="https://images.unsplash.com/photo-1620451955631-9a2ba4736e56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        width="700px"
        height="350px"
        className="rounded-lg"
      />
    </div>
  );
};

export default Event;
