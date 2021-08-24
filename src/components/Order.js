import React from 'react';
import {motion} from "framer-motion"


const containerVariants = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            mass: "0.4",
            damping: 8,
            when: "beforeChildren",
            staggerChildren: ".5"
        }
    },
}

const childVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1}

}

const Order = ({pizza}) => {
    return (
        <motion.div className="container order" variants={containerVariants} initial="initial" animate="animate">
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>You ordered a {pizza.base} pizza
                with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            </motion.div>
        </motion.div>
    )
}

export default Order;
