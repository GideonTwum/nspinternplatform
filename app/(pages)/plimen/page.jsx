

import Apply from "./components/fir";
import Residence from "./components/residence";
import Region from "./components/region";
import Instituition from "./components/instituition";
import Specification from "./components/specification";
import Uploads from "./components/UploadFile";
import Submit from "./../../components/Donebutton";

import Previous from "./../../components/backbutton";




export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex w-full flex-col gap-y-10 py-16">
        <Apply />
        <Residence />
        <Region />
        <Instituition />
        <Specification />
        <Specification />
        <Uploads />
        <Submit />
        <Previous/>
      </div>
    </div>
  );
}
