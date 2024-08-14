import GithubLogo from "../../assets/githubLogo.svg";
import LinkedInLogo from "../../assets/LinkedIn-Logo.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-[#f8f8f8] sm:px-28 px-4 py-5 ">
      <div className="flex flex-col sm:flex-row justify-between border-b p-5 ">
        <div>
          <h2 className="font-bold text-base">Luciano de la Rubia</h2>
          <div className="w-[350px] md:w-[600px]">
            <p className="py-2 font-normal text-base">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-2 ">
          <h2 className="font-bold text-base">Social</h2>
          <div className="flex sm:justify-between items-center gap-2">
            <a
              href="https://www.linkedin.com/in/luciano-de-la-rubia/"
              target="_blank"
            >
              <LinkedInLogo className="w-8 h-8 text-primary-100" />
            </a>
            <a href="https://github.com/luciano-dlr" target="_blank">
              <GithubLogo className="w-8 h-8 text-primary-100" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center pt-5 font-normal text-xs">
        © Copyright 2024 - Made by Luciano de la Rubia
      </p>
    </div>
  );
};
