import React, { FC } from 'react';

interface ButtonLogoProps {
    logo: JSX.Element; // Cambiado a React.ElementType para aceptar cualquier componente
    title?: string;
   
}

export const ButtonLogo: FC<ButtonLogoProps> = ({ logo: Logo, title }) => {
    return (
        <div>

        <div className='flex items-center'>
            <h2 className='text-sm font-semibold text-gray-700'>{title}</h2>
            {
                Logo
            }
             
            </div>
        </div>
    );
};
