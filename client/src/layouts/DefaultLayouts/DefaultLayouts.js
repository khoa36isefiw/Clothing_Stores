import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Advertise from './Advertise/Advertise';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    const location = useLocation();

    const is404Page = location.pathname === '/404';

    return (
        <Box>
            {/* if path is 404 show only component not found */}
            {/* {is404Page ? (
                <PageNotFound />
            ) : ( */}

            <Box>
                <Advertise />
                <Header />
                {/* <MenuItem /> */}
                <Box>{children}</Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default DefaultLayout;
