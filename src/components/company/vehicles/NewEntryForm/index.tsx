"use client"
import Button from "@/components/UI/buton";
import Input from "@/components/UI/input";
const Entryform = () => {

  return (
    <div className="bg-whiten h-screen w-96">
      <h1 className="uppercase font-semibold text-center pt-2 0 text-[20px]">
        New Vehicle
      </h1>

      <div className="flex w-full mt-5">
        <form action="" className="   h-[32rem] w-80 m-auto">
          <div className="mb-3 ">
            <Input className="" id="" type="text" placeholder="License Plate" />
          </div>

          <div class="mb-3">
            <Input className="" id="" type="text" placeholder="Make" />{" "}
          </div>

          <div class="mb-1.5">
            <Input className="" id="" type="text" placeholder="Model" />
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Year"
            ></input>
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Last Service Date"
            ></input>
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Next Service Date"
            ></input>
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Insurance Company"
            ></input>
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Incurance Expirey"
            ></input>
          </div>

          <div class="mb-1.5">
            <label
              class="block font-light mx-4 text-gray-900  my-3 text-base"
              for="file_input"
            >
              Upload Vehicle Image
            </label>
            <input
              class="block w-70 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id=""
              type="file"
            ></input>
          </div>

          <div class="mb-1.5">
            <input
              class="shadow appearance-none border rounded h-7 w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=""
              type="text"
              placeholder="Current Millage"
            ></input>
          </div>

          <textarea
            id=""
            rows="4"
            class="shadow appearance-none border rounded w-70 py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Notes"
          ></textarea>
          <Button className="mx-4 my-0.5">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Entryform;
