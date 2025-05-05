import React from 'react'
import './AuthLayout.scss';
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='app-wrapper'>
            <Outlet />
        </div>
    )
}

export default AuthLayout