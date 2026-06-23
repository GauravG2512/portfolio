import React from 'react'
import SkillCard from '../components/SkillCard';

const skillItem = [
  {
    imgSrc: "/assets/logos/react.svg",
    label: "React.js",
    desc: "Frontend Library",
  },
  {
    imgSrc: "/assets/logos/javascript.svg",
    label: "JavaScript",
    desc: "Logic & Web Apps",
  },
  {
    imgSrc: "/assets/logos/python.svg",
    label: "Python",
    desc: "Backend & AI Development",
  },
  {
    imgSrc: "/assets/logos/Java.svg",
    label: "Java",
    desc: "OOP & Enterprise Development",
  },
  {
    imgSrc: "/assets/logos/cplusplus.svg",
    label: "C / C++",
    desc: "Systems Programming",
  },
  {
    imgSrc: "/assets/logos/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/assets/logos/sqlite.svg",
    label: "SQL / Databases",
    desc: "Relational Database Design",
  },
  {
    imgSrc: "/assets/logos/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "Responsive Styling",
  },
  {
    imgSrc: "/assets/logos/icons8-bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/assets/logos/html5.svg",
    label: "HTML5 & CSS3",
    desc: "Structure & Core Styles",
  },
  {
    imgSrc: "/assets/logos/git.svg",
    label: "Git & GitHub",
    desc: "Version Control",
  },
  {
    imgSrc: "/assets/logos/figma.svg",
    label: "Figma & Canva",
    desc: "UI/UX & Creative Assets",
  },
  {
    imgSrc: "/assets/logos/node-js.svg",
    label: "Node.js & Express.js",
    desc: "Backend JavaScript Runtimes",
  },
  {
    imgSrc: "/assets/logos/spring-boot.svg",
    label: "Spring Boot",
    desc: "Enterprise Java Framework",
  },
  {
    imgSrc: "/assets/logos/django-svgrepo-com.svg",
    label: "Django & Flask",
    desc: "Python Web Frameworks",
  },
];

const Skills = () => {
  return (
    <section className="Skills c-space section-spacing" id="skills">
      <div className="relative c-space ">
        <h2 className="text-heading">Skills</h2>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-10">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
