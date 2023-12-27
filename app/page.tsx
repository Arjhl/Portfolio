import NameCard from "./components/NameCard";
import PhotoCard from "./components/PhotoCard";
import Activity from "./components/Activity";
import About from "./components/About";
import Projects from "./components/Projects";
import Image from "next/image";
import Degree from "../public/degree.svg";
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

export default async function Home() {
  console.log();
  let data: any = null;
  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${process.env.NEXT_USER_ID}`,
      {
        cache: "no-cache",
      }
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="custom">
        <div className="item item-1">
          <NameCard />
        </div>
        <div className="item item-2">
          <PhotoCard />
        </div>
        <div
          className={`item item-3 relative ${
            data.data.discord_status === "online" ? "accentGreen" : "accentRed"
          }`}
        >
          <Activity
            active={data.data.discord_status}
            activity={data.data.activities}
          />
        </div>
        <div className="item item-4">
          <h1 className=" text-xl generalHead text-gray-300 sticky">About</h1>
          <About />
        </div>
        <div className="item item-5">
          <h1 className=" text-xl generalHead text-gray-300 sticky">
            Projects
          </h1>
          <Projects />
        </div>
        <div className="item item-6 relative">
          <h1 className="text-base sm:text-xl sticky">Education</h1>
          <p className="text-sm py-2">
            <span className="secondaryhead">Bachelor of Engineering</span> in
            Information Science [2020-24] <br />
            CGPA : 8.2 <br />
            Malnad College of Engineering,Hassan.
          </p>
          <Image
            alt="Education"
            src={Degree}
            className="h-20 w-20 absolute bottom-2 right-2 opacity-20"
          />
        </div>
        <div className="item item-7">
          <ResumeButton />
        </div>
        <div className="item item-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}
