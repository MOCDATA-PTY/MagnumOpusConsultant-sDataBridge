import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: "primary" | "accent" | "success" | "warning";
}

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
  },
  warning: {
    bg: "bg-warning/10",
    text: "text-warning",
  },
};

const StatsCard = ({ title, value, change, icon: Icon, color }: StatsCardProps) => {
  const isPositive = change >= 0;
  const colors = colorClasses[color];

  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colors.bg)}>
          <Icon className={cn("w-5 h-5", colors.text)} />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-sm font-medium",
          isPositive ? "text-success" : "text-destructive"
        )}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
};

export default StatsCard;
