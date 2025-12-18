import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Check, ExternalLink, Link2, BarChart3 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const platforms = [
  { id: "powerbi", name: "Power BI", icon: "📊", description: "Microsoft Power BI" },
  { id: "looker", name: "Looker Studio", icon: "📈", description: "Google Looker Studio (Data Studio)" },
  { id: "tableau", name: "Tableau", icon: "📉", description: "Tableau Desktop & Online" },
  { id: "excel", name: "Excel", icon: "📗", description: "Microsoft Excel" },
  { id: "sheets", name: "Google Sheets", icon: "📄", description: "Google Sheets" },
  { id: "notion", name: "Notion", icon: "📝", description: "Notion Databases" },
  { id: "airtable", name: "Airtable", icon: "🗂️", description: "Airtable Bases" },
  { id: "custom", name: "Custom API", icon: "🔗", description: "Custom REST API endpoint" },
];

const dataSources = [
  { id: "google-ads", name: "Google Ads" },
  { id: "facebook-ads", name: "Facebook Ads" },
  { id: "google-analytics", name: "Google Analytics V4" },
  { id: "instagram", name: "Instagram Insights" },
  { id: "linkedin", name: "LinkedIn Ads" },
  { id: "tiktok", name: "TikTok Ads" },
  { id: "youtube", name: "YouTube" },
  { id: "shopify", name: "Shopify" },
];

const LinkGenerator = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [linkName, setLinkName] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState<Array<{
    id: string;
    platform: string;
    source: string;
    name: string;
    url: string;
    createdAt: string;
  }>>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const generateLink = () => {
    if (!selectedPlatform || !selectedSource || !linkName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate a link.",
        variant: "destructive",
      });
      return;
    }

    const platform = platforms.find(p => p.id === selectedPlatform);
    const source = dataSources.find(s => s.id === selectedSource);
    
    const newLink = {
      id: Date.now().toString(),
      platform: platform?.name || "",
      source: source?.name || "",
      name: linkName,
      url: `https://api.dataflow.io/v1/connect/${selectedPlatform}/${selectedSource}?key=${btoa(linkName).slice(0, 12)}`,
      createdAt: new Date().toLocaleString(),
    };

    setGeneratedLinks(prev => [newLink, ...prev]);
    setLinkName("");
    
    toast({
      title: "Link Generated!",
      description: `Your ${platform?.name} connection link is ready to use.`,
    });
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    toast({
      title: "Copied!",
      description: "Link copied to clipboard.",
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Link Generator</h1>
          <p className="text-muted-foreground mt-2">
            Generate connection links for Power BI, Looker Studio, and other platforms to pull data from your connected sources.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Generator Form */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-primary" />
                Create New Link
              </h2>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label>Destination Platform</Label>
                  <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {platforms.map((platform) => (
                        <SelectItem key={platform.id} value={platform.id}>
                          <div className="flex items-center gap-2">
                            <span>{platform.icon}</span>
                            <span>{platform.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Data Source</Label>
                  <Select value={selectedSource} onValueChange={setSelectedSource}>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select data source" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {dataSources.map((source) => (
                        <SelectItem key={source.id} value={source.id}>
                          {source.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Link Name</Label>
                  <Input
                    placeholder="e.g., Q4 Marketing Report"
                    value={linkName}
                    onChange={(e) => setLinkName(e.target.value)}
                    className="bg-card border-border"
                  />
                </div>

                <Button variant="gradient" className="w-full" onClick={generateLink}>
                  <Link2 className="w-4 h-4 mr-2" />
                  Generate Link
                </Button>
              </div>
            </div>

            {/* Platform Cards */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Supported Platforms</h3>
              <div className="grid grid-cols-2 gap-2">
                {platforms.slice(0, 6).map((platform) => (
                  <div
                    key={platform.id}
                    className={cn(
                      "p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors cursor-pointer",
                      selectedPlatform === platform.id && "border-primary bg-primary/5"
                    )}
                    onClick={() => setSelectedPlatform(platform.id)}
                  >
                    <div className="text-xl mb-1">{platform.icon}</div>
                    <p className="text-sm font-medium text-foreground">{platform.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Links */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Generated Links
                {generatedLinks.length > 0 && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {generatedLinks.length}
                  </span>
                )}
              </h2>

              {generatedLinks.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Link2 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">No links generated yet</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Select a platform and data source, then generate your first connection link.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedLinks.map((link, index) => (
                    <div
                      key={link.id}
                      className="p-4 rounded-lg bg-secondary/30 border border-border animate-slide-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{link.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {link.platform}
                            </span>
                            <span className="text-xs text-muted-foreground">→</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                              {link.source}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">{link.createdAt}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-xs bg-background/50 rounded px-3 py-2 text-muted-foreground overflow-x-auto">
                          {link.url}
                        </code>
                        <Button
                          variant="outline"
                          size="icon"
                          className="shrink-0"
                          onClick={() => copyToClipboard(link.url, link.id)}
                        >
                          {copiedId === link.id ? (
                            <Check className="w-4 h-4 text-success" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button variant="outline" size="icon" className="shrink-0">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="glass-card p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">How to use your generated links</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm shrink-0">1</div>
                  <div>
                    <p className="font-medium text-foreground">Copy the generated link</p>
                    <p className="text-sm text-muted-foreground">Click the copy button next to your link.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm shrink-0">2</div>
                  <div>
                    <p className="font-medium text-foreground">Open your destination platform</p>
                    <p className="text-sm text-muted-foreground">Go to Power BI, Looker Studio, or your chosen platform.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm shrink-0">3</div>
                  <div>
                    <p className="font-medium text-foreground">Add a new data source</p>
                    <p className="text-sm text-muted-foreground">Use "Web" or "REST API" connector and paste your link.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Helper function for cn
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default LinkGenerator;
