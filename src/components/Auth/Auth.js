import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom';

export default function Auth({ children }) {
    const isLoging = localStorage.getItem('token');
    return (
        isLoging
            ?
            children
            :
            <Fragment>

                <Navigate to={'/login'} />

            </Fragment>
    )
}
