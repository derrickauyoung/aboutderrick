import { useTheme } from '../contexts/ThemeContext';

// Dedicated component for project details content
const ProjectDetails = ({ project }) => {
  const { themeClasses, isDarkMode } = useTheme();

  const ProjectItem = ({ projectitem, index }) => (
    <div className={`p-4 rounded-lg ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
    }`}>
        <h4 className={`font-medium mb-2 ${themeClasses.textPrimary}`}>
        🚀 {projectitem.title}
        </h4>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
        {projectitem.description}
        </p>
        {projectitem.outcome && (
            <p className={`mt-2 text-sm italic ${themeClasses.textSecondary}`}>
                <strong>Outcome:</strong> {projectitem.outcome}
            </p>
        )}
        {projectitem.codeurl && (
            <a href={projectitem.codeurl}>Github Link</a>
        )}
    </div>
  );

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${themeClasses.textPrimary}`}>
            Key Initiatives
          </h3>
          <div className="space-y-4">
            {project.projectitems.map((projectitem, index) => (
                <ProjectItem 
                    key={index} 
                    projectitem={projectitem} 
                    index={index} 
                />
                ))}
          </div>

        <div className="mt-6">
        
        </div>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, techIndex) => (
            <span 
            key={techIndex}
            className={`
                px-3 py-1 text-xs rounded-full font-medium transition-colors duration-200
                ${isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
            `}
            >
            {tech}
            </span>
        ))}
        </div>
        </div>
      </div>
        {/* Add any other project fields you want to display */}
    </div>
  );
};

export default ProjectDetails;