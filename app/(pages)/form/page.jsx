import Divider from "@/app/components/divider";
import EasyApply from "./components/easy-apply";
import PersonalInfo from "./components/personal-info";
import Experience from "./components/experience";
import EducationInformation from "./components/education-info";
import Profile from "./components/profile";
import Resume from "./components/resume";
import Message from "./components/message";
import Hero from "./components/hero";
import Button from "@/app/components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="container flex w-full flex-col gap-y-10 py-16">
        <EasyApply />
        <Divider />
        <PersonalInfo />
        <Divider />
        <Experience />
        <Divider />
        <EducationInformation /> 
        <Divider />
        <Profile />
        <Divider />
        <Resume />
        <Divider />
        <Message />
        <Button />
      </div>
    </div>
  );
}
