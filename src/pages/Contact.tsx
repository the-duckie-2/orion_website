import { Link } from 'react-router-dom';
import { useWaitlist } from '../context/WaitlistContext';

export default function Contact() {
  const { openModal } = useWaitlist();

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-8 py-24 relative">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-4 block">
            Connect With Precision
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Orion Observatory
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Access our engineering collective. Reach out for technical inquiries or integration support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Card 1 */}
          <div className="bg-surface-container-low border border-white/5 p-8 rounded-xl flex flex-col items-start hover:border-primary/30 transition-colors group">
            <div className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center mb-12 text-primary">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </div>
            <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2">Mail Us</span>
            <a href="mailto:daksh@orion-org.net" className="text-lg font-medium text-on-surface mb-12 group-hover:text-primary transition-colors">
              daksh@orion-org.net
            </a>
            <span className="material-symbols-outlined text-primary mt-auto">arrow_forward</span>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low border border-white/5 p-8 rounded-xl flex flex-col items-start hover:border-primary/30 transition-colors group">
            <div className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center mb-12 text-primary">
              <span className="material-symbols-outlined text-sm">call</span>
            </div>
            <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2">Call Us</span>
            <a href="tel:+918217093257" className="text-lg font-medium text-on-surface mb-12 group-hover:text-primary transition-colors">
              +91 82170 93257
            </a>
            <span className="material-symbols-outlined text-primary mt-auto">arrow_forward</span>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low border border-white/5 p-8 rounded-xl flex flex-col items-start hover:border-primary/30 transition-colors group">
            <div className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center mb-12 text-primary">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </div>
            <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2">Mail Us</span>
            <a href="mailto:solus@orion-org.net" className="text-lg font-medium text-on-surface mb-12 group-hover:text-primary transition-colors">
              solus@orion-org.net
            </a>
            <span className="material-symbols-outlined text-primary mt-auto">arrow_forward</span>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="bg-surface-container-low border border-white/5 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Secure your spot in the future.</h2>
            <p className="text-secondary leading-relaxed">
              Join 100+ developers leveraging the Orion framework for high-fidelity digital infrastructure.
            </p>
          </div>
          <button onClick={openModal} className="kinetic-gradient text-on-primary px-8 py-4 rounded-lg font-bold tracking-wide text-sm whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2">
            Join The Waitlist
          </button>
        </div>
      </div>
    </main>
  );
}
