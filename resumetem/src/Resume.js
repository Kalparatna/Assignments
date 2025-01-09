import React from "react";
import { useState } from "react";
import html2pdf from "html2pdf.js";
import ProfileSection from "./components/ProfileSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import AchievementsSection from "./components/AchievementsSection";
import "./Resume.css";

const Resume = () => {
  const [profile, setProfile] = useState({
    name: "John Smith",
    role: "Full-Stack Developer",
    photo: "profile.jpg",
  });

  const [contact, setContact] = useState({
    phone: "+1 234 567 890",
    email: "john.smith@example.com",
    address: "123 Main Street, Springfield, USA",
  });

  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2018 - 2022",
    },
    {
      degree: "Master of Science in Software Engineering",
      institution: "ABC University",
      year: "2022 - 2024 (Expected)",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      position: "Software Engineer",
      company: "Tech Solutions Ltd.",
      years: "2022 - Present",
      details:
        "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Collaborating with the product team to define features and user stories.",
    },
    {
      position: "Intern",
      company: "Startup Inc.",
      years: "Summer 2021",
      details:
        "Assisted in front-end development using React and worked closely with the back-end team to build a CRUD application using Express.js and MongoDB.",
    },
  ]);

  const [skills, setSkills] = useState({
    technical: ["JavaScript", "React.js", "Node.js", "Express.js"],
    toolsLibraries: ["Git & GitHub", "Docker", "AWS", "GraphQL"],
    databases: ["MongoDB", "PostgreSQL"],
    webDevelopment: ["HTML5", "CSS3", "Responsive Design"],
  });

  const [achievements, setAchievements] = useState([
    "Winner of Hackathon 2023 - XYZ University",
    "Developed a Web Scraping Tool used by 50+ companies",
    "Contributed to 5 open-source projects on GitHub",
  ]);

  // Download PDF function
  const handleDownload = () => {
    const resumeContent = document.getElementById("resumeContent");
    const options = {
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf()
      .from(resumeContent)
      .set(options)
      .save();
  };

  return (
    <div>
      <div id="resumeContent">
        <div className="resume">
          <ProfileSection data={profile} updateData={setProfile} />
          <ContactSection contact={contact} updateContact={setContact} />
          <EducationSection education={education} updateEducation={setEducation} />
          <ExperienceSection
            experience={experience}
            updateExperience={setExperience}
          />
          <SkillsSection skills={skills} updateSkills={setSkills} />
          <AchievementsSection achievements={achievements} updateAchievements={setAchievements} />
        </div>
      </div>

      {/* Download Button */}
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default Resume;
