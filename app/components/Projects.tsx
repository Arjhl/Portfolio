import Link from "next/link";
import Image from "next/image";

const projectsList: Array<any> = [
  {
    ProjectName: "CipherJournal",
    Description:
      "A Digital Diary which uses AES and the keys are controlled/stored by the users.",
    Picture:
      "https://utfs.io/f/7712b204-971e-4948-9c1e-3eb09fc645d3-b5u5r5.png",
    GithubLink: "https://github.com/Arjhl/Diary",
    liveLink: "https://cipherjournal.vercel.app/",
    Techstack: [
      "Next.js",
      "Prisma",
      " PlanetScale",
      "Clerk",
      "BlockNote",
      "Uploadthing",
    ],
  },

  {
    ProjectName: "Messenger App",
    Description: "A sample messaging app using Socket.io.",
    GithubLink: "https://github.com/Arjhl/Socket-Web-Application",
    Techstack: ["Node", "MongoDb", "Socket.io", "React.js", "Multer"],
  },
  {
    ProjectName: "Decentralised Twiiter Clone",
    Description: "A sample dapp using ethers.js/hardhat.",
    GithubLink: "https://github.com/Arjhl/twittercloneDapp",
    Techstack: ["Node", "Ethers.js", "hardhat", "React.js", "Alchemy"],
  },
  {
    ProjectName: "Enigma'23 website",
    Description: "Website for Engima'23 event",
    GithubLink: "https://github.com/Arjhl/enigma23",
    liveLink: "https://enigma23.in",
    Picture: "https://enigma23.in/assets/logo_enigma-ea3d92e0.png",
    Techstack: ["React"],
  },

  {
    ProjectName: "Decentralised Twiiter Clone",
    Description: "A sample dapp using ethers.js/hardhat.",
    GithubLink: "https://github.com/Arjhl/twittercloneDapp",
    Techstack: ["Node", "Ethers.js", "hardhat", "React.js", "Alchemy"],
  },
  {
    ProjectName: "2048 Game",
    Description: "Created a clone of the famous 2048 game.",
    GithubLink: "https://github.com/Arjhl/2048",
    liveLink: "https://project-3014428966469136320.web.app/",
    Techstack: ["React"],
  },
  {
    ProjectName: "Enigma'22 website",
    Description: "Website for Engima'22 event built using basic web tech.",
    GithubLink: "https://github.com/Arjhl/Enigma22",
    liveLink: "https://arjhl.github.io/Enigma22/",
    Techstack: ["HTML", "js", "css"],
  },

  {
    ProjectName: "Weather Diary (Ongoing)",
    Description:
      "A sample android app using Firestore for both images and content.",
    GithubLink: "",
    Techstack: ["Java", "Firestore"],
  },
  {
    ProjectName: "SmoothPay",
    Description:
      "A sample android app using Kotlin which is a upi contact-book.",
    GithubLink: "https://github.com/Arjhl/SmoothPay",
    Techstack: ["Kotlin", "Android File System"],
  },
  {
    ProjectName: "MalnadTechnicalClucWebsite",
    Description: "Website for The Malnad Technical Club",
    GithubLink: "https://github.com/Arjhl/ClubWebsite",
    liveLibk: "https://arjhl.github.io/ClubWebsite/",
    Picture: "https://arjhl.github.io/ClubWebsite/images/mtclogo.png",
    Techstack: ["HTML", "Javascript", "css"],
  },
];

const Projects = () => {
  return (
    <div className="overflow-scroll no-scrollbar projectGrid">
      {projectsList.map((p, index) => {
        return (
          <div className="projectCard my-2 py-3 px-2" key={index}>
            <div className=" flex gap-2 my-1">
              {p.Picture !== undefined && (
                <img
                  alt={p.ProjectName}
                  src={p.Picture}
                  className="h-6 w-6 projectImage"
                />
              )}

              {p.Picture === undefined && (
                <img
                  alt={p.ProjectName}
                  src="https://images.unsplash.com/photo-1603665143615-4b7cafb5366b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-6 w-6 projectImage"
                />
              )}
              <h1 className="generalHead">{p.ProjectName}</h1>
            </div>
            <p className="description text-sm max-w-sm break-words">
              {p.Description}
            </p>

            <div className="my-2 flex gap-4">
              {p.liveLink !== undefined && (
                <Link href={p?.liveLink} className="projectLinks">
                  Live 🔗
                </Link>
              )}
              <Link href={p.GithubLink} className="projectLinks">
                Github 🔗
              </Link>
            </div>

            <div className="flex gap-2 text-xs sm:my-2 my-1 techstack">
              {p.Techstack.map((t: any, i: any) => {
                return <p key={i}>{t}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
