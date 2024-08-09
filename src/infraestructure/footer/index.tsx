import GithubLogo from "../../assets/Github.svg";
import LinkedInLogo from "../../assets/Linkedin.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-gray-400">
      <div className="flex justify-around items-center p-5">
        <GithubLogo className="w-10 h-10 text-primary-100" />
        <span>delarubialuciano@gmail.com</span>
        <LinkedInLogo className="w-10 h-10 text-primary-100" />
      </div>
    </div>
  );
};
