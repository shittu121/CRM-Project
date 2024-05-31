import React from 'react';
import Image from 'next/image';

interface Vehicle {
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  servicedRequired: boolean;
  notes: string;
  isDisabled: boolean;
}

interface ViewDetailsProps {
  vehicle: Vehicle;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ vehicle }) => {
  return (
    <div className='bg-whiten h-[95vh] w-[71rem]'>
      <h1 className='font-bold pt-2 text-3xl mx-4'>{vehicle.licensePlate}</h1> 

      <div className="flex gap-13 font-bold text-sm">
        <div className="left w-full">
          <div className="text mt-3">
            <div className="flex mx-4 gap-39">
             <span>{vehicle.make}</span>
             <span className='mx-2'>Last Service Date</span>
            </div>
            <div className="flex mx-4 gap-40">
             <span>{vehicle.model}</span>
             <span>Next Service Date</span>
            </div>
            <div className="text mx-4">
              <span>{vehicle.year}</span>

              <div className="flex gap-18 mt-6">
                <span>Insurance Company</span>
                <span>Insurance Expiry</span>
              </div>
            </div>
          </div>
          <div className="img mt-15 border w-[90%] h-64 mx-4">
            <Image 
            src="/logoVeh.jpg" 
            alt='vehiclePic'
            width={200}
            height={200}
            className='w-full h-full'
            />
          </div>
        </div>
        <div className="right w-full">
          <div className="text">
            <span>Millage History</span>
            <div className="border h-40 w-[96%] mt-1.5 border-black">
              {/* Add millage history details here */}
            </div>
          </div>

          <div className="text mt-15">
            Notes History
            <div className="border h-40 w-[96%] mt-1.5 border-black">
              {/* Add notes history details here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
