import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import PageTransition from '../components/PageTransition';
import { RESUME_DATA } from '../data';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
        setIsSent(false);
        setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto min-h-[70vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Let's Talk</h1>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Have a project in mind or just want to chat about AI? I'm currently available for freelance work and internships.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email", value: RESUME_DATA.contact.email, color: "text-cyber-accent", bg: "bg-cyber-accent/10" },
                { icon: <Phone size={20} />, label: "Phone", value: RESUME_DATA.contact.phone, color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: <MapPin size={20} />, label: "Based in", value: RESUME_DATA.contact.location, color: "text-pink-400", bg: "bg-pink-500/10" }
              ].map((item, idx) => (
                <TiltCard key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors" intensity={5}>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-mono uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Form */}
          <TiltCard className="p-8 rounded-3xl relative overflow-hidden bg-white/[0.02] border border-white/10" intensity={3}>
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono text-white/50 uppercase ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyber-accent/50 focus:bg-black/50 transition-all text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono text-white/50 uppercase ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyber-accent/50 focus:bg-black/50 transition-all text-white"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono text-white/50 uppercase ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyber-accent/50 focus:bg-black/50 transition-all resize-none text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSent}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-cyber-accent transition-all duration-300 flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-[1.02]"
                >
                  {isSent ? "Message Sent!" : <>Send Message <Send size={18} /></>}
                </button>
              </form>
          </TiltCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;