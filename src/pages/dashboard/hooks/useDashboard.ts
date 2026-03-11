import { useState } from "react";

export const useDashboard = () => {
  const [stats] = useState({
    activeUsers: 1420,
    newSignups: 45,
    serverUptime: "99.99%",
    pendingTickets: 12
  });

  const [recentActivity] = useState([
    { id: 1, action: "User 'john_doe' registered", time: "2 hours ago" },
    { id: 2, action: "Server restart initiated", time: "5 hours ago" },
    { id: 3, action: "Database backup completed", time: "1 day ago" },
  ]);

  return {
    stats,
    recentActivity
  };
};
