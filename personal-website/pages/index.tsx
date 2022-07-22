import clsx from "clsx";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import { ResponsiveLink } from "../components/ResponsiveLink";
import { EmailIcon } from "../icons/Email";
import { GithubIcon } from "../icons/Github";
import { LinkedIn } from "../icons/LinkedIn";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(atob("bWFpbHRvOmRjaGFkcmFhQGdtYWlsLmNvbQ=="));
  }, []);
  return (
    <Div100vh
      className={clsx(
        "flex items-center justify-center"
      )}
    >
      <div className="max-w-lg space-y-2 selection:dark:bg-zinc-800 selection:bg-zinc-200 p-6 rounded-xl">
        <div className="font-head font-bold text-2xl">
          Hi, I&apos;m Dalai Chadraa.
        </div>
        {/* <p>
          I graduated from the University of Washington in 2021. I&apos;m
          looking for an internship or a job.
        </p> */}
        <p>
          I&apos;m a fan of statically typed languages like TypeScript and Go. I
          like using React for building frontends and Node.js for scripting
          tasks. At the moment, I&apos;m trying to learn more about backend
          development. In particular, I&apos;ve been learning Terraform and AWS.
        </p>
        <div className="inline-flex space-x-1">
          <ResponsiveLink
            className="flex items-center h-8 w-8 justify-center"
            href="https://github.com/auoie"
          >
            <GithubIcon width={20} height={20} />
          </ResponsiveLink>
          <ResponsiveLink
            className="flex items-center h-8 w-8 justify-center"
            href={email}
          >
            <EmailIcon width={20} height={20} />
          </ResponsiveLink>
          <ResponsiveLink
            className="flex items-center h-8 w-8 justify-center"
            href={"https://www.linkedin.com/in/dalai-chadraa/"}
          >
            <LinkedIn width={20} height={20} />
          </ResponsiveLink>
        </div>
      </div>
    </Div100vh>
  );
};

export default Home;
