import React from "react";

export default function ExperianceCard(props) {
  return (
    <div className="flex flex-col md:flex-row sm:gap-6 md:gap-10 m-0">
      {/* Left Side (Job Title & Date) */}
      <div className="w-full md:w-1/3 text-left md:text-right">
        <h3 className="font-bold text-gray-900 text-base px-4">
          {props.job.company_name}
        </h3>
        <h3 className="font-bold text-gray-800 text-base px-4">
          {props.job.job_title}
        </h3>
        <p className="text-gray-600 text-sm px-4 md:text-base">
          {props.job.timeframe}
        </p>
      </div>

      <div className="sm:hidden md:relative md:flex flex-col items-center justify-center ">
        <div className="w-3 h-3 bg-gray-400 rounded-full absolute top-2"></div>
        <div className="absolute w-0.5 h-full bg-gray-400"></div>
      </div>

      <div className="w-full md:w-2/3 pb-5">
        <ul className="text-sm md:text-base text-gray-800 space-y-2 px-4 md:pl-0">
          {props.job.description.map((des, id) => {
            return <li key={id}>{des}</li>;
          })}
        </ul>
        <div className="text-sm md:text-base text-gray-800 space-y-2 px-4 py-2 md:pl-0"><span className="font-bold">Technologies used: </span>{props.job.technology_used}</div>
      </div>
    </div>
  );
}
