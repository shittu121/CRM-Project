"use client";
import React, { useState } from 'react';
import Button from '@/components/UI/buton'
import Entryform from '@/components/company/vehicles/NewEntryForm/index';
import Editform from '@/components/company/vehicles/EditEntryForm/index';
import ViewVehicleform from '@/components/company/vehicles/ViewVehicle/index'

interface Vehicle {
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  servicedRequired: boolean;
  notes: string;
  isDisabled: boolean;
}

const initialVehicles: Vehicle[] = [
  {
    licensePlate: "ABZ 123",
    make: "Test Make",
    model: "Test Model",
    year: 2024,
    servicedRequired: true,
    notes: "This is a note",
    isDisabled: false,
  },
  {
    licensePlate: "XYZ 456",
    make: "Another Make",
    model: "Another Model fgnhhnh",
    year: 2023,
    servicedRequired: false,
    notes: "",
    isDisabled: false,
  },
  // Add more vehicle objects as needed
];


export default function VehiclePage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [isEntryFormVisible, setIsEntryFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isViewVehicleFormVisible, setIsViewVehicleFormVisible] = useState(false);
  const [editVehicleIndex, setEditVehicleIndex] = useState<number | null>(null);
  const [viewVehicleIndex, setViewVehicleIndex] = useState<number | null>(null);

  function handleButtonNewEntry() {
    setIsEntryFormVisible(true);
  }

  function handleCloseForm() {
    setIsEntryFormVisible(false);
  }

  function handleButtonEditEntry(index: number) {
    setEditVehicleIndex(index);
    setIsEditFormVisible(true);
  }

  function handleCloseEditForm() {
    setIsEditFormVisible(false);
    setEditVehicleIndex(null);
  }

  function handleButtonViewVehicle(index: number) {
    setViewVehicleIndex(index);
    setIsViewVehicleFormVisible(true);
  }

  function handleCloseViewVehicle() {
    setIsViewVehicleFormVisible(false);
    setViewVehicleIndex(null);
  }

  const toggleDisable = (index: number) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle, i) =>
        i === index ? { ...vehicle, isDisabled: !vehicle.isDisabled } : vehicle
      )
    );
  };

  return (
    <div className="p-4">
      <div
        className={`absolute   right-0 top-0 z-99999 
        }`}
      >
        {isEntryFormVisible && (
          <>
            <div className=''>
              <Entryform />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 24 24"
                className="absolute top-2 ml-3 left-0"
                onClick={handleCloseForm}
                style={{ cursor: "pointer" }}
              >
                <path
                  fill="black"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </div>
          </>
        )}

        {isEditFormVisible && (
          <>
            <Editform vehicle={vehicles[editVehicleIndex!]} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="absolute top-3 ml-5 left-0"
              onClick={handleCloseEditForm}
              style={{ cursor: "pointer" }}
            >
              <path
                fill="black"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          </>
        )}

        {isViewVehicleFormVisible && (
          <div className="absolute right-19 top-3 bottom-3 z-99999">
            <ViewVehicleform vehicle={vehicles[viewVehicleIndex!]} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="absolute top-3 mr-5 right-0"
              onClick={handleCloseViewVehicle}
              style={{ cursor: "pointer" }}
            >
              <path
                fill="black"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          </div>
        )}
      </div>
      <h1 className="font-bold text-2xl -mt-2">Company Vehicles</h1>
      <div className="relative overflow-x-auto shadow-default  rounded-lg">
        <div className="pb-4 mt-4 bg-white dark:bg-gray-900 flex flex-col sm:flex-row justify-between">
          <Button
            onClick={handleButtonNewEntry}
            className="bg-btnColor hover:bg-emerald-light py-2 px-4 rounded-md  text-base font-medium border border-btnColor transition hover:opacity-90 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mx-2"
          >
            New Entry
          </Button>
          <div className="relative mt-4 sm:mt-0 mx-2 w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block border border-stroke p-2 text-black pl-10 text-sm outline-none focus:border-primary  border-gray-300 rounded-lg w-full sm:w-80  "
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs lg:text-sm bg-primary gap-4 lg:gap-0 text-white ">
            <tr>
              <th scope="col" className="pl-4 pr-4 py-3 whitespace-nowrap">
                License Plate
              </th>
              <th scope="col" className="pl-6 py-3">
                Make
              </th>
              <th scope="col" className="pl-6 py-3">
                Model
              </th>
              <th scope="col" className="pl-6 py-3">
                Year
              </th>
              <th
                scope="col"
                className="py-3 px-3 text-center whitespace-nowrap"
              >
                Serviced Required
              </th>
              <th scope="col" className="pl-6 py-3">
                Notes
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr
                key={index}
                className={`bg-white border-b border-stroke hover:bg-gray-50 ${
                  vehicle.isDisabled ? "opacity-50" : ""
                }`}
              >
                <th
                  scope="row"
                  className={`px-4 py-4 font-medium text-gray-900 whitespace-nowrap  ${
                    vehicle.isDisabled ? "text-gray-500" : ""
                  }`}
                >
                  {vehicle.licensePlate}
                </th>
                <td
                  className={`pl-6 py-4 font-medium  whitespace-nowrap overflow-hidden text-ellipsis max-w-30 ${
                    vehicle.isDisabled ? "text-gray-500" : ""
                  }`}
                >
                  {vehicle.make}
                </td>
                <td
                  className={`pl-6 py-4 font-medium  whitespace-nowrap overflow-hidden text-ellipsis max-w-30  ${
                    vehicle.isDisabled ? "text-gray-500" : ""
                  }`}
                >
                  {vehicle.model}
                </td>
                <td
                  className={`pl-6 py-4 font-medium  whitespace-nowrap  ${
                    vehicle.isDisabled ? "text-gray-500" : ""
                  }`}
                >
                  {vehicle.year}
                </td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={vehicle.servicedRequired}
                      readOnly
                      disabled={vehicle.isDisabled}
                    />
                    <label htmlFor={`checkbox-${index}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="pl-8 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill={vehicle.notes ? "#ff8585" : "#000000"}
                      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 319.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-.05a21.74 21.74 0 1 1 43.44 0Z"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 grid grid-cols-4 gap-8 lg:gap-3">
                  <Button
                    className="bg-btnColor px-6.5 hover:bg-emerald-light rounded-md text-xs lg:text-sm font-medium border border-btnColor transition hover:opacity-90 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mr-3 col-span-2 lg:col-span-1"
                    onClick={() => handleButtonEditEntry(index)}
                    disabled={vehicle.isDisabled}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-600 px-6.5 hover:bg-red-700 rounded-md text-white text-xs lg:text-sm font-medium border border-red-600 transition hover:opacity-90 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mr-3 col-span-2 lg:col-span-1"
                    disabled={vehicle.isDisabled}
                  >
                    Delete
                  </Button>
                  <Button
                    className="bg-green-600 px-6.5 hover:bg-green-700 rounded-md text-white text-xs lg:text-sm font-medium border border-green-600 transition hover:opacity-90 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mr-3 col-span-2 lg:col-span-1"
                    onClick={() => handleButtonViewVehicle(index)}
                    disabled={vehicle.isDisabled}
                  >
                    View
                  </Button>
                  <Button
                    className={`rounded-md text-white col-span-2 px-6.5 lg:col-span-1 text-xs lg:text-sm font-medium border transition ${
                      vehicle.isDisabled
                        ? "bg-gray-500 border-gray-500"
                        : "bg-red-600 border-red-600 hover:bg-red-700"
                    } flex items-center justify-center`}
                    onClick={() => toggleDisable(index)}
                  >
                    {vehicle.isDisabled ? "Enable" : "Disable"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}