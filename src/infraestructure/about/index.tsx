import ReactLog from '../../assets/react.svg'

export const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className=" text-4xl font-semibold">About Me</h1>
                <div className='w-12 h-1 my-2 bg-indigo-600 rounded-lg' />
                <div className="w-[350px] md:w-[600px] text-center py-4">
                    <p className="py-2 text-lg font-medium">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>
            </div>

            <div >
            <div id='about' className="grid grid-cols-1 sm:grid-cols-2 w-full py-10 sm:px-8 sm:mx-8 items-center">
                <div className='flex flex-col sm:px-20 py-10 '>
                    <h1 className="py-7 text-4xl font-semibold">Get to know me!</h1>
                    <div className="w-full">
                        <p className="py-2 text-lg font-medium">
                            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:px-20 py-10 justify-start'>
                    <h1 className="py-7 text-4xl font-semibold">My Skills</h1>
                    <div className="grid">
                        <div className="grid sm:grid-cols-5 grid-cols-2 gap-2 ">
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700 '>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                            <div className=' bg-gray-200 rounded-lg ease-in-out  hover:scale-100  hover:bg-gray-300'>
                                <div className='flex items-center justify-around'>
                                    <h2 className='text-sm text-gray-700'>React</h2>
                                    <ReactLog className='w-10 h-10 p-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

