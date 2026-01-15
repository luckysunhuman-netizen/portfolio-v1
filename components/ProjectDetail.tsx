
import React from 'react';
import { Project } from '../types';
import GeminiImage from './GeminiImage';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-t border-white/10">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h3 className="text-3xl font-bold mb-2 tracking-tight">{project.name}</h3>
          <p className="text-indigo-400 font-medium">{project.period} | {project.role}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="glass p-4 rounded-xl">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">성과 지표</p>
              <p className="text-lg font-semibold text-white">{metric}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p className="text-white font-semibold">Background & Context</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {project.background.map((bg, i) => <li key={i}>{bg}</li>)}
          </ul>
        </div>

        <div className="space-y-4">
           <div className="glass p-5 rounded-xl border-l-4 border-l-indigo-500">
             <p className="text-white font-semibold mb-2">My Role & Tasks</p>
             <p className="text-sm text-slate-300 leading-relaxed">{project.roleDescription}</p>
           </div>
        </div>
      </div>

      <div className="space-y-6">
        <GeminiImage prompt={project.imagePrompt} className="w-full aspect-video shadow-2xl shadow-indigo-500/10" />
        
        <div className="grid grid-cols-2 gap-6">
           <div>
             <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">Problems</h4>
             <ul className="space-y-2">
               {project.problems.map((p, i) => (
                 <li key={i} className="text-xs text-slate-400 flex items-start">
                   <span className="text-red-500 mr-2">•</span> {p}
                 </li>
               ))}
             </ul>
           </div>
           <div>
             <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">Solutions</h4>
             <ul className="space-y-2">
               {project.solutions.map((s, i) => (
                 <li key={i} className="text-xs text-slate-400 flex items-start">
                   <span className="text-emerald-500 mr-2">✓</span> {s}
                 </li>
               ))}
             </ul>
           </div>
        </div>

        <div className="glass p-4 rounded-xl mt-4">
          <p className="text-xs font-semibold text-indigo-300 mb-1 italic">Learnings & Insight</p>
          <p className="text-sm text-slate-300">{project.learnings}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
