import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import { ResponsiveLink } from "../components/ResponsiveLink";
import { EmailIcon } from "../icons/Email";
import { GithubIcon } from "../icons/Github";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(atob("bWFpbHRvOmRjaGFkcmFhQGdtYWlsLmNvbQ=="));
  }, []);
  return (
    <Div100vh className="flex items-center justify-center">
      <div className="max-w-lg select-none mx-4 space-y-2">
        <div className="font-head font-bold text-2xl">
          Hi, I&apos;m Dalai Chadraa.
        </div>
        <p>
          I graduated from the University of Washington in 2021. I&apos;m
          looking for an internship or a job.
        </p>
        <p>
          I&apos;m interested in backend and frontend development. I like using
          React for the frontend and Node.js for the backend. I like using
          TypeScript. I enjoy solving puzzles.
        </p>
        <div className="inline-flex space-x-2">
          <ResponsiveLink
            className="flex items-center px-1 py-0.5"
            href="https://github.com/auoie"
          >
            <GithubIcon width={20} height={20} className="mr-1" /> GitHub
          </ResponsiveLink>
          <ResponsiveLink
            className="flex items-center px-1 py-0.5"
            href={email}
          >
            <EmailIcon width={20} height={20} className="mr-1" /> Email
          </ResponsiveLink>
        </div>
      </div>
    </Div100vh>
  );
};

export default Home;
