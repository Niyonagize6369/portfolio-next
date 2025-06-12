import projectsData from "../data/project.json";
// import "../styles/Project.css";
import Image from "next/image";



const Projects = () => {
  // console.log(projectsData);
  return (
    <section className="max-w-full m-20 bg-gray-0" id="projects">
      <h2 className="py-2 mb-12 text-4xl font-bold text-center text-black">My Projects</h2>
      <div className="grid m-10 justify-items-center">
        <div className="grid gap-5 md:grid-cols-2">
          {projectsData.projects.map((project, idx) => (
            <div key={idx} className="flex flex-row-reverse items-center shadow-md bg-blue-100 rounded-2xl">
              <div className="p-5 flex flex-col items-center space-y-4">
                <Image
                  src={project.image}
                  alt="Projects"
                  width={200}
                  height={150}
                  className="rounded-lg shadow-lg md:shrink-0 w-fit"
                />
                <h3 className="mt-2 text-slate-900 font-bold text-2xl">{project.title}</h3>
                <p className="w-1/1 text-center">{project.description}</p>
                <div className="">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="m-4">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-9">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:bg-gray-900 hover:text-white rounded-full border bg-blue-700 text-white py-2 px-4 ">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:bg-gray-900 hover:text-white rounded-full border py-2 px-4 ">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;