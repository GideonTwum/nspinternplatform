
import Hero from "../form/components/hero";
import Apply from "./components/fir";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero/>
      <div className="container flex w-full flex-col gap-y-10 py-16">
        <Apply />
        
      </div>
    </div>
  );
}
