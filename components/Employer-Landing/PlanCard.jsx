import React from 'react';

const PlanCard = ({ title, services, price }) => {
  return (
    <div className="p-10 bg-white h-730px relative mr-5 whitespace-nowrap min-w-300px">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <h2 className="mb-2 text-xl font-semibold text-blue-500">{price}</h2>
      <p className="mb-2 text-blue-500 ">Per successful hire</p>
      <hr className="my-5" />
      {/* <ul>
        {services.map((service) => (
          <li className="mb-10">{service}</li>
        ))}
      </ul> */}
      <button className="bg-blue-500 px-5 py-3 rounded text-white w-200px absolute bottom-10 left-1/2 transform -translate-x-1/2">
        Select Plan
      </button>
    </div>
  );
};

export default PlanCard;
