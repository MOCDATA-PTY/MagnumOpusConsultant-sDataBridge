import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileText, Calendar, Download, MoreHorizontal, Eye } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const reports = [
  {
    id: 1,
    name: "Monthly Marketing Overview",
    type: "Dashboard",
    lastModified: "Dec 15, 2024",
    status: "Published",
    views: 234,
  },
  {
    id: 2,
    name: "Q4 Social Media Performance",
    type: "Report",
    lastModified: "Dec 14, 2024",
    status: "Draft",
    views: 45,
  },
  {
    id: 3,
    name: "Campaign ROI Analysis",
    type: "Report",
    lastModified: "Dec 12, 2024",
    status: "Published",
    views: 189,
  },
  {
    id: 4,
    name: "Weekly Traffic Report",
    type: "Automated",
    lastModified: "Dec 18, 2024",
    status: "Published",
    views: 567,
  },
  {
    id: 5,
    name: "Customer Acquisition Cost",
    type: "Dashboard",
    lastModified: "Dec 10, 2024",
    status: "Published",
    views: 312,
  },
];

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Create, manage, and share your analytics reports.</p>
          </div>
          <Button variant="gradient">
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>

        {/* Reports Table */}
        <div className="glass-card overflow-hidden animate-slide-up">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Last Modified</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Views</TableHead>
                <TableHead className="text-muted-foreground w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id} className="border-border hover:bg-secondary/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{report.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground">{report.type}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {report.lastModified}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === "Published"
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }`}>
                      {report.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      {report.views}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No reports found matching your search.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Reports;
