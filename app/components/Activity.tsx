"use client";
import VSLogo from "../../public/vscode-svgrepo-com.svg";
import spotifyLogo from "../../public/spotifyLogo.svg";
import Image from "next/image";
import valoLogo from "../../public/Valorant.svg";
import offline from "../../public/offline.svg";
import ytLogo from "../../public/youtube.svg";
import coffeeLogo from "../../public/coffee-svgrepo-com.svg";

type proptypes = {
  active: String;
  activity: Array<any>;
};

function calculateElapsedTime(timestamp: number): string {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - timestamp;

  // Convert elapsed time to a human-readable format
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
}

async function Activity(props: proptypes) {
  console.log(props.activity, props.active);
  let imageToDisplayed: any;
  let verb;

  if (props.activity.length == 0) {
    imageToDisplayed = coffeeLogo;
  } else if (props.activity[0].name == "YouTube") {
    verb = "Watching";
    imageToDisplayed = ytLogo;
  } else if (props.activity[0].name == "Spotify") {
    verb = "🎧 Listening to";
    imageToDisplayed = spotifyLogo;
  } else if (
    props.activity[0].name == "Visual Studio Code" ||
    props.activity[0].name == "Code"
  ) {
    verb = "👩‍💻";
    imageToDisplayed = VSLogo;
  } else if (props.activity[0].name == "VALORANT") {
    imageToDisplayed = valoLogo;
    verb = "Playing";
  } else if (props.active == "online") {
    imageToDisplayed = coffeeLogo;
  }

  return (
    <div>
      {props.active == "online" && props.activity.length == 0 && (
        <div className="flex justify-center items-center gap-2">
          <h1 className=" text-xl sm:text-3xl text-center secondaryhead ">
            Online
          </h1>
          <Image
            src={imageToDisplayed}
            alt="Current activity"
            className="h-10 w-10"
          />
        </div>
      )}

      {props.active == "offline" && (
        <div className="flex justify-center items-center gap-2">
          <h1 className=" text-xl sm:text-3xl text-center secondaryhead ">
            Offline
          </h1>
          <Image src={offline} alt="Current activity" className="h-10 w-10" />
        </div>
      )}

      {props.activity.length > 0 && (
        <>
          <h1 className=" max-w-sm  break-words sm:text-lg secondaryhead text-base">
            {verb + " " + props.activity[0]?.name}
          </h1>
          <h1 className=" w-5/6 break-words text-sm sm:text-base">
            {props.activity[0]?.details}
          </h1>
          <h1 className=" max-w-sm break-words text-sm">
            {props.activity[0]?.state}
          </h1>
          <p className=" text-xs ">
            {!(
              props.activity[0]?.timestamps.start == null ||
              props.activity[0]?.timestamps.start == undefined
            ) && calculateElapsedTime(props.activity[0]?.timestamps.start)}
          </p>
        </>
      )}

      {props.active == "online" && props.activity.length > 0 && (
        <div className=" absolute h-full w-full z-10 top-0 left-0 justify-end items-center flex p-5">
          <Image
            src={imageToDisplayed}
            alt="Current activity"
            className="sm:h-20 sm:w-20 h-10 w-10"
          />
        </div>
      )}
    </div>
  );
}

export default Activity;
