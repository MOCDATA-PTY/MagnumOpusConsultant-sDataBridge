const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-32">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/hero-background.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        <div>
          {/* Welcome Text */}
          <p className="text-white/80 text-sm md:text-base font-medium mb-6 tracking-wider uppercase">
            Magnum Opus Consultants
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
            <span className="text-white">Unify all your data </span>
            <span className="gradient-text">sources.</span>
            <br />
            <span className="text-white">Unlock powerful </span>
            <span className="gradient-text">insights.</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            The unified data platform that combines seamless data integration with advanced analytics. Connect, analyze, and visualize your data from any source in one powerful solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
