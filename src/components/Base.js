import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";

const Base = ({addBase, pizza}) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    useEffect(() => {
        console.log({pizza, addBase})
    }, [])

    return (
        <motion.div className="base container"
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: ".5", type: "spring"}}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                                   whileHover={{scale: 1.3, color: "#f8e112", originX: 0}}
                                   transition={{type: "spring", stiffness: 300}}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next"
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: "spring", stiffness: 120}}
                >
                    <Link to="/toppings">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 8px rgba(255, 255, 255)",
                                boxShadow: "0 0 8px rgb(255, 255,255)"
                            }}
                        >Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    )
}

export default Base;
