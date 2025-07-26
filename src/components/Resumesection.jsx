import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const ResumeSection = () => {
  const resumePath = "/resume.pdf";

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Resume
      </motion.h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
        >
          <FaEye />
          View Resume
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          href={resumePath}
          download
          className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white font-medium rounded-lg"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default ResumeSection;
