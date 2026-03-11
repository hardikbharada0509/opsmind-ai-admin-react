import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, Menu } from "lucide-react";
import { cn } from "../../../utils";
import { Button } from "../../../components/common/Button";

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  React.useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard }
  ];

  const handleLogout = () => {
    // Mock logout logic
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "bg-slate-900 text-slate-300 w-64 flex-shrink-0 flex flex-col transition-all duration-300 z-50",
          "fixed inset-y-0 left-0 md:relative",
          !sidebarOpen ? "-translate-x-full md:translate-x-0 md:-ml-64" : "translate-x-0"
        )}
      >
        <div className="h-16 flex items-center px-4 bg-slate-950 font-bold text-white tracking-widest text-lg border-b border-slate-800">
          OpsMind AI Admin
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2.5">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-3.5 text-sm font-medium rounded-md group transition-colors",
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 flex-shrink-0 h-5 w-5",
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-slate-800"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Top Bar */}
        <header className="h-16 flex items-center justify-between px-4 bg-white border-b border-slate-200 shadow-sm flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-500 hover:text-slate-700 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-slate-700 hidden sm:block">
              Welcome, Admin
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Scrollable Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
