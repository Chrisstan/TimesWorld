import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';

const DefaultLayout = () => {
    return (
        <div className='default-wrapper'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout;