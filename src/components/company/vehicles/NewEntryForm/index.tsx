"use client"
import Button from "@/components/UI/buton";
import Input from "@/components/UI/input";
import TextArea from "@/components/UI/textarea";
const Entryform = () => {

  return (
    <div className=" z-50">
      <div className="bg-whiten h-screen w-96 ">
        <h1 className="uppercase font-semibold text-center pt-2 0 text-[20px]">
          New Vehicle
        </h1>

        <div className="flex w-full mt-5">
          <form
            action=""
            className="  gap-y-1 flex flex-col h-[32rem] w-80 m-auto"
          >
            <div className="mb-1.5 ">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="License Plate"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="Make"
              />{" "}
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="Model"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime "
                id=""
                type="text"
                placeholder="Year"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="Lats Service Date"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8 input-anime"
                id=""
                type="text"
                placeholder="Model"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="Insurance Company"
              />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8 input-anime"
                id=""
                type="text"
                placeholder="Model"
              />
            </div>

            <div className="mb-1.5">
              <label
                className="block font-light mx-4 text-gray-900  my-3 text-base"
                htmlFor="file_input"
              >
                Upload Vehicle Image
              </label>
              <Input className="h-12" id="" type="file" placeholder="Model" />
            </div>

            <div className="mb-1.5">
              <Input
                className="h-8  input-anime"
                id=""
                type="text"
                placeholder="Current Millage"
              />
            </div>

            <TextArea className="h-30   input-anime" />
            <Button className="mx-4 my-0.5">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Entryform;
