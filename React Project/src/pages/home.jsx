import { AnimatePresence, motion } from 'framer-motion';
import Halal from "../components/Halal";
import Popular from "../components/Popular";
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Category from '../components/Category';
function Home() {
    

    return (
        <>
            <Search />
            <Category />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
               

                <Halal />
                <Popular />
            </motion.div>
        </>
    );
}

const PageTransition = () => {
    return (

        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <Home />
        </motion.div>

    );
};

export default PageTransition;
