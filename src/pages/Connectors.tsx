import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check, Plus, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// All connector data
const connectors = [
  { id: 1, name: "Google Ads", category: "Advertising", connected: true, icon: "🔍" },
  { id: 2, name: "Amazon Ads", category: "Advertising", connected: false, icon: "📦" },
  { id: 3, name: "Amazon DSP", category: "Advertising", connected: false, icon: "📦", badge: "Early Access" },
  { id: 4, name: "Google Analytics V4", category: "Analytics", connected: true, icon: "📊" },
  { id: 5, name: "Apple Search Ads", category: "Advertising", connected: false, icon: "🍎" },
  { id: 6, name: "Appsflyer", category: "Analytics", connected: false, icon: "📱" },
  { id: 7, name: "BigQuery", category: "Database", connected: true, icon: "🗄️" },
  { id: 8, name: "Microsoft Advertising", category: "Advertising", connected: false, icon: "🪟" },
  { id: 9, name: "Criteo", category: "Advertising", connected: false, icon: "🎯" },
  { id: 10, name: "Criteo Retail Media", category: "Advertising", connected: false, icon: "🎯", badge: "Early Access" },
  { id: 11, name: "Database", category: "Database", connected: false, icon: "💾" },
  { id: 12, name: "DV360", category: "Advertising", connected: false, icon: "📺" },
  { id: 13, name: "DCM", category: "Advertising", connected: false, icon: "📢" },
  { id: 14, name: "Excel", category: "Spreadsheet", connected: true, icon: "📗" },
  { id: 15, name: "Facebook Ads", category: "Social", connected: true, icon: "📘" },
  { id: 16, name: "Facebook Insights", category: "Social", connected: true, icon: "📘" },
  { id: 17, name: "Facebook Public Data", category: "Social", connected: false, icon: "📘" },
  { id: 18, name: "G2", category: "Reviews", connected: false, icon: "⭐", badge: "Early Access" },
  { id: 19, name: "Google My Business", category: "Local", connected: false, icon: "📍" },
  { id: 20, name: "Google Ad Manager", category: "Advertising", connected: false, icon: "📰" },
  { id: 21, name: "Google Keyword Planner", category: "SEO", connected: false, icon: "🔑" },
  { id: 22, name: "Google Merchant Center", category: "E-commerce", connected: false, icon: "🛒" },
  { id: 23, name: "Google Sheets", category: "Spreadsheet", connected: true, icon: "📄" },
  { id: 24, name: "Google Trends", category: "Analytics", connected: false, icon: "📈" },
  { id: 25, name: "HubSpot", category: "CRM", connected: false, icon: "🧡" },
  { id: 26, name: "Instagram Insights", category: "Social", connected: true, icon: "📸" },
  { id: 27, name: "Instagram Public Data", category: "Social", connected: false, icon: "📸" },
  { id: 28, name: "JSON/CSV/XML", category: "Data", connected: false, icon: "📋" },
  { id: 29, name: "Klaviyo", category: "Email", connected: false, icon: "📧" },
  { id: 30, name: "LinkedIn Ads", category: "Social", connected: false, icon: "💼" },
  { id: 31, name: "LinkedIn Pages", category: "Social", connected: false, icon: "💼" },
  { id: 32, name: "Mailchimp", category: "Email", connected: false, icon: "🐵" },
  { id: 33, name: "MongoDB", category: "Database", connected: false, icon: "🍃" },
  { id: 34, name: "Omniwallet", category: "Finance", connected: false, icon: "💰", badge: "Early Access" },
  { id: 35, name: "Pinterest", category: "Social", connected: false, icon: "📌" },
  { id: 36, name: "Reddit Ads", category: "Social", connected: false, icon: "🤖" },
  { id: 37, name: "Google Search Console", category: "SEO", connected: true, icon: "🔍" },
  { id: 38, name: "Search Ads 360", category: "Advertising", connected: false, icon: "🔎" },
  { id: 39, name: "Shopify", category: "E-commerce", connected: false, icon: "🛍️" },
  { id: 40, name: "Snapchat Ads", category: "Social", connected: false, icon: "👻" },
  { id: 41, name: "Spotify Ads", category: "Audio", connected: false, icon: "🎵" },
  { id: 42, name: "Stripe", category: "Finance", connected: false, icon: "💳" },
  { id: 43, name: "TikTok Ads", category: "Social", connected: false, icon: "🎵" },
  { id: 44, name: "TikTok Insights", category: "Social", connected: false, icon: "🎵" },
  { id: 45, name: "X Ads (Twitter)", category: "Social", connected: false, icon: "𝕏" },
  { id: 46, name: "X Insights (Twitter)", category: "Social", connected: false, icon: "𝕏" },
  { id: 47, name: "WooCommerce", category: "E-commerce", connected: false, icon: "🛒" },
  { id: 48, name: "YouTube", category: "Video", connected: true, icon: "▶️" },
  { id: 49, name: "Zoho", category: "CRM", connected: false, icon: "📊", badge: "Early Access" },
];

const categories = ["All", "Advertising", "Analytics", "Social", "Database", "E-commerce", "Email", "CRM", "SEO", "Spreadsheet", "Finance", "Video", "Audio"];

const Connectors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [connectedItems, setConnectedItems] = useState(
    connectors.filter(c => c.connected).map(c => c.id)
  );

  const filteredConnectors = connectors.filter(connector => {
    const matchesSearch = connector.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || connector.category === activeCategory;
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
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Hub Connectors</h1>
          <p className="text-muted-foreground mt-2">
            Manage connections between DataFlow and the data sources you use in your reporting.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="stat-card">
            <p className="text-muted-foreground text-sm">Total Connectors</p>
            <p className="text-2xl font-bold text-foreground">{connectors.length}</p>
          </div>
          <div className="stat-card">
            <p className="text-muted-foreground text-sm">Connected</p>
            <p className="text-2xl font-bold text-success">{connectedItems.length}</p>
          </div>
          <div className="stat-card">
            <p className="text-muted-foreground text-sm">Available</p>
            <p className="text-2xl font-bold text-foreground">{connectors.length - connectedItems.length}</p>
          </div>
          <div className="stat-card">
            <p className="text-muted-foreground text-sm">Categories</p>
            <p className="text-2xl font-bold text-foreground">{categories.length - 1}</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search connectors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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

        {/* Connectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredConnectors.map((connector, index) => {
            const isConnected = connectedItems.includes(connector.id);
            return (
              <div
                key={connector.id}
                className={cn(
                  "integration-card animate-slide-up",
                  isConnected && "border-primary/50"
                )}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                    {connector.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {connector.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-warning/20 text-warning text-xs font-medium">
                        {connector.badge}
                      </span>
                    )}
                    {isConnected && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/20 text-success text-xs font-medium">
                        <Check className="w-3 h-3" />
                        Connected
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{connector.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{connector.category}</p>
                <Button
                  variant={isConnected ? "outline" : "default"}
                  size="sm"
                  className="w-full"
                  onClick={() => toggleConnection(connector.id)}
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

        {filteredConnectors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No connectors found matching your criteria.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Connectors;
