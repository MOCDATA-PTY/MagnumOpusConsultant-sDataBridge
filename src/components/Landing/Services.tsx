import { Database, BarChart2, Zap, Clock, Shield, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Main Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect, analyze, and visualize data from{" "}
            <span className="gradient-text">any source</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A unified platform combining seamless data integration with advanced analytics capabilities.
          </p>
        </div>

        {/* What Can We Help With */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">What can you do with our platform?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Connect Your Data</h4>
              <p className="text-muted-foreground mb-4">Integrate data from databases, APIs, files, and cloud services effortlessly</p>
              <Link to="/signup">
                <Button variant="gradient">Get Started</Button>
              </Link>
            </div>
            <div className="stat-card text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <BarChart2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Analyze & Visualize</h4>
              <p className="text-muted-foreground mb-4">Transform raw data into actionable insights with powerful analytics</p>
              <Link to="/signup">
                <Button variant="gradient">Learn More</Button>
              </Link>
            </div>
            <div className="stat-card text-center">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Automate Workflows</h4>
              <p className="text-muted-foreground mb-4">Set up automated data pipelines and real-time monitoring</p>
              <Link to="/signup">
                <Button variant="gradient">Explore Features</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-4">Why Choose Our Platform?</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Built for data teams who need powerful integration and analytics in one unified solution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Plug className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Universal Connectors</h4>
              <p className="text-sm text-muted-foreground">Connect to any data source with 200+ pre-built integrations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Real-time Processing</h4>
              <p className="text-sm text-muted-foreground">Process and analyze data in real-time with sub-second latency</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">Bank-level encryption and compliance with SOC 2, GDPR, HIPAA</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <BarChart2 className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="font-semibold mb-2">Advanced Analytics</h4>
              <p className="text-sm text-muted-foreground">Built-in ML models and customizable dashboards for deep insights</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-4">How It Works</h3>
          <p className="text-muted-foreground text-center mb-12">Get started in minutes, not months</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="font-semibold mb-2">Connect Your Sources</h4>
              <p className="text-sm text-muted-foreground">Link your databases, APIs, and files with simple authentication</p>
            </div>
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="font-semibold mb-2">Transform & Analyze</h4>
              <p className="text-sm text-muted-foreground">Clean, merge, and analyze your data with our intuitive interface</p>
            </div>
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="font-semibold mb-2">Visualize & Share</h4>
              <p className="text-sm text-muted-foreground">Create stunning dashboards and share insights with your team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
