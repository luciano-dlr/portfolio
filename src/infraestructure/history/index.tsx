import "./index.css"
import WorkHistory from "./data/workHistory"

export const History = () => {
  return (
    <div id="history" className="w-full p-5 flex justify-center flex-col items-center bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mt-10">History</h2>
      <div className='w-12 h-1 my-2 bg-indigo-600 rounded-lg mb-14' />

      <div className=" rounded sm:px-48 sm:py-10 "> 
        <div className="relative border-l border-primary-100 flex flex-col items-start">
          {WorkHistory.map((exp, index) => (
            <div key={index} className="mb-10 ml-4 flex items-start">
              <div
                className={`absolute w-3 h-3 bg-primary-100 rounded-full mt-1 -left-1.5 border border-primary-100 ${
                  exp.company === "Explender SRL" ? "typing-circle" : ""
                }`}
              ></div>
              <div className="pl-8">
                <h3 className="text-lg font-semibold">{exp.role} - {exp.company}</h3>
                <p className="text-gray-500">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
