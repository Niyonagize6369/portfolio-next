import React from 'react'
import "../styles/About.css";
type Skill = {
  name: string;
  level: string; 
};

type PersonalInfo = {
  interest: string;
  interests: string[];
  skills: Skill[];
};

const personalInfo: PersonalInfo = {
  interest: "I am a passionate developer who loves building web applications.",

  skills: [
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "TypeScript", level: "80%" }
  ],
  interests: []
};

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <div className="text-lg mb-4">
        <div className="about-content">
          <h3 className="flex mb-3 gap-2text-2xl">Who I'm</h3>
          <p>{personalInfo.interest}</p>
          
          {/* <h3>My Interests</h3> */}
          <ul className="interests-list">
            {personalInfo?.interests?.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col gap-6">
          <h3 className='text-2xl'>My Skills</h3>
          <div className="skills-container">
            {personalInfo.skills?.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
