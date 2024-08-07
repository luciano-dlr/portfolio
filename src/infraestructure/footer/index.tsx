import GithubLogo from '../../assets/Github.svg'
import LinkedInLogo from '../../assets/Linkedin.svg'

export const Footer = () => {
  return (
    <div className="w-full bg-slate-500">
        <div className='flex justify-center p-5'>

            <GithubLogo className='w-10 h-10 text-white'/>
            <LinkedInLogo className='w-10 h-10 text-white'/>

        


        </div>
      
    </div>
  )
}

