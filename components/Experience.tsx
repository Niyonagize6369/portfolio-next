import React from 'react';
import experienceData from "../data/experience.json";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience & Education</h2>
      
      <div className="experience-section">
        <h3>Work Experience</h3>
        <div className="timeline">
          {experienceData?.experience?.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h4>{exp.role} - {exp.company}</h4>
                <p className="timeline-period">{exp.period}</p>
                <ul className="timeline-description">
                  {exp.description?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="education-section">
        <h3>Education</h3>
        <div className="timeline">
          {experienceData.education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-content">
                <h4>{edu.degree}</h4>
                <p className="timeline-institution">{edu.institution} ({edu.year})</p>
                {/* <ul className="timeline-description">
                  {edu.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;