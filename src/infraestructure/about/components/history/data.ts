export type WorkHistoryItems = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const WorkHistory: WorkHistoryItems[] = [
  {
    role: "Software Developer",
    company: "Explender SRL",
    duration: "May 2023 - Present",
    description:
      "Development and migration of an Angular PWA application to React Native. Backend using .NET Framework and managed database with SQL.",
  },
  {
    role: "Frontend Developer",
    company: "Criteria Studio SAS",
    duration: "May 2022 - May 2023",
    description:
      "React development. Implemented and developed functionalities for websites, including dynamic forms, login and authentication systems, data filtering, and layout design.",
  },
];

export default WorkHistory;
