import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('../../../pages/Login'));

export default function UnAuthenticatedRoutes() {

    return (
        <Routes>

            <Route path='/login' element={<Login />} />

        </Routes>
    )
}
