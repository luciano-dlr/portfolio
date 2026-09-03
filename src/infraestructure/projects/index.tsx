import { useTranslation } from "react-i18next";
import BackgroundSvg from "../../assets/imagenrara.svg";
import ExternalLinkLogo from "../../assets/external-link.svg";
import PrivateNotesVideo from "../../assets/private-notes-web.gif";
import MoviesAppVideo from "../../assets/movies-app-r.gif";
import PokedexAppVideo from "../../assets/pokedex-app.gif";
import CalculatorAppVideo from "../../assets/calculator-app.gif";
import RollDiceAppIos from "../../assets/roll-dice-swift.gif";
import XylophoneAppIos from "../../assets/xylophone.gif";
import ProductCardLibrary from "../../assets/npm-product-card-leio.png";

interface Project {
  title: string;
  descriptionKey: string;
  technologies: string[];
  gifUrl: any;
  demoUrl: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      title: "Private Notes",
      descriptionKey: "projectsList.privateNotes",
      technologies: ["React", "TypeScript", "Web"],
      gifUrl: PrivateNotesVideo,
      demoUrl: "https://luciano-de-la-rubia-private-notes.vercel.app/",
    },
    {
      title: "Product Card - npm - Library",
      descriptionKey: "projectsList.productCard",
      technologies: ["React", "TypeScript", "npm-package"],
      gifUrl: ProductCardLibrary,
      demoUrl: "https://www.npmjs.com/package/product-card-leio",
    },
    {
      title: "Movies App",
      descriptionKey: "projectsList.moviesApp",
      technologies: ["React Native", "TypeScript", "Movies API", "Ios", "Android"],
      gifUrl: MoviesAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-MoviesApp",
    },
    {
      title: "Pokedex App",
      descriptionKey: "projectsList.pokedex",
      technologies: ["React Native", "TypeScript", "Poke API", "Ios", "Android"],
      gifUrl: PokedexAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-Pokedex",
    },
    {
      title: "Calculator App",
      descriptionKey: "projectsList.calculator",
      technologies: ["React Native", "TypeScript", "Ios", "Android"],
      gifUrl: CalculatorAppVideo,
      demoUrl: "https://github.com/luciano-dlr/ReactNative-Calculator",
    },
    {
      title: "Roll Dice App",
      descriptionKey: "projectsList.rollDice",
      technologies: ["Swift", "Ios"],
      gifUrl: RollDiceAppIos,
      demoUrl: "https://github.com/luciano-dlr/RollDice",
    },
    {
      title: "Xylophone App",
      descriptionKey: "projectsList.xylophone",
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
          {t('projects.title')}
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
                  {t(project.descriptionKey)}
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
                      {t('projects.viewDemo')}
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