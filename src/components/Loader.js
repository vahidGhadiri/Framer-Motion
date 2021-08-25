import React from "react"
import {motion} from "framer-motion"

const loaderVariantsOne = {
    animateOne: {
        y: [0, -10],
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                delay: .25,
                ease: "easeOut"
            }
        }
    },
}

const loaderVariantsTwo = {
    animateOne: {
        y: [0, -10],
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                delay: .5,
                ease: "easeOut"
            }
        }
    },
}

const loaderVariantsThree = {
    animateOne: {
        y: [0, -10],
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                delay: .75,
                ease: "easeOut"
            }
        }
    },
}

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loaders">
                <motion.div className="loader" variants={loaderVariantsOne} animate="animateOne"/>
                <motion.div className="loader" variants={loaderVariantsTwo} animate="animateOne"/>
                <motion.div className="loader" variants={loaderVariantsThree} animate="animateOne"/>
            </div>
        </div>

    )
}

export default Loader
