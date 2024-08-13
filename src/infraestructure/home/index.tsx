import BackgroundSvg from "../../assets/bf-triangule.svg";
import "./index.css";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full flex flex-col justify-center items-center bg-red sm:py-82 py-80"
    >
      <BackgroundSvg className="absolute h-full -z-10" />
      <div>
        <h1 className="p-2 sm:text-6xl text-3xl font-semibold tracking-tight typing text-primary-100 ">
          Hey, I'm Luciano de la Rubia
        </h1>
      </div>
      <div className="py-1">
        <h2 className="p-2 text-3xl font-medium">Frontend Developer</h2>
      </div>
      <div className="w-[350px] md:w-[600px] text-center">
        <p className="py-2 font-normal text-lg">
          A Result-Oriented Web Developer building and managing Websites and
          Applications that leads to the success of the overall product
        </p>
      </div>
      <div className="p-3 pt-20 text-xl font-semibold">
        <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 shadow-lg shadow-indigo-500/50 rounded-md bg-indigo-500 text-white text-lg py-1 px-10 my-1 mx-20">
          Contact
        </button>
      </div>
    </div>
  );
};
