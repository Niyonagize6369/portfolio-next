import React from 'react';
import experienceData from "../data/experience.json";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="flex flex-col" id="experience">
      <h2 className="py-2 mb-12 text-4xl font-bold text-center text-black">Experience & Education</h2>
      
      {/* <div className="flex justify-center items-center mb-8">
        <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="space-y-6">
        <h3 className='font-bold text-3xl mb-6 text-center md:text-left'>Work Experience</h3>

          {experienceData?.experience?.map((exp) => (
            <div key={exp.id} className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
              <div className="mb-2">
                <h4 className="font-semibold text-xl">{exp.role} - {exp.company}</h4>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.description?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <h3  className="font-bold text-3xl mb-6 text-center md:text-left">Education</h3>
        <div className="space-y-6">
          {experienceData.education.map((edu, index) => (
            <div key={edu.id} className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
              <div className="mb-2">
                <h4 className="font-semibold text-xl">{edu.degree}</h4>
                <p className="text-sm text-gray-500">{edu.institution} ({edu.year})</p>
                <ul className="timeline-description">
                 {edu.details && edu.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div> */}

      <div className='flex justify-center mx-10 mb-4 gap-10'>
        <div>
          <h2 className='font-bold text-2xl text-center mb-4'>EXPERIENCE</h2>
          <div className=''>
            {
              experienceData?.experience?.map((exp, index) => (
                <div key={index} className='mb-6 border border-gray-500 
          p-4 rounded-lg shadow-md bg-gray-100 w-full grid m-10 gap-3'>
                  <p className='font-bold text-xl'>{exp.role}</p>
                  <p className='text-gray-700'>{exp.company}</p>
                  <p className='text-gray-500'>{exp.period}</p>
                  <ul className='list-disc list-inside text-gray-600'>
                    {exp.description?.map((item, idx) => (
                      <li   className="list-none " key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
            
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl text-center'>EDUCATION</h2>
          <div>
            <p>title</p>
            <p>campany</p>
            <p>period</p>
            <p>description</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Experience;