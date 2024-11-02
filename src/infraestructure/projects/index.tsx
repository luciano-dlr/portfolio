import BackgroundSvg from "../../assets/imagenrara.svg";
import ExternalLinkLogo from "../../assets/external-link.svg";
import PrivateNotesVideo from "../../assets/private-notes-web.gif";
import MoviesAppVideo from "../../assets/movies-app-r.gif";
import PokedexAppVideo from "../../assets/pokedex-app.gif";
import CalculatorAppVideo from "../../assets/calculator-app.gif";
import RollDiceAppIos from "../../assets/roll-dice-swift.gif";
import XylophoneAppIos from "../../assets/xylophone.gif";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gifUrl: any;
  demoUrl: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Private Notes",
      description:
        "A web app that uses your browser's storage to create private notes that only you can see on your computer or mobile device. It's local storage, so your notes can't be shared with others..",
      technologies: ["React", "TypeScript", "Web"],
      gifUrl: PrivateNotesVideo,
      demoUrl: "https://luciano-de-la-rubia-private-notes.vercel.app/",
    },
    {
      title: "Movies App",
      description:
        "An application that queries the most popular movies of the moment from the TMDB API. The app's style is based on the predominant color of each movie's promotional image, and it allows you to view detailed information about the movie, such as its cast.",
      technologies: [
        "React Native",
        "TypeScript",
        "Movies API",
        "Ios",
        "Android",
      ],
      gifUrl: MoviesAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-MoviesApp",
    },
    {
      title: "Pokedex App",
      description:
        "A cross-platform mobile app that replicates the functionality of the iconic Pokedex from the Pokémon series. Utilizing the PokeAPI, this app allows users to search for their favorite Pokémon and view detailed information presented in visually appealing cards tailored to each Pokémon's color scheme. Built with React Native and TypeScript for efficient development and a native-like user experience on both iOS and Android platforms.",
      technologies: [
        "React Native",
        "TypeScript",
        "Poke API",
        "Ios",
        "Android",
      ],
      gifUrl: PokedexAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-Pokedex",
    },
    {
      title: "Calculator App",
      description:
        "Built with React Native and TypeScript, this versatile calculator app delivers a familiar and user-friendly experience across both iOS and Android devices. Featuring an intuitive UI inspired by the clean aesthetics of iOS design, the app empowers users to tackle various mathematical operations with ease.",
      technologies: ["React Native", "TypeScript", "Ios", "Android"],
      gifUrl: CalculatorAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-Calculator",
    },
    {
      title: "Roll Dice App",
      description:
        "This Swift-based iOS application simulates the classic experience of rolling dice. Equipped with two virtual dice, the app generates random values for each roll",
      technologies: ["Swift", "Ios"],
      gifUrl: RollDiceAppIos,
      demoUrl: "https://github.com/luciano-dlr/RollDice",
    },
    {
      title: "Xylophone App",
      description:
        "A Swift-based iOS application that simulates a xylophone. Each key produces a distinct sound when tapped, providing a fun and educational musical experience.",
      technologies: ["Swift", "Ios"],
      gifUrl: XylophoneAppIos,
      demoUrl: "https://github.com/luciano-dlr/xylophone",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full flex flex-col justify-center items-center py-24 overflow-hidden"
    >
      <BackgroundSvg className="absolute w-full h-full bg-repeat -z-50 filter dark:invert-[.80] dark:hue-rotate-180 bg-neutral-50 opacity-80 dark:opacity-100 transition-opacity duration-300" />

      <div className="container px-4 md:px-6 relative max-w-6xl mx-auto">
        <h1 className="py-12 text-4xl font-semibold text-center dark:text-neutral-50">
          Personal Projects
        </h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group break-inside-avoid mb-8 border-neutral-50 bg-neutral-50 dark:bg-neutral-500 dark:border-neutral-700 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-normal text-primary mb-4 dark:text-neutral-50">
                  {project.title}
                </h3>
                <div className="relative overflow-hidden rounded-md mb-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.gifUrl}
                      alt={`${project.title} preview`}
                      className="w-full h-auto object-contain"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="dark:text-neutral-50 inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-neutral-500 dark:ring-neutral-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 dark:text-neutral-50">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200"
                  >
                    <ExternalLinkLogo className="mr-2 h-4 w-4 text-black dark:text-white" />
                    <span className="text-black dark:text-white">
                      View Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
