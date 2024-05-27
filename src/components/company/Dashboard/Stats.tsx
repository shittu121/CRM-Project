import React from 'react'
import CardOne from './cards/CardOne';
import CardTwo from './cards/CardTwo';
import CardThree from './cards/CardThree';
import CardFour from './cards/CardFour';

const data = {
  
    users: 1,
    orders: 200,
    revenue:1000,
    products: 30
  

 
}

export default function Stats() {
  return (
    <>
      <div className="mb-5">
        {/* <h3 className='font-semibold text-3xl text-black-2'>Dashboard</h3> */}
      </div>
      <div className="grid mb-10 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne users={data?.users} />
        <CardTwo orders={data?.orders} />
        <CardThree revenue={data?.revenue} />
        <CardFour products={data?.products} />
      </div>
      {/* 
      <div className="mt-4 grid grid-cols-12 md:grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
      </div> */}
      <div>
        {/* <ChartThree /> */}
      </div>
    </>
  );
}
