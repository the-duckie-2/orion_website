export default function Team() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <header className="mb-24 text-center md:text-left">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/15">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">The Engineering Core</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 font-headline max-w-4xl leading-[0.9]">
          The Minds Behind <span className="text-primary">Orion</span>
        </h1>
        <p className="text-lg text-secondary max-w-2xl leading-relaxed">
          Architecting the next generation of kinetic interfaces. We are a collective of visionaries focused on precision, speed, and the future of digital observation.
        </p>
      </header>
      {/* Team Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Member 1: Daksh Shettar */}
        <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10 transition-all duration-500 hover:border-primary/30 flex flex-col">
          <div className="aspect-[4/5] w-full relative shrink-0">
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl opacity-80">person</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
          </div>
          <div className="p-8 relative -mt-20 flex-grow flex flex-col">
            <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-2xl flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-on-surface font-headline mb-1">Daksh<br />Shettar</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.15em] text-primary mb-6 leading-tight">Founder, CEO & Head of Business Operations</p>
              <div className="flex flex-col gap-4 mt-auto">
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="mailto:daksh@orion-org.net">
                  <span className="material-symbols-outlined text-base">mail</span>
                  daksh@orion-org.net
                </a>
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="https://www.linkedin.com/in/daksh-shettar-67757a329/">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Member 2: Sohom Chakraborty */}
        <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10 transition-all duration-500 hover:border-primary/30 flex flex-col">
          <div className="aspect-[4/5] w-full relative shrink-0">
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl opacity-80">person</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
          </div>
          <div className="p-8 relative -mt-20 flex-grow flex flex-col">
            <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-2xl flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-on-surface font-headline mb-1">Sohom<br />Chakraborty</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.15em] text-primary mb-6 leading-tight">Lead, Cloud-Side Engineering</p>
              <div className="flex flex-col gap-4 mt-auto">
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="mailto:solus@orion-org.net">
                  <span className="material-symbols-outlined text-base">mail</span>
                  solus@orion-org.net
                </a>
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="https://www.linkedin.com/in/sohom-chakraborty-5698622a0/">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Member 3: Shivang Sonker */}
        <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10 transition-all duration-500 hover:border-primary/30 flex flex-col">
          <div className="aspect-[4/5] w-full relative shrink-0">
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl opacity-80">person</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
          </div>
          <div className="p-8 relative -mt-20 flex-grow flex flex-col">
            <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-2xl flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-on-surface font-headline mb-1">Shivang<br />Sonker</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.15em] text-primary mb-6 leading-tight">Lead, Client-Side Architecture</p>
              <div className="flex flex-col gap-4 mt-auto">
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="mailto:shivang@orion-org.net">
                  <span className="material-symbols-outlined text-base">mail</span>
                  shivang@orion-org.net
                </a>
                <a className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm" href="https://www.linkedin.com/in/shivang-sonker-1ba0813b1/">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
