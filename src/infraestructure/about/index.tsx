import { SkillsLogo } from './components/skillsLogo/SkillsLogo';
import { History } from './components/history/HistoryLinear'
import ReactLog from '../../assets/react.svg';
import TypescriptLogo from '../../assets/TypescriptLogo.svg';
import TailwindcssLogo from '../../assets/TailwindcssLogo.svg';
import JavascriptLogo from '../../assets/JavascriptLogo.svg';
import HtmlLogo from '../../assets/Html5Logo.svg';
import AngularLogo from '../../assets/AngularLogo.svg';
import GitLogo from '../../assets/GitLogo.svg';
import ZustandLogo from '../../assets/ZustandLogo.svg'
import FirebaseLogo from '../../assets/FirebaseLogo.svg'
import SassLogo from '../../assets/SassLogo.svg'
import FigmaLogo from '../../assets/FigmaLogo.svg'
import CssLogo from '../../assets/CssLogo.svg'


export const About = () => {
    return (
        <div className='flex flex-col items-center '>
            <div className="flex flex-col justify-center items-center mt-20 ">
                <h1 className=" text-4xl font-semibold">About Me</h1>
                <div className='w-12 h-1 my-2 bg-indigo-600 rounded-lg' />
                <div className="w-[350px] md:w-[600px] text-center py-4">
                    <p className="py-2 text-lg font-light">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>
            </div>
                <div id='about' className="grid grid-cols-1 sm:grid-cols-2 w-full py-10 sm:px-8 sm:mx-8 items-start ">
                    <div className='flex flex-col sm:px-20 py-10 items-center'>
                        <h1 className="py-12 text-4xl font-semibold  text-center">History</h1>
                        <History />
                    </div>
                    <div className='flex flex-col sm:px-20 py-10 '>
                        <h1 className="py-12 text-4xl font-semibold text-center">My Skills</h1>
                        <div className="grid">
                            <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-5 gap-1 py-4">
                                <SkillsLogo title='React' logo={<ReactLog className='w-20 h-20 drop-shadow-lg'/>}/>
                                <SkillsLogo title='Angular' logo={<AngularLogo className='w-20 h-20 drop-shadow-md' />} />
                                <SkillsLogo title='Typescript' logo={<TypescriptLogo className='w-20 h-20 drop-shadow-lg'/>}/>
                                <SkillsLogo title='Javascript' logo={<JavascriptLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Tailwindcss' logo={<TailwindcssLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Html' logo={<HtmlLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Sass' logo={<SassLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Css' logo={<CssLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Firebase' logo={<FirebaseLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Git' logo={<GitLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Zustand' logo={<ZustandLogo className='w-20 h-20 drop-shadow-lg' />} />
                                <SkillsLogo title='Figma' logo={<FigmaLogo className='w-20 h-20 drop-shadow-lg' />} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

