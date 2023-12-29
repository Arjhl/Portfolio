import Image from "next/image";
import React from "../../public/react.svg";
import Next from "../../public/next.svg";
import tailwind from "../../public/tailwind-svgrepo-com.svg";
import express from "../../public/express.svg";
import node from "../../public/node-svgrepo-com.svg";
import js from "../../public/js.svg";
import ts from "../../public/ts-logo-128.svg";
import cpp from "../../public/cpp.svg";
import python from "../../public/python-svgrepo-com.svg";
import java from "../../public/java.svg";
import kotlin from "../../public/kotlin-svgrepo-com.svg";
import git from "../../public/git-svgrepo-com.svg";
import github from "../../public/github-142-svgrepo-com.svg";
import prisma from "../../public/prisma-svgrepo-com.svg";
import mysql from "../../public/mysql-svgrepo-com.svg";
import post from "../../public/postgresql-icon.svg";
import mongo from "../../public/mongo-svgrepo-com.svg";

const About = () => {
  return (
    <div className=" overflow-scroll aboutGrid no-scrollbar relative flex flex-col gap-2 sm:my-2 my-1">
      <p className="sm:text-base aboutdescription text-sm">
        I&apos;m a fullstack dev , building websites with tools like React and
        Node.js. I&apos;ve also tinkered with Android development and Web3.
        Lately, I&apos;ve been intrigued by Machine Learning and LLMs.
      </p>

      <div className="flex justify-start gap-2 items-center aboutdescription">
        <h1 className="text-sm sm:text-base  font-bold mr-2 ">Frameworks : </h1>
        <Image alt="react" src={React} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="next" src={Next} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image
          alt="Tailwind"
          src={tailwind}
          className=" sm:h-6 sm:w-6 w-5 h-5"
        />
        <Image
          alt="express"
          src={express}
          className=" sm:h-6 sm:w-6 w-5 h-5 "
        />
        <Image alt="node" src={node} className=" sm:h-6 sm:w-6 w-5 h-5" />
      </div>
      <div className="flex justify-start gap-2 items-center aboutdescription">
        <h1 className="text-sm sm:text-base font-bold mr-2">Languages : </h1>
        <Image alt="js" src={js} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="ts" src={ts} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="python" src={python} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="kotlin" src={kotlin} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="cpp" src={cpp} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="java" src={java} className=" sm:h-6 sm:w-6 w-5 h-5" />
      </div>
      <div className="flex justify-start gap-2 items-center aboutdescription">
        <h1 className="text-sm sm:text-base font-bold mr-2">Tools : </h1>
        <Image alt="git" src={git} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="github" src={github} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="prisma" src={prisma} className=" sm:h-6 sm:w-6 w-5 h-5" />
      </div>
      <div className="flex justify-start gap-2 items-center aboutdescription">
        <h1 className="text-sm sm:text-base font-bold mr-2">Databases : </h1>
        <Image alt="mysql" src={mysql} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="postgres" src={post} className=" sm:h-6 sm:w-6 w-5 h-5" />
        <Image alt="mongo" src={mongo} className=" sm:h-6 sm:w-6 w-5 h-5" />
      </div>
    </div>
  );
};

export default About;
