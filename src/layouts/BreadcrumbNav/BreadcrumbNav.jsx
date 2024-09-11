// Import necessary dependencies
import React, { useEffect, useState } from 'react'
import { useHref } from 'react-router-dom';

// Define the BreadcrumbNav component
export default function BreadcrumbNav() {

    // Set initial state of the `getLocation` variable to the current window location pathname
    const [getLocation, setLocation] = useState('');

    // Get the current location using the `useHref` hook
    const location = useHref();

    // Split the `getLocation` variable into an array called `improvePathname`
    const improvePathname = getLocation.split('/');

    const spanishPaths = {
        list: 'Lista',
        ['add-country']: 'Añadir país',
        ['edit-country']: 'Editar país',
        ['add-province']: 'Agregar provincia',
        ['edit-province']: 'Editar provincia',
        ['add-city']: 'Agregar ciudad',
        ['edit-city']: 'Editar ciudad',
        ['add-permission']: 'Agregar permiso',
        ['edit-permission']: 'Editar permiso',
        ['choose-owner']: 'Elegir propietario',
        ['add-product']: 'Agregar producto',
        ['edit-product']: 'Editar producto',
        ['another-owner']: 'Otro propietario',
        ['add-origin']: 'Agregar origen',
        ['edit-origin']: 'Editar origen',
        ['add-plan']: 'Agregar plan',
        ['edit-plan']: 'Editar plan',
        ['subscriptions']: 'Suscripciones',
        ['manage-package']: 'Gestionar paquete',
        ['size']: 'Tamaño',
        ['add-size']: 'Agregar Tamaño',
        ['users']: 'Equipo',
        ['add-user']: 'Agregar Usuario',
        ['edit-user']: 'Editar Usuario',
        ['roasters']: 'Tostadores',
        ['add-roaster']: 'Agregar Tostador',
        ['edit-roaster']: 'Editar Tostador',
        ['orders']: 'Pedidos',
        ['order-details']: 'Detalles del pedido',
        ['coffee-shop']: 'Cafeterías',
        ['add-coffee']: 'Agregar Cafetería',
        ['edit-coffee']: 'Editar Cafetería',
        ['offers']: 'Ofertas',
        ['add-offer']: 'Agregar oferta',
        ['edit-offer']: 'Editar oferta',
        ['profile']: 'Perfil',
    }

    // Update the `getLocation` state variable when the `location` variable changes
    useEffect(() => {
        setLocation(window.location.pathname);
    }, [location]);

    // Render the breadcrumb navigation and login section
    return (
        getLocation != '/' ?
            (
                <div className="flex mt-8 px-3">

                    <div className="flex items-center justify-between w-full">

                        <div className="text-[14px] font-[600]">

                            <div className='flex items-center'>

                                <span onClick={_ => window.history.back()} className='cursor-pointer'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                                        <path d="M11.5298 20.47C11.6035 20.5387 11.6626 20.6215 11.7036 20.7135C11.7446 20.8055 11.7666 20.9048 11.7684 21.0055C11.7702 21.1062 11.7517 21.2062 11.714 21.2996C11.6762 21.393 11.6201 21.4778 11.5489 21.5491C11.4776 21.6203 11.3928 21.6764 11.2994 21.7142C11.206 21.7519 11.106 21.7704 11.0053 21.7686C10.9046 21.7668 10.8053 21.7448 10.7133 21.7038C10.6213 21.6628 10.5385 21.6037 10.4698 21.53L0.469829 11.53C0.329378 11.3894 0.250488 11.1988 0.250488 11C0.250488 10.8013 0.329378 10.6107 0.469829 10.47L10.4698 0.470029C10.612 0.337549 10.8 0.265426 10.9944 0.268855C11.1887 0.272283 11.374 0.350995 11.5114 0.488408C11.6489 0.625821 11.7276 0.811206 11.731 1.00551C11.7344 1.19981 11.6623 1.38785 11.5298 1.53003L2.06108 11L11.5298 20.47Z" fill="#252525" />
                                    </svg>

                                </span>

                                <h1 className='text-[25px] ms-5 font-medium capitalize'>{spanishPaths[improvePathname.slice(-1).toString()] || improvePathname.slice(-1).toString()?.replace("-", " ")}</h1>

                            </div>

                        </div>


                    </div >

                </div >
            )
            :
            null
    )
}