import React, { useEffect } from 'react'
import bg from '../../assets/images/not-found.png';
import vector_bg from '../../assets/images/not-found-vector.png';

export default function NotFound({ title, classNames, setIsRenderLayouts, notRenderLayout }) {

    useEffect(() => {

        notRenderLayout && setIsRenderLayouts(false);

        // Clean Up
        return _ => { };

    }, [notRenderLayout]);

    return (
        <div className={`h-[83vh] flex items-center justify-center flex-col relative ${classNames}`}>

            <img
                src={bg}
                alt='rovle-not-found'
                loading='lazy'
                width={'540px'}
                height={'540px'}
                className='mb-3'
            />
            <img
                src={vector_bg}
                alt='rovle-not-found'
                loading='lazy'
                width={'640px'}
                height={'640px'}
                className='mb-3 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-h-full max-w-full'
            />

            <h1 className='text-[var(--secondray-color)] font-medium capitalize text-[30px] mb-8 absolute bottom-10'>{title || 'Page Not Found'}</h1>

        </div>
    )
}
