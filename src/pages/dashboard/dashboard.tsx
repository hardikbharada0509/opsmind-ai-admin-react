import { useDashboard } from "./hooks/useDashboard";
import { PageHeader } from "../../components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Activity, Users, ActivitySquare, Ticket } from "lucide-react";

const DashboardPage = () => {
  const { stats, recentActivity } = useDashboard();

  const mockCards = [
    { title: "Active Users", value: stats.activeUsers, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "New Signups", value: stats.newSignups, icon: ActivitySquare, color: "text-green-600", bg: "bg-green-100" },
    { title: "Server Uptime", value: stats.serverUptime, icon: Activity, color: "text-indigo-600", bg: "bg-indigo-100" },
    { title: "Pending Tickets", value: stats.pendingTickets, icon: Ticket, color: "text-amber-600", bg: "bg-amber-100" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <PageHeader
        title="Dashboard Overview"
        description="High-level metrics and recent activities for your application."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockCards.map((card, i) => (
          <Card key={i}>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className={`p-3 rounded-full ${card.bg}`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
