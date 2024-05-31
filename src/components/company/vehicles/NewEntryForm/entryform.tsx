import Button from "@/components/UI/buton";
import Input from "@/components/UI/input/index"
import Textarea from "@/components/UI/textarea/index"


const Entryform = () => {

  return (
    <div className='bg-gray-300 h-screen w-96'>
      <h1 className='uppercase font-semibold text-center pt-2 text-[20px]'>New Vehicle</h1> 

      <div className="flex w-full">
        <form action="" className="bg-white shadow-md rounded h-[32rem] w-80 m-auto">
            <div className="mb-1.5 mt-2">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="License Plate" />
            </div>

            <div className="mb-1.5">
               <Input className="rounded h-7 w-[277px] py-2 px-2 mx-4 " id="" type="text" placeholder="Make"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Model"/>
            </div>
            
            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Year"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Last Service Date"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Next Service Date"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Insurance Company"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Incurance Expirey"/>
            </div>

            <div className="mb-1.5">
               <label className="block text-[11px] font-light mx-4 text-gray-900 dark:text-white" htmlFor="file_input">Upload Vehicle Image</label>
               <input className="block w-[277px] h-7 mx-4 bg-transparent border  rounded-md focus:outline-none focus:ring-2 text-white focus:ring-primary  disabled:bg-gray-100" id="" type="file"/>
            </div>

            <div className="mb-1.5">
               <Input className="h-7 w-[277px] py-2 px-2 mx-4" id="" type="text" placeholder="Current Millage"/>
            </div>

            <Textarea id="" rows={4} className="shadow appearance-none border rounded w-[277px] py-2 px-2 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Notes"/>
            <Button className="mx-4 my-0.5">Submit</Button>
        </form>
      </div>
    </div>
    
  );
};

export default Entryform;
