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
    description: "Backend and frontend solution implementation.",
  },
  {
    role: "Frontend Developer",
    company: "Criteria Studio SAS",
    duration: "May 2022 - May 2023",
    description: "Developing efficient and modern user interfaces.",
  },
];

export default WorkHistory;
