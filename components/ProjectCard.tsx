
import React from 'react';
import { Project } from '../types';
import GeminiImage from './GeminiImage';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative glass rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <GeminiImage 
          prompt={project.imagePrompt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.keywords.slice(0, 2).map((word, i) => (
              <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                {word}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.name}</h3>
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-indigo-400 text-sm font-medium">{project.period}</p>
          <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
            Explore Details <span className="ml-2">→</span>
          </div>
        </div>
        <div className="flex gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex-1">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Impact</p>
              <p className="text-sm font-bold text-white truncate">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
