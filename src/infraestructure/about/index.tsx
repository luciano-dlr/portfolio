import { SkillsLogo } from "./components/skillsLogo/SkillsLogo";
import { History } from "./components/history/HistoryLinear";
import ReactLog from "../../assets/react.svg";
import TypescriptLogo from "../../assets/TypescriptLogo.svg";
import TailwindcssLogo from "../../assets/TailwindcssLogo.svg";
import JavascriptLogo from "../../assets/JavascriptLogo.svg";
import HtmlLogo from "../../assets/Html5Logo.svg";
import AngularLogo from "../../assets/AngularLogo.svg";
import GitLogo from "../../assets/GitLogo.svg";
import ZustandLogo from "../../assets/ZustandLogo.svg";
import FirebaseLogo from "../../assets/FirebaseLogo.svg";
import SassLogo from "../../assets/SassLogo.svg";
import FigmaLogo from "../../assets/FigmaLogo.svg";
import CssLogo from "../../assets/CssLogo.svg";

export const About = () => {
  return (
    <div id="about" className="flex flex-col items-center dark:bg-neutral-500">
      <div className="flex flex-col justify-center items-center mt-20 ">
        <h1 className="text-4xl font-semibold dark:text-white">About Me</h1>
        <div className="w-12 h-1 my-2 bg-indigo-600 rounded-lg dark:bg-indigo-300" />
        <div className="w-[350px] md:w-[600px] text-center py-4">
          <p className="py-2 text-lg font-light dark:text-secondary-100">
            I'm a developer with a strong focus on React, bringing extensive
            experience in both web and mobile development. I specialize in React
            Native and have a deep background in web development using libraries
            for route management, global state handling, and API integration.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full py-10 sm:px-8 sm:mx-8 items-start">
        <div className="flex flex-col sm:px-20 py-2 items-center">
          <h1 className="py-12 text-4xl font-semibold  text-center dark:text-white">
            History
          </h1>
          <History />
        </div>
        <div className="flex flex-col sm:px-20 py-2 h-full min-h-full">
          <h1 className="py-12 text-4xl font-semibold text-center dark:text-white">
            My Skills
          </h1>
          <div className="grid h-full min-h-full ">
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-5 pb-32  gap-1 py-4 h-full">
              <SkillsLogo
                title="React"
                logo={
                  <ReactLog className="w-20 h-20 drop-shadow-lg flex justify-center items-center" />
                }
              />
              <SkillsLogo
                title="Angular"
                logo={<AngularLogo className="w-20 h-20 drop-shadow-md" />}
              />
              <SkillsLogo
                title="Typescript"
                logo={<TypescriptLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Javascript"
                logo={<JavascriptLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Tailwindcss"
                logo={<TailwindcssLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Html"
                logo={<HtmlLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Sass"
                logo={<SassLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Css"
                logo={<CssLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Firebase"
                logo={<FirebaseLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Git"
                logo={<GitLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Zustand"
                logo={<ZustandLogo className="w-20 h-20 drop-shadow-lg" />}
              />
              <SkillsLogo
                title="Figma"
                logo={<FigmaLogo className="w-20 h-20 drop-shadow-lg" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
