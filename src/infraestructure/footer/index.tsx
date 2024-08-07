import GithubLogo from '../../assets/Github.svg'
import LinkedInLogo from '../../assets/Linkedin.svg'

export const Footer = () => {
  return (
    <div className="w-full bg-secondary-100">
        <div className='flex justify-around p-5'>

            <GithubLogo className='w-10 h-10 text-primary-100'/>
            <LinkedInLogo className='w-10 h-10 text-primary-100'/>

        


        </div>
      
    </div>
  )
}

