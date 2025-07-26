import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = 'To secure a position in the field of Artificial Intelligence and Machine Learning where I can apply my knowledge of data science, algorithm development, and model training to solve real-world problems, while enhancing my skills through continuous learning and impactful projects.'
export const ABOUT_TEXT = 'I’m Balaguru G, an aspiring AI and Data Science enthusiast from Tamil Nadu, currently pursuing my B.Tech in Artificial Intelligence and Data Science at PSNA College of Engineering and Technology. I have a strong foundation in Python, Java, and machine learning, and I enjoy working on real-world projects involving computer vision, natural language processing, and data analysis. My experience includes building an AIoT-based vehicle smoke detection system, a fake news detection web app, and an NLP-based legal document translator. I’m passionate about applying AI to solve meaningful problems and continuously learning emerging technologies to contribute to impactful, innovation-driven teams.'
export const EXPERIENCES = [
  {
    year: "Nov 2024 - Dec 2024",
    role: "Python Developer Intern",
    company: "TechOctanet Services Pvt Limited",
    description: `Completed a 1-month Python Development Internship, gaining hands-on experience in coding, debugging, and real-world applications.`,
    technologies: ["Python"],
  },
  {
    year: "Feb 2025 - Feb 2025",
    role: "Data Science Intern",
    company: "CodeAlpha",
    description: `Completed a Data Science Internship developing skills in data processing, visualization, and predictive analytics.`,
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
  {
    year: "Jun 2025 - Jul 2025",
    role: "Data Science Intern",
    company: "Dot Com Infoway",
    description: `Working on data analysis and visualization using tools like Python, NumPy, Power BI, and assisting with SQL-based data handling for business insights.`,
    technologies: ["Python", "NumPy", "Power BI", "SQL"],
  }
];
export const PROJECTS = [
  {
    title: "Vehicle Smoke Emission Detection",
    image: project1,
    description:
      "Developed an AIoT-based system to detect excessive smoke emissions from vehicles in real-time to help monitor pollution and support environmental protection.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Smoke Sensors", "MQTT", "Firebase"],
  },
  {
    title: "iTech Hackfest – Student Guidance App",
    image: project2,
    description:
      "Designed a concept for an educational guidance app offering course recommendations, study materials, and mentorship connections.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Legal Document Translator using Machine Learning",
    image: project3,
    description: "Developed an NLP-based system using the M2M-100 multilingual model to translate legal documents across multiple languages. Applied ML techniques for keyword extraction and text summarization, enhancing accessibility and legal comprehension.",
    technologies: ["Python", "M2M-100", "NLP", "Keyword Extraction", "Text Summarization"]
  },
  {
    title: "Theerkathon – AI-Powered Radiant Cooling System",
    image: project4,
    description:
      "Developed an eco-friendly cooling system that circulates water through embedded pipes, reducing energy consumption and promoting sustainable temperature regulation.",
    technologies: ["Python", "Arduino", "Temperature Sensors", "Firebase", "Embedded C"],
  },
  {
    title: "Fake News Detection Web Application",
    image: project5,
    description:
      "Built a web application to identify potentially fake news articles using keyword pattern matching and rule-based logic. Designed a clean user interface and stored results in MongoDB.",
    technologies: ["Python", "Flask", "MongoDB", "HTML", "CSS", "JavaScript", "VS Code"],
  }
];


export const CONTACT = {
  address: "No:14, Meenampalpuram Street, Palamedu, Madurai, Tamil Nadu ",
  phoneNo: "+91 90809 91696",
  email: "gurub8551@gmail.com",
};

export const CERTIFICATIONS = [
  {
    year: "Aug 5, 2024",
    company: "HTML Certification",
    description: "Learned the fundamentals of HTML and CSS, including creating web pages, using proper structure, and styling for a better user experience."
  },
  {
    year: "Feb 6, 2025",
    company: "Palo Alto Networks Academy – Cloud Security Fundamentals",
    description: "Gained foundational knowledge of cloud security principles, including threat identification, secure architecture, and risk management."
  },
  {
    year: "Aug 2024",
    company: "Data Visualization with Power BI",
    description: "Learned the basics of Power BI, including data visualization, report creation, and building simple interactive dashboards."
  },
  {
    year: "Nov 22, 2024",
    company: "Google – Generative AI Completion Badge",
    description: "Completed Basics of Generative AI by Google, gaining fundamental knowledge in AI concepts and applications."
  },
  {
    year: "July 2025",
    company: "HackerRank – Problem Solving Certification",
    description: "Completed the HackerRank skill certification in problem solving (basic)."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Winner – Theerkathon 2024",
    date: "September 2024",
    organization: "StartupTN",
    description:
      "Developed an AI-powered radiant cooling system integrating solar energy and sustainable PEX-based water circulation. Recognized for its innovative approach to eco-friendly, cost-effective indoor climate regulation. Selected as the winning idea among top finalists for its potential real-world impact."
  },
  {
    title: "Problem Solver Bronze Badge",
    date: "July 2025",
    organization: "CodeChef",
    description:
      "Solved 50+ coding problems on CodeChef and earned the Problem Solver Bronze Badge."
  }
];
