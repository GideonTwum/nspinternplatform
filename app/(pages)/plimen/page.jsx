

import Apply from "./components/fir";
import Residence from "./components/residence";
import Region from "./components/region";
import Instituition from "./components/instituition";

import Uploads from "./components/UploadFile";
import Submit from "../../components/submitbutton/Donebutton";

import Previous from "@/app/components/submitbutton";
import City from "./components/residence";




export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex w-full flex-col gap-y-10 py-16">
        <Apply />

        <Region />
        <Instituition />
        <City />
        <Uploads />
        <div className="flex w-full  ">
           <Previous />
           <Submit />
          </div>
      </div>
    </div>
  );
}
