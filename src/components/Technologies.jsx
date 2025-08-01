import { SiMongodb, SiTensorflow } from "react-icons/si"
import { SiPowerbi } from "react-icons/si";
import { FaBrain, FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { motion } from "framer-motion"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiR } from 'react-icons/si';
import { SiNumpy } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
// import { RiReactjsLine } from "react-icons/ri"
// import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});
const Technologies = () => {
    return (
        <div className="border-b border border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 2.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-green-400" />

                </motion.div><motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-7xl text-green-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNumpy className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaBrain className="text-7xl text-green-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    < AiOutlineConsoleSql className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPowerbi className="text-7xl text-yellow-400" />
                </motion.div>
                
            </motion.div>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Programming Languages</motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 2.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    < DiJavascript className="text-7xl text-yellow-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    < SiR className="text-7xl text-yellow-500" />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies
