import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-slide-up">
          <Zap className="w-4 h-4 text-warning" />
          <span className="text-sm text-muted-foreground">Unify all your data sources in one place</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Transform Your Data Into</span>
          <br />
          <span className="gradient-text">Actionable Insights</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Connect all your marketing platforms, social media, and analytics tools. 
          Create stunning reports and dashboards in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/signup">
            <Button variant="gradient" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="glass" size="xl">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 border border-border/30">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">50+ Integrations</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 border border-border/30">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm text-foreground">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 border border-border/30">
            <Zap className="w-4 h-4 text-warning" />
            <span className="text-sm text-foreground">Real-time Sync</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
