import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ title, hideButton, classNames, setIsRenderLayouts, notRenderLayout }) {

    useEffect(() => {

        notRenderLayout && setIsRenderLayouts(false);

        // Clean Up
        return _ => { };

    }, [notRenderLayout]);

    return (
        <div className={`h-[83vh] flex items-center justify-center flex-col relative ${classNames}`}>

            <img src={require('../../assets/images/not-found.png')} alt='rovle-not-found' loading='lazy' width={'540px'} height={'540px'} className='mb-3' />
            <img src={require('../../assets/images/not-found-vector.png')} alt='rovle-not-found' loading='lazy' width={'640px'} height={'640px'} className='mb-3 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-h-full max-w-full' />

            <h1 className='text-[var(--secondray-color)] font-medium capitalize text-[30px] mb-8 absolute bottom-10'>{title || 'Page Not Found'}</h1>

            {
                !hideButton ? <Link to={'/'} className='bg-[var(--primary-color)] text-white p-2 px-12 rounded-[5px] absolute bottom-0'>Page Not Found</Link> : null
            }


        </div>
    )
}
