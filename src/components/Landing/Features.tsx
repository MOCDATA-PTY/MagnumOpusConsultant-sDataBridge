import { Database, BarChart2, TrendingUp, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Animated Data Flow */}
        <div className="relative">
          {/* Background animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 animate-gradient-x"></div>

          <div className="relative grid md:grid-cols-4 gap-8 py-16 px-8">
            {/* Step 1: Collect */}
            <div className="flex flex-col items-center text-center animate-float" style={{ animationDelay: "0s" }}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg animate-pulse-glow">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collect</h3>
              <p className="text-muted-foreground text-sm">Gather data from all your sources</p>
              <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            </div>

            {/* Step 2: Analyze */}
            <div className="flex flex-col items-center text-center animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
                <BarChart2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analyze</h3>
              <p className="text-muted-foreground text-sm">Process and understand patterns</p>
              <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            </div>

            {/* Step 3: Visualize */}
            <div className="flex flex-col items-center text-center animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg animate-pulse-glow" style={{ animationDelay: "1s" }}>
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visualize</h3>
              <p className="text-muted-foreground text-sm">Beautiful charts and insights</p>
              <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-pink-500 to-green-500 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
            </div>

            {/* Step 4: Act */}
            <div className="flex flex-col items-center text-center animate-float" style={{ animationDelay: "0.6s" }}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg animate-pulse-glow" style={{ animationDelay: "1.5s" }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Act</h3>
              <p className="text-muted-foreground text-sm">Make data-driven decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
