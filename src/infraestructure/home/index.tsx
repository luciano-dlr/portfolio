import BackgroundSvg from "../../assets/imagenrara.svg";
import "./index.css";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full flex flex-col justify-center items-center sm:py-82 py-80"
    >
      {/* <BackgroundSvg className="absolute h-full -z-10 " /> */}
      <BackgroundSvg className="absolute w-full h-full bg-repeat -z-10 filter dark:invert-[.80] dark:hue-rotate-180 dark:bg-[#737373] bg-white opacity-80 dark:opacity-100 transition-opacity duration-30" />

      <div className="">
        <h1 className="p-2 sm:text-6xl text-3xl font-semibold tracking-tight typing text-primary-100 dark:text-indigo-300">
          Hey, I'm Luciano de la Rubia
        </h1>
      </div>
      <div className="py-1">
        <h2 className="p-2 text-3xl font-medium dark:text-secondary-100">
          Frontend Developer
        </h2>
      </div>
      <div className="w-[350px] md:w-[600px] text-center">
        <p className="py-2 font-normal text-lg dark:text-secondary-100">
          Passionate Developer with extensive experience in crafting and
          optimizing applications across web and mobile platforms.
        </p>
      </div>
      <div className="p-3 pt-20 text-xl font-semibold">
        <a href="#contact">
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 dark:hover:bg-slate-800 shadow-lg shadow-indigo-500/50 dark:shadow-zinc-800  dark:shadow-md rounded-md bg-indigo-500 dark:bg-indigo-900 dark:text-secondary-100 text-white text-lg py-1 px-10 my-1 mx-20">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};
