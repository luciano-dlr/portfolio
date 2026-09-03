export type WorkHistoryItems = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const WorkHistory: WorkHistoryItems[] = [
  {
    role: "Full-stack Developer",
    company: "Mindfactory",
    duration: "2026 - Presente",
    description: "Microservicios con NestJS para el equipo de Rentas de Córdoba Argentina"
  },
  {
    role: "Full-stack Developer",
    company: "Farmacias Sánchez Antonioli",
    duration: "2025 - 2026",
    description: "Sistema de auditoría de cajas de cobro con NestJS, PostgreSQL y React. Automatización de auditorías con Cron-Jobs, MySQL y Redis."
  },
  {
    role: "Full-stack Developer",
    company: "Explender SRL",
    duration: "2023 - 2025",
    description: "APIs RESTful con ASP.NET Core. Autenticación JWT y autorización basada en roles. Frontend con Angular y React, migracion pwa a react-native expo"
  },
  {
    role: "Frontend Developer",
    company: "Criteria Studio SAS",
    duration: "2022 - 2023",
    description: "Desarrollo de funcionalidades en React. Formularios dinámicos, sistemas de login, filtrado de datos y diseño de layouts."
  }
];

export default WorkHistory;
