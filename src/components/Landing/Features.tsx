import { Database, BarChart2, FileText, Plug, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: Plug,
    title: "50+ Integrations",
    description: "Connect to Google Analytics, Facebook Ads, Instagram, LinkedIn, Twitter, and many more platforms.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboards",
    description: "Visualize your data with beautiful, customizable charts and graphs that update in real-time.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Schedule and automate your reports. Export to PDF, Excel, or share live dashboards with your team.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Database,
    title: "Data Warehouse",
    description: "Store and query your historical data. Never lose insights from past campaigns.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Clock,
    title: "Historical Analysis",
    description: "Compare performance over time with powerful date range comparisons and trend analysis.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data is always secure.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Master Your Data</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed to help you collect, visualize, and act on your marketing data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="stat-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
