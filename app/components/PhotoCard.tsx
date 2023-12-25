import Image from "next/image";
import profile from "../../public/profile.gif";

const PhotoCard = () => {
  return (
    <div className="profile">
      <Image alt="Arj's Profile" className="profile_image" src={profile} />
    </div>
  );
};

export default PhotoCard;
