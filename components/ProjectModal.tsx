
import React, { useEffect } from 'react';
import { Project } from '../types';
import GeminiImage from './GeminiImage';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[2.5rem] overflow-hidden flex flex-col animate-fade-in shadow-2xl border-white/10 shadow-indigo-500/20">
        {/* Header */}
        <div className="p-8 md:p-12 flex justify-between items-start border-b border-white/5 shrink-0">
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-4">
              Project Deep Dive
            </div>
            <h2 className="text-4xl md:text-5xl serif font-bold mb-2">{project.name}</h2>
            <p className="text-slate-400 font-medium">{project.period} • {project.role}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-95"
          >
            <span className="text-2xl font-light group-hover:rotate-90 transition-transform">✕</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-8 md:p-12 space-y-16 custom-scrollbar">
          {/* KEPCO STRATEGIC ALIGNMENT (High Priority) */}
          <div className="p-10 glass rounded-[2.5rem] bg-indigo-600/10 border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.1)]">
             <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">전</div>
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">KEPCO Strategic Alignment</h4>
             </div>
             <p className="text-lg text-indigo-100 leading-relaxed font-light italic">
                "{project.kepcoVision}"
             </p>
          </div>

          {/* Top Grid: Visuals + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <GeminiImage prompt={project.imagePrompt} className="w-full aspect-video rounded-3xl shadow-2xl" />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Key Metrics</h4>
                <div className="space-y-4">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="glass p-5 rounded-2xl border-l-4 border-l-emerald-500">
                      <p className="text-lg font-bold text-white">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Challenge</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                {project.background.map((bg, i) => (
                  <p key={i}>{bg}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Engineering Implementation</h3>
              <div className="glass p-8 rounded-3xl border-l-4 border-l-indigo-500 bg-indigo-500/5">
                <p className="text-slate-200 leading-relaxed font-light">
                  {project.roleDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Problem/Solution Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">⚠</div>
                <h4 className="text-xl font-bold text-red-100">Problems Encountered</h4>
              </div>
              <ul className="space-y-3">
                {project.problems.map((p, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start">
                    <span className="text-red-500/50 mr-3 mt-1">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">✓</div>
                <h4 className="text-xl font-bold text-emerald-100">Engineering Solutions</h4>
              </div>
              <ul className="space-y-3">
                {project.solutions.map((s, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start">
                    <span className="text-emerald-500/50 mr-3 mt-1">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Footer */}
          <div className="p-12 glass rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent text-center space-y-4 mb-8">
             <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Growth & Insight</h4>
             <p className="text-2xl serif italic font-bold text-white leading-snug">
               "{project.learnings}"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
