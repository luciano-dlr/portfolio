import { FC } from 'react';

interface ButtonLogoProps {
    logo: JSX.Element; 
    title?: string;
   
}
// boostrap, material Uint16Array, sql Server

export const ButtonLogo: FC<ButtonLogoProps> = ({ logo: Logo, title }) => {
    return (
        <div>

        <div className='flex items-center justify-center'>
            <h2 className='text-sm font-semibold text-gray-700'>{title}</h2>
            {
                Logo
            }
             
            </div>
        </div>
    );
};
