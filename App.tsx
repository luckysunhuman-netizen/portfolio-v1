
import React, { useState, useMemo } from 'react';
import { 
  PROFILE, 
  PROJECTS, 
  EXPERIENCES, 
  SKILLS, 
  BOOKS, 
  CERTIFICATIONS, 
  AWARDS,
  HUMANISM_ESG,
  COMMUNICATION
} from './constants';
import GeminiImage from './components/GeminiImage';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLElement> | null, id: string) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const coreProjects = useMemo(() => PROJECTS.slice(0, 2), []);
  const deepTechProjects = useMemo(() => PROJECTS.slice(2), []);

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30 bg-transparent z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] glass border-b-0 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-500 print:hidden">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={(e) => scrollToSection(e, 'about')}>
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.5)] group-hover:scale-110 transition-transform">전</div>
          <span className="font-bold tracking-tight text-lg text-white/95 hidden sm:block">Jeon Hae-in</span>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-400">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors py-1 relative group">
            Dreaming<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors py-1 relative group">
            Innovation<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#deep-tech" onClick={(e) => scrollToSection(e, 'deep-tech')} className="hover:text-white transition-colors py-1 relative group">
            Excellence<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#esg" onClick={(e) => scrollToSection(e, 'esg')} className="hover:text-white transition-colors py-1 relative group">
            Values<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <button 
          type="button"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="bg-white text-black text-[10px] font-bold px-7 py-3 rounded-full transition-all active:scale-95 uppercase shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-slate-100"
        >
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-60 pb-48 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-12 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 animate-slide-up">
              {PROFILE.keywords.map(k => (
                <span key={k} className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-[10px] font-bold tracking-widest uppercase">
                  {k}
                </span>
              ))}
            </div>
            <div className="space-y-6">
               <h1 className="text-6xl md:text-8xl serif font-bold leading-[0.95] animate-slide-up text-white tracking-tighter" style={{ animationDelay: '0.1s' }}>
                 Building <br />
                 <span className="italic gradient-text">The Dream.</span>
               </h1>
               <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.3s' }}>
                 {PROFILE.introduction}
               </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-indigo-400 tracking-widest font-black mb-3">Academic Base</span>
                <span className="text-sm font-semibold text-white/90">{PROFILE.education.school} {PROFILE.education.major}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-indigo-400 tracking-widest font-black mb-3">Target Field</span>
                <span className="text-sm font-semibold text-white/90">Digital Substation & KEPCO ICT</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative group perspective-1000">
             <div className="absolute -inset-16 bg-indigo-500/10 blur-[130px] rounded-full group-hover:bg-indigo-500/15 transition-all duration-1000"></div>
             <GeminiImage 
                prompt="Futuristic digital command center overlooking a sparkling city at night, vast starry sky with a bright crescent moon, hologram power grids, cinematic 4k aesthetic" 
                className="w-full aspect-square md:aspect-[4/3] rounded-[3.5rem] relative z-10 border border-white/5 shadow-[0_0_100px_rgba(79,70,229,0.15)] transition-all duration-700 hover:scale-[1.01]"
             />
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="px-6 md:px-12 py-32 bg-black/20 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group p-10 rounded-[2rem] transition-all hover:bg-white/[0.03] border border-transparent hover:border-white/5">
              <p className="text-[10px] font-black text-indigo-400 tracking-widest uppercase mb-5">{exp.period}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors leading-tight">{exp.company}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">{exp.role}</p>
              <div className="flex items-center text-xs font-bold text-indigo-300">
                 <span className="mr-3 text-lg">✦</span> {exp.outcome}
              </div>
            </div>
          ))}
          <div className="lg:col-span-2 glass p-14 rounded-[3.5rem] flex flex-col justify-center border-l-8 border-l-indigo-600 shadow-[0_0_60px_rgba(79,70,229,0.1)]">
             <h4 className="serif text-4xl font-bold mb-8 italic gradient-text">Engineer's Creed</h4>
             <p className="text-xl text-slate-200 leading-relaxed font-light italic">
               "데이터와 논리로 무장하여 전력 계통의 안정성을 수호하고, AI를 통해 더 나은 에너지를 실현하는 전문가가 되겠습니다."
             </p>
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section id="projects" className="py-56 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-transparent">
        <div className="mb-28 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-6">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em] block">Phase 01</span>
            <h2 className="text-6xl md:text-7xl serif font-bold text-white tracking-tighter">Core Innovation</h2>
          </div>
          <div className="text-slate-400 max-w-lg font-light lg:text-right text-lg">
             AI 비전 및 임베디드 펌웨어 최적화로 <br className="hidden lg:block"/> 구현한 지능형 감시 시스템
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {coreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      {/* Engineering Excellence */}
      <section id="deep-tech" className="py-56 bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-36 text-center">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em] mb-6 block">Phase 02</span>
            <h2 className="text-6xl md:text-7xl serif font-bold mb-10 text-white tracking-tighter">Deep Tech Excellence</h2>
            <div className="w-24 h-1px bg-indigo-500/50 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {deepTechProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="skills" className="py-56 px-6 md:px-12 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-32">
          <div className="lg:col-span-1 space-y-24">
            <div>
              <h2 className="text-5xl serif font-bold mb-14 text-white tracking-tight">Tech Stack</h2>
              <div className="space-y-12">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-sm font-bold text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-[10px] text-indigo-400 font-black">{skill.level}/5</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-1000" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
               <h3 className="text-3xl font-bold text-white tracking-tight">Credentials</h3>
               <div className="grid grid-cols-1 gap-6">
                 {CERTIFICATIONS.map((cert) => (
                   <div key={cert.name} className="flex justify-between items-center text-xs p-7 glass rounded-[2rem] hover:bg-white/[0.08] transition-all border-white/5">
                      <span className="text-slate-200 font-semibold">{cert.name}</span>
                      <span className="text-indigo-400 font-black tracking-tighter">{cert.date}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="glass p-14 rounded-[3.5rem] border-white/5 hover:border-indigo-500/20 transition-all">
              <h3 className="text-3xl font-bold mb-14 flex items-center text-white tracking-tight">
                 <span className="mr-5 text-indigo-400 text-4xl">📖</span> Foundations
              </h3>
              <div className="space-y-14">
                {BOOKS.map((book) => (
                  <div key={book.title} className="group">
                    <h4 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-300 transition-colors">{book.title}</h4>
                    <p className="text-[10px] text-slate-500 font-black uppercase mb-5">{book.author}</p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed italic p-7 rounded-[2rem] bg-indigo-500/[0.02] border border-white/5">"{book.description}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-14 rounded-[3.5rem] border-white/5">
              <h3 className="text-3xl font-bold mb-14 flex items-center text-white tracking-tight">
                 <span className="mr-5 text-amber-500 text-4xl">🏆</span> Honors
              </h3>
              <div className="space-y-12">
                {AWARDS.map((award) => (
                  <div key={award.name} className="border-l-4 border-indigo-600 pl-8 py-3">
                    <p className="text-white font-bold text-xl leading-snug mb-2">{award.name}</p>
                    <p className="text-xs text-slate-500 font-semibold">{award.issuer} | {award.date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-24">
                 <GeminiImage prompt="Abstract crystal trophy glowing in a starry night city background, elegant technical silhouette, high-end 3d render" className="w-full aspect-[4/3] rounded-[2.5rem] opacity-60 hover:opacity-100 transition-all duration-1000 grayscale hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="esg" className="py-56 bg-black/10 backdrop-blur-sm relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-28 text-center">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.5em] mb-6 block">Integrity</span>
            <h2 className="text-6xl md:text-7xl serif font-bold text-white tracking-tighter">Social & Human Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {HUMANISM_ESG.map((item, idx) => (
              <div key={idx} className="glass p-12 rounded-[3.5rem] border-white/5 group hover:bg-indigo-600/5 transition-all">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-10 block">{item.tag}</span>
                <h4 className="text-2xl font-bold mb-7 text-white group-hover:text-indigo-300 transition-colors leading-tight">{item.title}</h4>
                <p className="text-base text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <footer id="contact" className="py-64 px-6 md:px-12 border-t border-white/5 print:hidden relative overflow-hidden bg-transparent z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-32">
          <div className="space-y-20">
            <h2 className="text-7xl md:text-[10rem] serif font-bold tracking-tighter leading-none text-white">Let's <br /> <span className="italic gradient-text">Connect.</span></h2>
            <div className="space-y-12">
              <p className="text-slate-300 text-2xl max-w-xl font-light leading-relaxed">KEPCO ICT의 미래를 함께 설계할 준비가 되어 있습니다. 열정과 논리를 갖춘 인재가 필요하시다면 지금 바로 연락주세요.</p>
              <div className="flex flex-col space-y-10">
                <a href={`mailto:${PROFILE.email}`} className="text-4xl md:text-6xl font-bold text-white hover:text-indigo-400 transition-all flex items-center group overflow-hidden">
                  <span className="mr-10 text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">Direct Email</span> 
                  <span className="relative">
                    {PROFILE.email}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end space-y-16">
            <div className="flex space-x-10">
               <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl backdrop-blur-md">
                 <span className="text-sm font-black">LI</span>
               </div>
               <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl backdrop-blur-md">
                 <span className="text-sm font-black">GH</span>
               </div>
            </div>
            <div className="text-right space-y-4">
              <p className="text-[12px] text-slate-500 uppercase tracking-[0.6em] font-black">
                KEPCO ICT Specialist Portfolio
              </p>
              <p className="text-[12px] text-slate-700 uppercase tracking-[0.3em] font-bold italic">
                © 2024 Jeon Hae-in. All stars aligned.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
