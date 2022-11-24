import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/shared/Footer/Footer/Footer';
import Navbar from '../../Pages/shared/Navbar/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;