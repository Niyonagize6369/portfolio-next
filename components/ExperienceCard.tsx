import React from 'react'

type Experience = {
    role: string;
    description: string;
    company: string;
    period: string;

    
}
const ExperienceCard:React.FC<Experience> = ({role,company,description,period}) => {
  return (
    <div>
      <h2>{role}</h2>
      <h2>{company}</h2>
      <h2>{description}</h2>
      <h2>{period}</h2>

    </div>
  )
}

export default ExperienceCard
