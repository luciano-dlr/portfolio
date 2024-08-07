import "./index.css"
import WorkHistory from "./data"

export const History = () => {
  return (
    <div id="history" className="w-full flex justify-center flex-col items-center ">
      <div className=" rounded"> 
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
