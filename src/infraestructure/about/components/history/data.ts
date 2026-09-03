export type WorkHistoryItems = {
  role: string;
  company: string;
  duration: string;
  durationEn: string;
  descriptionKey: string;
};

const WorkHistory: WorkHistoryItems[] = [
  {
    role: "Software Developer",
    company: "Mindfactory",
    duration: "2025 - Presente",
    durationEn: "2025 - Present",
    descriptionKey: "about.mindfactory",
  },
  {
    role: "Software Developer",
    company: "Farmacias Sánchez Antonioli",
    duration: "2025 - 2026",
    durationEn: "2025 - 2026",
    descriptionKey: "about.farmacias",
  },
  {
    role: "Software Developer",
    company: "Explender SRL",
    duration: "2023 - 2025",
    durationEn: "2023 - 2025",
    descriptionKey: "about.explender",
  },
  {
    role: "Frontend Developer",
    company: "Criteria Studio SAS",
    duration: "2022 - 2023",
    durationEn: "2022 - 2023",
    descriptionKey: "about.criteria",
  }
];

export default WorkHistory;
