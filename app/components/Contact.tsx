"use client";
import twitter from "../../public/Twitter X.svg";
import gmail from "../../public/gmail-svgrepo-com.svg";
import github from "../../public/github-142-svgrepo-com.svg";
import linkedin from "../../public/linkedin-color-svgrepo-com.svg";
import Image from "next/image";

const Contact = () => {
  const redirectToSocial = (link: string) => {
    window.location.replace(link);
  };

  //   onClick={() => {
  //     navigator.clipboard.writeText("bruh@gmail.com");
  //   }}

  return (
    <>
      <h1 className=" generalHead text-sm text-gray-300 pb-2">Socials :</h1>
      <div className="flex justify-start gap-3">
        <Image alt="Gmail" src={gmail} className="social-icon" />
        <Image alt="Twitter" src={twitter} className="social-icon" />
        <Image alt="github" src={github} className="social-icon" />
        <Image alt="linkedin" src={linkedin} className="social-icon" />
      </div>
    </>
  );
};

export default Contact;
