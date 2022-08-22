import { projectData } from './projectData';
import ProjectCard from './projectCard';

const Project = () => {
  return (
    <div>
        {
            projectData.map((item, index) => (
                <ProjectCard
                  data={item}
                  num ={index} 
                  key={index}
                  />
            ))
        }
    </div>
  )
}

export default Project