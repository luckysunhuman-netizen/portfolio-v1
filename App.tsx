
import React, { useState } from 'react';
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
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 print:hidden">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(79,70,229,0.5)]">전</div>
          <span className="font-bold tracking-tight text-lg text-white/90">Jeon Hae-in</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors py-1 relative group">
            About<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors py-1 relative group">
            Projects<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#deep-tech" onClick={(e) => scrollToSection(e, 'deep-tech')} className="hover:text-white transition-colors py-1 relative group">
            Engineering<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#esg" onClick={(e) => scrollToSection(e, 'esg')} className="hover:text-white transition-colors py-1 relative group">
            ESG<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <button 
          type="button"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="bg-white text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all active:scale-95 uppercase shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-slate-200"
        >
          HIRE ME
        </button>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-56 pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {PROFILE.keywords.map(k => (
                <span key={k} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-[10px] font-bold tracking-widest uppercase">
                  {k}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl serif font-bold leading-[1.0] animate-fade-in text-white tracking-tighter">
              Engineering <br />
              <span className="italic gradient-text">The Dream.</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
              {PROFILE.introduction}
            </p>
            <div className="flex space-x-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-indigo-400 tracking-widest font-bold mb-2">Academic</span>
                <span className="text-sm font-medium text-white/90">{PROFILE.education.school} {PROFILE.education.major}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-indigo-400 tracking-widest font-bold mb-2">Focus</span>
                <span className="text-sm font-medium text-white/90">KEPCO ICT & Smart Grid DX</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative group">
             <div className="absolute -inset-10 bg-indigo-500/10 blur-[120px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
             <GeminiImage 
                prompt="Futuristic digital twin of an electrical infrastructure over a sparkling city at night, vast starry sky, moon glow, 4k cinematic technical visualization" 
                className="w-full aspect-square md:aspect-[4/3] rounded-[3rem] relative z-10 border border-white/10 shadow-[0_0_80px_rgba(79,70,229,0.2)]"
             />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 py-32 bg-black/50 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group p-8 rounded-3xl transition-all hover:bg-white/[0.05] border border-transparent hover:border-white/10">
              <p className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-4">{exp.period}</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors leading-tight">{exp.company}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">{exp.role}</p>
              <div className="flex items-center text-xs font-semibold text-emerald-400">
                 <span className="mr-2 text-lg">✦</span> {exp.outcome}
              </div>
            </div>
          ))}
          <div className="lg:col-span-2 glass p-12 rounded-[3rem] flex flex-col justify-center border-l-4 border-l-indigo-500 shadow-glow">
             <h4 className="serif text-4xl font-bold mb-6 italic gradient-text">Vision</h4>
             <p className="text-lg text-slate-200 leading-relaxed font-light italic">
               "문제를 데이터와 논리로 해결하는 엔지니어링 근성을 바탕으로, 전력 인프라 현장과 시스템을 완벽하게 연결하는 ICT 전문가가 되겠습니다."
             </p>
          </div>
        </div>
      </section>

      {/* Projects Section 1 */}
      <section id="projects" className="py-48 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.4em] block">Legacy & Innovation</span>
            <h2 className="text-5xl md:text-6xl serif font-bold text-white tracking-tight">Core Projects</h2>
          </div>
          <div className="text-slate-400 max-w-md font-light lg:text-right">
             AI 비전 및 임베디드 제어 융합을 통한 지능형 변전소 감시 체계의 실제적 구현 사례들을 확인하세요.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section id="deep-tech" className="py-48 bg-black/70 backdrop-blur-md relative z-10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-32 text-center">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.4em] mb-4 block">Deep Tech</span>
            <h2 className="text-5xl md:text-6xl serif font-bold mb-8 text-white">Engineering Excellence</h2>
            <div className="w-24 h-1px bg-indigo-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {PROJECTS.slice(2).map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Knowledge */}
      <section id="skills" className="py-48 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1 space-y-20">
            <div>
              <h2 className="text-4xl serif font-bold mb-12 text-white">Technical Arsenal</h2>
              <div className="space-y-10">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-sm font-bold text-white/90 uppercase tracking-widest">{skill.name}</span>
                      <span className="text-xs text-indigo-400 font-bold">{skill.level}/5</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
               <h3 className="text-2xl font-bold text-white">Certifications</h3>
               <div className="grid grid-cols-1 gap-6">
                 {CERTIFICATIONS.map((cert) => (
                   <div key={cert.name} className="flex justify-between items-center text-sm p-6 glass rounded-3xl hover:bg-white/[0.1] transition-all border-white/10">
                      <span className="text-white font-medium">{cert.name}</span>
                      <span className="text-indigo-400 font-bold text-[10px] tracking-tighter">{cert.date}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 rounded-[3rem] border-white/10 hover:shadow-glow transition-all">
              <h3 className="text-2xl font-bold mb-12 flex items-center text-white">
                 <span className="mr-4 text-indigo-400">📖</span> Lectures
              </h3>
              <div className="space-y-12">
                {BOOKS.map((book) => (
                  <div key={book.title} className="group">
                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors">{book.title}</h4>
                    <p className="text-xs text-slate-400 mb-4">{book.author}</p>
                    <p className="text-base text-slate-300 font-light leading-relaxed italic bg-white/[0.03] p-6 rounded-3xl border border-white/5">"{book.description}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-12 rounded-[3rem] border-white/10">
              <h3 className="text-2xl font-bold mb-12 flex items-center text-white">
                 <span className="mr-4 text-amber-400">🏆</span> Honors
              </h3>
              <div className="space-y-10">
                {AWARDS.map((award) => (
                  <div key={award.name} className="border-l-2 border-indigo-500 pl-8 py-2">
                    <p className="text-white font-bold text-lg leading-tight mb-2">{award.name}</p>
                    <p className="text-sm text-slate-400 font-medium">{award.issuer} | {award.date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20">
                 <GeminiImage prompt="A crystalline tech award glowing under silver moonlight on a dark glass table, city skyline reflection, starry night sky" className="w-full aspect-[4/3] rounded-[2rem] opacity-60 hover:opacity-100 transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanism & ESG */}
      <section id="esg" className="py-48 bg-black/50 backdrop-blur-lg relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.4em] mb-4 block">Values</span>
            <h2 className="text-5xl md:text-6xl serif font-bold text-white">Humanism & ESG</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HUMANISM_ESG.map((item, idx) => (
              <div key={idx} className="glass p-12 rounded-[3rem] border-white/10 group hover:bg-white/[0.1] transition-all">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-8 block">{item.tag}</span>
                <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                <p className="text-base text-slate-300 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-56 px-6 md:px-12 border-t border-white/10 print:hidden relative overflow-hidden bg-black z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-24">
          <div className="space-y-16">
            <h2 className="text-7xl md:text-9xl serif font-bold tracking-tighter leading-none text-white">Start <br /> <span className="italic gradient-text">The Journey.</span></h2>
            <div className="space-y-10">
              <p className="text-slate-300 text-xl max-w-lg font-light leading-relaxed">KEPCO ICT의 미래를 함께 설계할 준비가 되어 있습니다. 데이터와 논리, 그리고 인문학적 통찰을 가진 인재를 찾으신다면 제안을 기다립니다.</p>
              <div className="flex flex-col space-y-8">
                <a href={`mailto:${PROFILE.email}`} className="text-3xl md:text-5xl font-bold text-white hover:text-indigo-400 transition-all flex items-center group">
                  <span className="mr-8 text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">Email</span> {PROFILE.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end space-y-12">
            <div className="flex space-x-8">
               <span className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                 <span className="text-sm font-bold">LinkedIn</span>
               </span>
               <span className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                 <span className="text-sm font-bold">GitHub</span>
               </span>
            </div>
            <div className="text-right">
              <p className="text-[12px] text-slate-500 uppercase tracking-[0.5em] font-bold mb-4">
                Designed for KEPCO ICT Excellence
              </p>
              <p className="text-[12px] text-slate-700 uppercase tracking-[0.3em] font-medium">
                © 2024 Jeon Hae-in. Twinkling in the vast tech sky.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
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
