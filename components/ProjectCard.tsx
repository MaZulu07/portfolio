import React from 'react';
import { Github, ExternalLink, Box, Sparkles, Video } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const handleCardClick = () => {
    onViewDetails(project);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative bg-white border border-purple-100 rounded-2xl overflow-hidden hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 flex flex-col h-full hover:-translate-y-1 shadow-sm cursor-pointer"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors pr-2 font-serif">
              {project.title}
            </h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap border font-sans ${
                project.category === 'Capstone' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                project.category === 'Featured' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
                {project.category === 'Capstone' ? '👑 Capstone' : 
                 project.category === 'Featured' ? '✨ Featured' :
                 '💻 Bootcamp'}
            </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed font-sans">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-200 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors font-sans">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100 font-sans">
           <div className="text-sm text-purple-600 hover:text-purple-500 font-medium flex items-center gap-1">
             <Sparkles className="w-4 h-4" /> View Details
           </div>
           
           <div className="flex gap-3">
             {project.repoUrl && (
               <a 
                 href={project.repoUrl} 
                 onClick={handleLinkClick}
                 className="text-slate-400 hover:text-purple-600 transition-colors z-10" 
                 title="View Code"
                 target="_blank"
                 rel="noreferrer"
               >
                 <Github className="w-5 h-5" />
               </a>
             )}
             {project.demoUrl && (
               <a 
                 href={project.demoUrl} 
                 onClick={handleLinkClick}
                 className="text-slate-400 hover:text-purple-600 transition-colors z-10" 
                 title="Live Demo"
                 target="_blank"
                 rel="noreferrer"
               >
                 <ExternalLink className="w-5 h-5" />
               </a>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
