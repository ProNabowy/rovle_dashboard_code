import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ title, hideButton, classNames, setIsRenderLayouts, notRenderLayout }) {

    useEffect(() => {

        notRenderLayout && setIsRenderLayouts(false);

        // Clean Up
        return _ => { };

    }, [notRenderLayout]);

    return (
        <div className={`h-[83vh] flex items-center justify-center flex-col ${classNames}`}>

            <img src={require('../../assets/images/not-found.png')} className='mb-3' />

            <h1 className='text-[var(--secondray-color)] font-medium capitalize text-[30px] mb-6'>{title || 'الصفحة غير موجودة'}</h1>

            {
                !hideButton ? <Link to={'/'} className='bg-[var(--primary-color)] text-white p-2 px-12 rounded-[5px]'>الرجوع لصفحة الرئيسية</Link> : null
            }


        </div>
    )
}
