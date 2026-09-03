import { SkillsLogo } from "./components/skillsLogo/SkillsLogo";
import { History } from "./components/history/HistoryLinear";
import NestJsLogo from "../../assets/nest-js.svg";
import DockerLogo from "../../assets/docker.svg";
import PostgresqlLogo from "../../assets/postgresql-icon.svg";
import MysqlLogo from "../../assets/mysql-icon.svg";
import MongodbLogo from "../../assets/mongodb-icon.svg";
import RedisLogo from "../../assets/redis-icon.svg";
import NodejsLogo from "../../assets/nodejs-icon.svg";
import ReactLog from "../../assets/react.svg";
import AngularLogo from "../../assets/AngularLogo.svg";
import TypescriptLogo from "../../assets/TypescriptLogo.svg";
import NetLogo from "../../assets/Microsoft_.NET_logo.svg";
import GitLogo from "../../assets/GitLogo.svg";
import FigmaLogo from "../../assets/FigmaLogo.svg";

export const About = () => {
  return (
    <div id="about" className="flex flex-col items-center dark:bg-neutral-500">
      <div className="flex flex-col justify-center items-center mt-20 ">
        <h1 className="text-4xl font-semibold dark:text-white">About Me</h1>
        <div className="w-12 h-1 my-2 bg-indigo-600 rounded-lg dark:bg-indigo-300" />
        <div className="w-[350px] md:w-[600px] text-center py-4">
          <p className="py-2 text-lg font-light dark:text-secondary-100">
            Full-Stack Developer specializing in backend architecture, scalable APIs (.NET/Node.js), and database systems. Frontend proficient (React/Angular) with expertise in state management and high-performance solutions.          </p>
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
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-5 pb-32 gap-1 py-4 h-full">
              <SkillsLogo title="React" logo={<ReactLog className="w-20 h-20 drop-shadow-lg" />} />
              <SkillsLogo title="Angular" logo={<AngularLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="NestJS" logo={<NestJsLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="TypeScript" logo={<TypescriptLogo className="w-20 h-20 drop-shadow-lg" />} />
              <SkillsLogo title=".NET" logo={<NetLogo className="w-20 h-20 drop-shadow-lg rounded-sm" />} />
              <SkillsLogo title="Node.js" logo={<NodejsLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="PostgreSQL" logo={<PostgresqlLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="MySQL" logo={<MysqlLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="MongoDB" logo={<MongodbLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="Redis" logo={<RedisLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="Docker" logo={<DockerLogo className="w-20 h-20 drop-shadow-md" />} />
              <SkillsLogo title="Git" logo={<GitLogo className="w-20 h-20 drop-shadow-lg" />} />
              {/* <SkillsLogo title="Figma" logo={<FigmaLogo className="w-20 h-20 drop-shadow-lg" />} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
