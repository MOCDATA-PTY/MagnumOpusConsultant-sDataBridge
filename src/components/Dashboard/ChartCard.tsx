import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const areaData = [
  { name: "Jan", value: 4000, prev: 2400 },
  { name: "Feb", value: 3000, prev: 1398 },
  { name: "Mar", value: 2000, prev: 9800 },
  { name: "Apr", value: 2780, prev: 3908 },
  { name: "May", value: 1890, prev: 4800 },
  { name: "Jun", value: 2390, prev: 3800 },
  { name: "Jul", value: 3490, prev: 4300 },
];

const barData = [
  { name: "Facebook", value: 4000 },
  { name: "Instagram", value: 3000 },
  { name: "Twitter", value: 2000 },
  { name: "LinkedIn", value: 2780 },
  { name: "YouTube", value: 1890 },
];

interface ChartCardProps {
  title: string;
  type: "area" | "bar";
}

const ChartCard = ({ title, type }: ChartCardProps) => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === "area" ? (
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(201, 91%, 23%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(201, 91%, 23%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174, 72%, 40%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(174, 72%, 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(201, 91%, 23%)"
                fillOpacity={1}
                fill="url(#colorValue)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="prev"
                stroke="hsl(174, 72%, 40%)"
                fillOpacity={1}
                fill="url(#colorPrev)"
                strokeWidth={2}
              />
            </AreaChart>
          ) : (
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Bar dataKey="value" fill="hsl(201, 91%, 23%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
