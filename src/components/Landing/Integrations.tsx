import { Facebook, Instagram, Linkedin, Twitter, Youtube, BarChart3 } from "lucide-react";

const integrations = [
  { name: "Facebook Ads", icon: Facebook, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "Twitter/X", icon: Twitter, color: "text-sky-400", bg: "bg-sky-400/10" },
  { name: "YouTube", icon: Youtube, color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Google Analytics", icon: BarChart3, color: "text-orange-500", bg: "bg-orange-500/10" },
];

const Integrations = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect Your <span className="gradient-text">Favorite Platforms</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamlessly integrate with 50+ marketing and analytics platforms. Pull in data with one click.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="integration-card flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${integration.bg} flex items-center justify-center mb-3`}>
                <integration.icon className={`w-7 h-7 ${integration.color}`} />
              </div>
              <span className="text-sm font-medium text-foreground">{integration.name}</span>
            </div>
          ))}
        </div>

        {/* More Integrations Note */}
        <p className="text-center mt-8 text-muted-foreground">
          + 44 more integrations including Google Ads, TikTok, Shopify, HubSpot, and more
        </p>
      </div>
    </section>
  );
};

export default Integrations;
