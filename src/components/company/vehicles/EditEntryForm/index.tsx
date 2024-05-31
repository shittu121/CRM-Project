import React from 'react'
import Button from "@/components/UI/buton";


const Editform = () => {
  return (
    <div className='bg-gray-300 h-screen w-96'>
      <h1 className='uppercase font-semibold text-center pt-2 text-[20px]'>Edit Vehicle</h1> 

      <div className="flex w-full">
        <form action="" className="bg-white shadow-md rounded h-[31rem] w-80 m-auto mt-3">
            <div class="mb-2 mt-4">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="License Plate"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Make"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Model"></input>
            </div>
            
            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Year"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Last Service Date"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Next Service Date"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Insurance Company"></input>
            </div>

            <div class="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Incurance Expirey"></input>
            </div>

            <div className="mb-2">
               <input class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Current Millage"></input>
            </div>

            <textarea id="" rows="4" class="shadow appearance-none border rounded w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Notes"></textarea>
            <Button className="mx-4 my-1">Update</Button>
        </form>
      </div>
    </div>
  )
}

export default Editform
