import "./index.css";
import WorkHistory from "./data";

export const History = () => {
  return (
    <div
      id="history"
      className="w-full flex justify-center flex-col items-center"
    >
      <div className="rounded w-full max-w-4xl">
        <div className="relative sm:border-l sm:pl-2 border-primary-100 dark:border-indigo-800 flex flex-col ">
          {WorkHistory.map((exp, index) => (
            <div key={index} className="sm:mb-10 sm:ml-4 flex items-start ">
              <div
                className={`absolute w-full sm:w-[20px] sm:h-[20px] bg-primary-100 dark:bg-indigo-800 rounded-full sm:-left-2.5 sm:border border-primary-100 ${
                  exp.company === "Explender SRL" ? "typing-circle" : ""
                }`}
              ></div>

              <div className="pl-4 flex flex-col gap-2 border-neutral-50 dark:border-neutral-700 border p-5 sm:m-4 rounded-lg shadow-md w-full sm:w-auto">
                <h2 className="text-xl font-semibold dark:text-secondary-100">
                  {exp.role} - {exp.company}
                </h2>
                <p className="text-gray-500 dark:text-secondary-100">
                  {exp.duration}
                </p>
                <p className="dark:text-secondary-100">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
