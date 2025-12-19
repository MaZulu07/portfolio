
import React from 'react';
import { X, Download, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, ACHIEVEMENTS, REFERENCES, INTERESTS, SOFT_SKILLS, SKILLS } from '../constants';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  const categories = ['ML/AI', 'Languages', 'Frameworks', 'Tools'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-4xl h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        <div className="absolute top-4 right-4 z-10 flex gap-2 no-print">
          <button 
            onClick={onDownload}
            className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg"
            title="Download PDF"
          >
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 bg-white text-slate-800 border border-slate-200 rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          <div className="md:w-[300px] bg-[#334155] text-white p-6 md:p-8 md:min-h-full">
            <div className="mb-6 mt-2">
               <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2 tracking-wide text-white uppercase">
                 BASETSANA <br/><span className="text-purple-400">ZULU</span>
               </h1>
               <div className="h-1 w-10 bg-purple-500 mb-3 rounded-full"></div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-sm font-bold border-b border-white/20 pb-1.5 mb-3 text-purple-200 uppercase">Contact</h3>
                <div className="space-y-4 text-[12px]">
                   <div>
                     <span className="block text-purple-300 font-bold mb-0.5">Location</span>
                     <div className="text-white/90">{PERSONAL_INFO.address}</div>
                   </div>
                   <div>
                     <span className="block text-purple-300 font-bold mb-0.5">Email</span>
                     <div className="text-white/90 flex items-center gap-2 break-all"><Mail className="w-4 h-4 text-purple-400 flex-shrink-0"/> {PERSONAL_INFO.email}</div>
                   </div>
                   <div>
                     <span className="block text-purple-300 font-bold mb-0.5">Phone</span>
                     <div className="text-white/90 flex items-center gap-2"><Phone className="w-4 h-4 text-purple-400 flex-shrink-0"/> {PERSONAL_INFO.phone}</div>
                   </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold border-b border-white/20 pb-1.5 mb-3 text-purple-200 uppercase">Technical Skills</h3>
                <div className="space-y-4 text-[12px]">
                  {categories.map(cat => {
                    const catSkills = SKILLS.filter(s => s.category === cat);
                    return (
                      <div key={cat}>
                        <span className="block text-purple-300 font-bold mb-1.5">{cat}</span>
                        <ul className="text-white/90 space-y-1 ml-2">
                          {catSkills.map(skill => (
                            <li key={skill.name}>• {skill.name}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold border-b border-white/20 pb-1.5 mb-3 text-purple-200 uppercase">Soft Skills</h3>
                <ul className="space-y-1.5 text-[12px] list-disc list-outside ml-4 text-white/90">
                  {SOFT_SKILLS.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="flex-1 bg-white p-6 md:p-10 text-slate-800">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-purple-600 mb-3">{PERSONAL_INFO.title}</h2>
                <div className="text-slate-600 text-[12px] leading-relaxed">
                   <p>{PERSONAL_INFO.cvSummary}</p>
                </div>
            </div>

            <div className="space-y-8">
              <section>
                 <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-800 pb-1 mb-5 uppercase tracking-widest">Work Experience</h2>
                 {EXPERIENCE.map(exp => (
                   <div key={exp.id} className="mb-6 text-[12px]">
                     <h3 className="font-bold text-slate-800">• {exp.role}</h3>
                     <div className="text-purple-600 font-medium ml-3">{exp.company}</div>
                     <div className="text-slate-500 font-medium italic ml-3">{exp.period}</div>
                   </div>
                 ))}
              </section>

              <section>
                 <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-800 pb-1 mb-5 uppercase tracking-widest">Education</h2>
                 {EDUCATION.map(edu => (
                   <div key={edu.id} className="mb-6 text-[12px]">
                     <h3 className="font-bold text-slate-800">• {edu.degree}</h3>
                     <div className="text-slate-700 ml-3 font-medium">{edu.institution}</div>
                     <div className="text-purple-600 font-medium italic ml-3">{edu.year}</div>
                   </div>
                 ))}
              </section>

              <section>
                 <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-800 pb-1 mb-5 uppercase tracking-widest">References</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[12px]">
                    {REFERENCES.map((ref, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <h4 className="font-bold text-slate-800">• {ref.name}</h4>
                         <div className="text-slate-600 ml-3 leading-tight mb-2">{ref.company} <br/> {ref.role}</div>
                         <a href={`mailto:${ref.contact}`} className="text-purple-600 hover:underline block ml-3 break-all font-medium">{ref.contact}</a>
                      </div>
                    ))}
                 </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
