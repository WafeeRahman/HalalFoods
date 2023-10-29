import { AnimatePresence, motion } from 'framer-motion';
import Halal from "../components/Halal";
import Popular from "../components/Popular";
import React from 'react';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Halal />
            <Popular />
        </motion.div>
    );
}

const PageTransition = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Home />
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
