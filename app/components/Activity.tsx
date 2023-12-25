import VSLogo from "../../public/vscode-svgrepo-com.svg";
import spotifyLogo from "../../public/spotifyLogo.svg";
import Image from "next/image";
import valoLogo from "../../public/Valorant.svg";
import offline from "../../public/offline.svg";
import Twitter from "../../public/Twitter X.svg";
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

  if (props.activity.length == 0) {
    imageToDisplayed = coffeeLogo;
  } else if (props.activity[0].name == "YouTube") {
    imageToDisplayed = ytLogo;
  } else if (props.activity[0].name == "Spotify") {
    imageToDisplayed = spotifyLogo;
  } else if (
    props.activity[0].name == "Visual Studio Code" ||
    props.activity[0].name == "Code"
  ) {
    imageToDisplayed = VSLogo;
  } else if (props.activity[0].name == "VALORANT") {
    imageToDisplayed = valoLogo;
  } else if (props.active == "online") {
    imageToDisplayed = coffeeLogo;
  }

  return (
    <div className="relative">
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
          <h1 className=" max-w-sm  break-words sm:text-lg font-bold secondaryhead text-base">
            {props.activity[0]?.nam}
          </h1>
          <h1 className=" max-w-sm  break-words text-sm sm:text-base font-semibold">
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
        <Image
          src={imageToDisplayed}
          alt="Current activity"
          className=" absolute sm:top-0 z-10 sm:h-20 sm:w-20 h-8 w-8 bottom-0 right-0 "
        />
      )}
    </div>
  );
}

export default Activity;
