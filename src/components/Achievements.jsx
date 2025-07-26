import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion"
const Achievements = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">Achievements</motion.h1>
            <div>
                {ACHIEVEMENTS.map((achievements, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{achievements.date}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {achievements.organization} -{" "}
                                <span className="text-sm text-purple-100">
                                    {achievements.title}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{achievements.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
