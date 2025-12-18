import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check, Plus, Facebook, Instagram, Linkedin, Twitter, Youtube, BarChart3, Mail, ShoppingCart, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const integrations = [
  { id: 1, name: "Google Analytics", icon: BarChart3, color: "bg-orange-500", connected: true, category: "Analytics" },
  { id: 2, name: "Facebook Ads", icon: Facebook, color: "bg-blue-500", connected: true, category: "Social" },
  { id: 3, name: "Instagram", icon: Instagram, color: "bg-pink-500", connected: true, category: "Social" },
  { id: 4, name: "LinkedIn", icon: Linkedin, color: "bg-blue-600", connected: true, category: "Social" },
  { id: 5, name: "Twitter/X", icon: Twitter, color: "bg-sky-400", connected: false, category: "Social" },
  { id: 6, name: "YouTube", icon: Youtube, color: "bg-red-500", connected: false, category: "Social" },
  { id: 7, name: "Mailchimp", icon: Mail, color: "bg-yellow-500", connected: false, category: "Email" },
  { id: 8, name: "Shopify", icon: ShoppingCart, color: "bg-green-500", connected: false, category: "E-commerce" },
  { id: 9, name: "Google Ads", icon: Globe, color: "bg-blue-400", connected: false, category: "Ads" },
];

const categories = ["All", "Analytics", "Social", "Email", "E-commerce", "Ads"];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [connectedItems, setConnectedItems] = useState(
    integrations.filter(i => i.connected).map(i => i.id)
  );

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleConnection = (id: number) => {
    setConnectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Integrations</h1>
            <p className="text-muted-foreground">Connect your favorite platforms and start pulling data.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">{connectedItems.length}</span> of {integrations.length} connected
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration, index) => {
            const isConnected = connectedItems.includes(integration.id);
            return (
              <div
                key={integration.id}
                className={cn(
                  "integration-card animate-slide-up",
                  isConnected && "border-primary/50"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", integration.color)}>
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  {isConnected && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                      <Check className="w-3 h-3" />
                      Connected
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{integration.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{integration.category}</p>
                <Button
                  variant={isConnected ? "outline" : "gradient"}
                  size="sm"
                  className="w-full"
                  onClick={() => toggleConnection(integration.id)}
                >
                  {isConnected ? (
                    "Disconnect"
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-1" />
                      Connect
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No integrations found matching your criteria.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
