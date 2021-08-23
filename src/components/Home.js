import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";

const Home = () => {
    return (
        <motion.div className="home container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: ".3", duration: "1.5"}}
        >
            <h2>
                Welcome to Pizza Joint
            </h2>
            <Link to="/base">
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(255, 255, 255)",
                        boxShadow: "0 0 8px rgb(255, 255,255)"
                    }}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;
