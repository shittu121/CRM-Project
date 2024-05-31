import React from 'react'
import ChartOne from './ChartOne';
import ChartThree from './ChartThree';
export default function Chart() {
  return (
    <div>
      <div className="mt-4 grid  md:grid-cols-3 2xl:grid-cols-4 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-2 2xl:col-span-3">
          <ChartOne />
        </div>

        <div className=" col-span-1 2xl:col-span-1">
          <ChartThree />
        </div>
      </div>
    </div>
  );
}
