import { ButtonLogo } from './components/ButtonLogo'
import ReactLog from '../../assets/react.svg';
import TypescriptLogo from '../../assets/TypescriptLogo.svg';
import TailwindcssLogo from '../../assets/TailwindcssLogo.svg';
import JavascriptLogo from '../../assets/JavascriptLogo.svg';
import HtmlLogo from '../../assets/Html5Logo.svg';
import AngularLogo from '../../assets/AngularLogo.svg';
import GitLogo from '../../assets/GitLogo.svg';


export const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className=" text-4xl font-semibold">About Me</h1>
                <div className='w-12 h-1 my-2 bg-indigo-600 rounded-lg' />
                <div className="w-[350px] md:w-[600px] text-center py-4">
                    <p className="py-2 text-lg font-light">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>
            </div>

            <div >
            <div id='about' className="grid grid-cols-1 sm:grid-cols-2 w-full py-10 sm:px-8 sm:mx-8">
                <div className='flex flex-col sm:px-20 py-10 '>
                    <h1 className="py-7 text-4xl font-semibold">Get to know me!</h1>
                    <div className="w-full">
                        <p className="py-2 text-lg font-light">
                            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:px-20 py-10 justify-start'>
                    <h1 className="py-7 text-4xl font-semibold">My Skills</h1>
                    <div className="grid">
                        <div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-4 gap-1">
                            <ButtonLogo logo={<TypescriptLogo className='w-10 h-10'/>}/>
                            <ButtonLogo logo={<ReactLog className='w-10 h-10'/>}/>
                            <ButtonLogo logo={<TailwindcssLogo className='sw-10 h-10'/>}/>
                            <ButtonLogo logo={<JavascriptLogo className='w-10 h-10'/>}/>
                            <ButtonLogo logo={<HtmlLogo className='w-10 h-10'/>}/>
                            <ButtonLogo logo={<AngularLogo className='sw-10 h-10'/>} />
                            <ButtonLogo logo={<GitLogo className='w-10 h-10'/>} />
                         
                 
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

