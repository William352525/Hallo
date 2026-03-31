const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span className="font-[var(--font-display)] text-xl tracking-tight text-foreground">Studio</span>
        <div className="flex gap-8 text-sm text-muted-foreground font-light">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <h1 className="text-5xl md:text-7xl leading-tight tracking-tight text-foreground max-w-3xl">
          We craft thoughtful digital experiences.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
          A small studio focused on clean design, purposeful interactions, and meaningful work.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-border" />
      </div>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl tracking-tight text-foreground">About</h2>
        </div>
        <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
          <p>
            We believe great design is invisible. It gets out of the way and lets the content speak. Every project starts with understanding the purpose and ends with something that feels effortless.
          </p>
          <p>
            Our approach is rooted in restraint — using only what's necessary to communicate clearly and beautifully.
          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-3xl tracking-tight text-foreground mb-16">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Brand Identity", desc: "Visual system for a modern workspace" },
            { title: "Web Platform", desc: "E-commerce experience redesign" },
            { title: "Mobile App", desc: "Health & wellness companion" },
            { title: "Editorial", desc: "Digital magazine layout system" },
          ].map((item) => (
            <div key={item.title} className="group bg-card rounded-lg p-10 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-[var(--font-display)] text-xl text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
        <div className="h-px bg-border mb-24" />
        <h2 className="text-3xl tracking-tight text-foreground">Let's talk</h2>
        <p className="mt-4 text-muted-foreground font-light">
          hello@studio.com
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-8 text-xs text-muted-foreground font-light">
        © 2026 Studio. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
