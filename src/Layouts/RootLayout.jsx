import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import ScrollToTop from '../Components/Shared/ScrollToTop';

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar></Navbar>
            <section className='max-w-7xl mx-auto min-h-screen'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;