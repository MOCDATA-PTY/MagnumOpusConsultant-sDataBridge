import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import StatsCard from "@/components/Dashboard/StatsCard";
import ChartCard from "@/components/Dashboard/ChartCard";
import { Users, DollarSign, Eye, MousePointer, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { title: "Total Visitors", value: "124,892", change: 12.5, icon: Users, color: "primary" as const },
  { title: "Revenue", value: "$48,392", change: 8.2, icon: DollarSign, color: "success" as const },
  { title: "Page Views", value: "892,145", change: -2.4, icon: Eye, color: "accent" as const },
  { title: "Click Rate", value: "3.24%", change: 5.1, icon: MousePointer, color: "warning" as const },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your analytics overview.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </Button>
            <Button variant="gradient" size="sm">
              Create Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={stat.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <ChartCard title="Traffic Overview" type="area" />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <ChartCard title="Channel Performance" type="bar" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-lg font-semibold text-foreground mb-4">Connected Integrations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Google Analytics", status: "Connected", color: "bg-orange-500" },
              { name: "Facebook Ads", status: "Connected", color: "bg-blue-500" },
              { name: "Instagram", status: "Syncing", color: "bg-pink-500" },
              { name: "LinkedIn", status: "Connected", color: "bg-blue-600" },
            ].map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
              >
                <div className={`w-3 h-3 rounded-full ${integration.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{integration.name}</p>
                  <p className="text-xs text-muted-foreground">{integration.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
