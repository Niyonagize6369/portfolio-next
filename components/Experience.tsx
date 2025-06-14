import React from 'react';
import experienceData from "../data/experience.json";
import educationData from "../data/experience.json";
import "../styles/Experience.css";
// import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section className="flex flex-col" id="experience">
      <h2 className="py-2 mb-12 text-4xl font-bold text-center text-black">Experience & Education</h2>
      

      <div className='flex justify-center mx-10 mb-4 gap-25'>
        <div>
          <h2 className='font-bold text-2xl text-center mb-4'>EXPERIENCE</h2>
          <div>
            {/* {experienceData?.experience?.map((experience, index) => (
              <ExperienceCard
                key={index} {...experience}/>
            ))} */}
            
            {
              experienceData?.experience?.map((exp, index) => (
                <div key={index} className='mb-6 border border-gray-500 
          p-4 rounded-lg shadow-md bg-gray-100 w-full grid m-10 gap-3'>
                  <p className='font-bold text-xl'>{exp.role}</p>
                  <p className='text-gray-700'>{exp.company}</p>
                  <p className='text-gray-500'>{exp.period}</p>
                  <p className='text-gray-500'>{exp.description}</p>

                  {/* <ul className='list-disc list-inside text-gray-600'>
                  </ul> */}
                </div>
              ))
            }
            
          </div>
        </div>

        <div>
          <h2 className='font-bold text-2xl text-center'>EDUCATION</h2>
          <div>
            {
              educationData?.education?.map((edu, index) => (
                <div key={index} className='mb-6 border border-gray-500 
          p-4 rounded-lg shadow-md bg-gray-100 w-full grid m-10 gap-3'>
                  <p className='font-bold text-xl'>{edu.degree}</p>
                  <p className='text-gray-700'>{edu.institution}</p>
                  <p className='text-gray-500'>{edu.year}</p>
                  <p className='text-gray-500'>{edu.details}</p>
                  <ul className='list-disc list-inside text-gray-600'>
                    {edu.details?.map((item, idx) => (
                      <li   className="list-none " key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Experience;