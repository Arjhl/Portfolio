// "use client";
import twitter from "../../public/Twitter X.svg";
import gmail from "../../public/gmail-svgrepo-com.svg";
import github from "../../public/github-142-svgrepo-com-black.svg";
import linkedin from "../../public/linkedin-color-svgrepo-com.svg";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
// import toast from "react-hot-toast";

const Contact = () => {
  // const redirectToSocial = (link: string) => {
  //   window.location.href = link;
  // };

  // const mailHandler = () => {
  //   // toast("Email Copied to Clipboard");
  //   toast.success("Email Copied to Clipboard.", {
  //     style: {
  //       padding: "16px",
  //       color: "#fff",
  //       backgroundColor: "#1DB954",
  //     },
  //     iconTheme: {
  //       primary: "#fff",
  //       secondary: "#5F5F5F",
  //     },
  //   });
  //   navigator.clipboard.writeText("arjunhl360@gmail.com");
  // };

  return (
    <>
      <h1 className=" generalHead text-sm text-gray-300 pb-2">Socials :</h1>
      <div className="flex justify-start gap-3">
        <Link href="mailto:arjunhl360@gmail.com" target="_blank">
          <Image alt="Gmail" src={gmail} className="social-icon" />
        </Link>

        <Link href="https://twitter.com/Arj_hl" target="_blank">
          <Image alt="Twitter" src={twitter} className="social-icon" />
        </Link>

        <Link href="https://github.com/Arjhl" target="_blank">
          <Image alt="github" src={github} className="social-icon" />
        </Link>

        <Link href="https://www.linkedin.com/in/arjhl/" target="_blank">
          <Image
            alt="linkedin"
            src={linkedin}
            className="social-icon"
            // onClick={redirectToSocial.bind(
            //   this,
            //   "https://www.linkedin.com/in/arjhl/"
            // )}
          />
        </Link>
        <Toaster />
      </div>
    </>
  );
};

export default Contact;
