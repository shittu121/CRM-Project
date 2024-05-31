import React from 'react';
import Button from "@/components/UI/buton";

interface Vehicle {
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  servicedRequired: boolean;
  notes: string;
  isDisabled: boolean;
}

interface EditformProps {
  vehicle: Vehicle;
}

const Editform: React.FC<EditformProps> = ({ vehicle }) => {
  return (
    <div className='bg-gray-300 h-screen w-96'>
      <h1 className='uppercase font-semibold text-center pt-2 text-[20px]'>Edit Vehicle</h1> 

      <div className="flex w-full">
        <form action="" className="bg-white shadow-md rounded h-[31rem] w-80 m-auto mt-3">
          <div className="mb-2 mt-4">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="License Plate"
              defaultValue={vehicle.licensePlate}
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Make"
              defaultValue={vehicle.make}
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Model"
              defaultValue={vehicle.model}
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Year"
              defaultValue={vehicle.year.toString()}
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Service Date"
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Next Service Date"
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Insurance Company"
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Insurance Expiry"
            />
          </div>

          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Current Mileage"
            />
          </div>

          <textarea
            rows={4}
            className="shadow appearance-none border rounded w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Notes"
            defaultValue={vehicle.notes}
          ></textarea>
          <Button className="mx-4 my-1">Update</Button>
        </form>
      </div>
    </div>
  );
};

export default Editform;
