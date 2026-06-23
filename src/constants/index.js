export const myProjects = [
  {
    id: 1,
    title: "PRAVAAH ERP — User Management & Security Module",
    description:
      "An enterprise ERP platform designed to streamline modular operations with robust user management, security protocols, and administrative control.",
    subDescription: [
      "Developed during the L&T Skill Trainers Academy Program to modularize enterprise workflows.",
      "Implemented custom user authentication featuring secure email verification and password recovery systems.",
      "Designed a comprehensive Role-Based Access Control (RBAC) system with dynamic permission levels.",
      "Built route protection middleware and integrated audit logging, activity tracking, and admin reporting dashboards."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Pravaah.png",
    tags: [
      {
        id: 1,
        name: "Django",
        path: "/assets/logos/django-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "TollAI — AI-Based Automated Toll Collection System",
    description:
      "An automated toll collection system using YOLOv8 object detection and OCR for real-time license plate recognition.",
    subDescription: [
      "Engineered an automated toll system using YOLOv8 object detection and OCR for real-time license plate recognition with ~92% accuracy.",
      "Integrated RFID/FASTag simulation with a Flask backend, enabling seamless vehicle identification and automatic fare deduction.",
      "Processed live video frames using OpenCV and NumPy, reducing manual toll processing time by an estimated 70%."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/TollAI.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 3,
    title: "CineReserve",
    description:
      "An RDBMS-driven movie booking system built with concurrent transaction safety for real-time seat lock management.",
    subDescription: [
      "Designed PostgreSQL database schemas with optimized transaction isolation levels to prevent double-booking anomalies.",
      "Engineered automated seat reservation states using database locks and transactional queries.",
      "Developed a custom user booking interface, optimizing checkout steps and reducing query latencies."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cineverse.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },
  {
    id: 4,
    title: "V-Reuse",
    description:
      "A peer-to-peer campus marketplace app tailored for Vidyalankar Institute of Technology students to buy, sell, or trade educational assets.",
    subDescription: [
      "Built using a Node.js, Express, and MongoDB backend stack paired with React on the frontend.",
      "Implemented secure email verification limited to campus domain emails for student-only safety.",
      "Integrated real-time buyer-seller chat using Socket.IO, minimizing friction during student hand-offs."
    ],
    href: "https://vreuse.netlify.app",
    logo: "",
    image: "/assets/projects/vreuse.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node-js.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Resource Allocation Graph (RAG) Visualizer",
    description:
      "An interactive visual educational tool demonstrating operating system resource allocation and deadlock detection cycles.",
    subDescription: [
      "Visualizes nodes (Processes & Resources) and edge flows dynamically inside a responsive canvas.",
      "Implemented deadlock cycle detection algorithms (such as DFS cycle finding) that highlight deadlock conditions in real-time.",
      "Provides intuitive controls to allocate, request, and release resources with immediate step-by-step visual feedback."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/RAG.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Early Launchpad: Mission IIT/AIIMS",
    description:
      "Seminar Presentation & Campaign Asset Design built for competitive exam mentorship drives.",
    subDescription: [
      "Authored and styled the complete presentation deck used in key seminar sessions.",
      "Designed cohesive digital campaign banners and promotional items using Canva to boost outreach consistency.",
      "Managed visual presentation flows and technical cues in live settings in sync with presenters."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Launchpad.png",
    tags: [
      {
        id: 1,
        name: "Canva",
        path: "/assets/logos/figma.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+917276821465",
    icon: "/assets/socials/wp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gaurav-ghude-987b85258",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/GauravG2512/",
    icon: "/assets/socials/github-svgrepo-com.svg",
  },
];

export const experiences = [
  {
    title: "Web Development Intern",
    job: "Prodigy InfoTech",
    date: "Dec 2025 – Jan 2026",
    contents: [
      "Developed responsive web applications and built practical skills in software development workflows.",
      "Collaborated with project requirements to implement interactive client interfaces using modern frontend technologies.",
      "Worked with team workflows and GitHub repository branches for seamless code integrations."
    ],
  },
  {
    title: "Graphic Designer & Technical Manager",
    job: "SG Education",
    date: "May 2025 – Jul 2025",
    contents: [
      "Technical Management: Managed live presentations in sync with speakers for 'The Early Launchpad: Mission IIT/AIIMS' seminar.",
      "Design: Authored and designed the entire seminar presentation PPT deck and created marketing/ad banners.",
      "Produced digital assets for campaigns, streamlining feedback loops and visual layouts."
    ],
  },
  {
    title: "Bachelor of Technology — IT",
    job: "Vidyalankar Institute of Technology, Mumbai",
    date: "Aug 2024 – May 2028",
    contents: [
      "Currently pursuing B.Tech in Information Technology.",
      "Key Focus: Core IT frameworks, Data Structures & Algorithms, Object-Oriented Programming, and Database Management.",
      "Building full-stack projects to bridge academic theory and real-world industrial needs."
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
];

export const myskills = [
  {
    name: "Html5",
    icon: "/assets/logos/html5.svg",
  },
];

export const myCertifications = [
  {
    id: 1,
    title: "Credit Transfer Program in Full Stack Web Development",
    issuer: "L&T Skill Trainers Academy",
    date: "Issued May 2026",
    credentialId: "CTP-258",
    description: "60-hour residential program covering HTML, CSS, JavaScript, Bootstrap, and Django.",
    image: "/assets/certs/lt_fullstack.png",
  },
  {
    id: 2,
    title: "Elite NPTEL Online Certification in Programming in Java",
    issuer: "IIT Kharagpur",
    date: "Jan–Apr 2025",
    credentialId: "Elite (Score: 76%)",
    description: "Covered core Java, OOP principles, multithreading, and GUI event handling.",
    image: "/assets/certs/nptel_java.png",
  },
  {
    id: 3,
    title: "The Agnirva Space Internship Program",
    issuer: "Agnirva / IN-SPACe",
    date: "Completed Jan 13, 2025",
    description: "Hands-on immersion in space science, technology, and astronomy aligned with ISRO's exploration vision.",
    image: "/assets/certs/agnirva_space.png",
  },
  {
    id: 4,
    title: "GEN AI Study Jam 2024",
    issuer: "Google Developer Groups",
    date: "2024",
    description: "Completed all 15 core skill badges and arcade learning modules.",
    image: "/assets/certs/genai_jam.png",
  },
  {
    id: 5,
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    date: "2025",
    description: "Fundamental concepts of prompt engineering and LLM customization.",
    image: "/assets/certs/aws_prompt.png",
  },
  {
    id: 6,
    title: "AI for Beginners",
    issuer: "HP LIFE",
    date: "Issued Jun 2025",
    description: "Foundational training in Artificial Intelligence domains and concepts.",
    image: "/assets/certs/hp_life_ai.png",
  },
  {
    id: 7,
    title: "Introductory Python Course (CS105)",
    issuer: "Saylor Academy",
    date: "2025",
    description: "Core programming principles in Python including OOP and structures.",
    image: "/assets/certs/saylor_python.png",
  },
];
