import { useTheme } from '../contexts/ThemeContext';
import ProjectsSlider from './ProjectsSlider';

// Dedicated component for project details content
const ProjectDetails = ({ project }) => {
  const { themeClasses, isDarkMode } = useTheme();

  return (
    <div>
      <div className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div>
            <div className="grid grid-cols-1 gap-4">
            <ProjectsSlider 
                project={project}
                themeClasses={themeClasses}
                isDarkMode={isDarkMode}
            />
            </div>

        <div className="mt-6">
        
        </div>
        </div>
      </div>
        {/* Add any other project fields you want to display */}
    </div>
  );
};

export default ProjectDetails;