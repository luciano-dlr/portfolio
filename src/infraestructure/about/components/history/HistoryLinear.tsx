import "./index.css"
import WorkHistory from "./data"

export const History = () => {
  return (
    <div id="history" className="w-full flex justify-center flex-col items-center ">
      <div className=" rounded"> 
        <div className="relative border-l pl-2 border-primary-100 flex flex-col ">
          {WorkHistory.map((exp, index) => (
            <div key={index} className="mb-10 ml-4 flex items-start">
              <div
                className={`absolute w-[20px] h-[20px] bg-primary-100 rounded-full -left-2.5 border border-primary-100 ${
                  exp.company === "Explender SRL" ? "typing-circle" : ""
                }`}
              > 
              </div>

              <div className="pl-4 flex flex-col gap-2 border-neutral-50 border p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{exp.role} - {exp.company}</h2>
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
