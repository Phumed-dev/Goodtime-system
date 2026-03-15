import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import {
  HiArrowRight,
  HiMenu,
  HiX,
  HiHome,
  HiShoppingCart,
  HiChartBar,
  HiCog,
  HiUser,
  HiLogout,
  HiBell,
  HiSearch,
} from "react-icons/hi";

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { icon: HiHome, label: "Dashboard", href: "#" },
    { icon: HiShoppingCart, label: "Orders", href: "/add-order" },
    { icon: HiChartBar, label: "Analytics", href: "#" },
    { icon: HiCog, label: "Settings", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none transition"
              >
                {sidebarOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GT</span>
                </div>
                <span className="hidden sm:inline text-xl font-bold text-gray-900">
                  GoodTime
                </span>
              </Link>
            </div>

            {/* Center - Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side - Icons and User */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <HiBell className="h-6 w-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <HiUser className="h-6 w-6" />
              </button>
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-30 w-64 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          {/* Sidebar Header */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main Menu
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition group"
                >
                  <Icon className="h-5 w-5 group-hover:text-indigo-400" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-gray-800"></div>

          {/* Quick Links */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
              >
                <span className="text-2xl">📊</span>
                <span>Reports</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
              >
                <span className="text-2xl">📋</span>
                <span>Templates</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
              >
                <span className="text-2xl">🔔</span>
                <span>Notifications</span>
              </a>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-red-900/20 hover:text-red-400 rounded-lg transition font-medium">
              <HiLogout className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="pt-20 lg:pl-64">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold">
              Welcome to{" "}
              <span className="text-indigo-200">GoodTime System</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-indigo-100">
              Manage your orders efficiently with our modern order management
              system. Create, track, and organize orders all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/add-order">
                <Button size="lg" color="light" className="w-full sm:w-auto">
                  Create New Order
                  <HiArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" color="gray" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-12 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">1,234</p>
                <p className="text-gray-600">Total Orders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">856</p>
                <p className="text-gray-600">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">98.5%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">24h</p>
                <p className="text-gray-600">Avg. Fulfillment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-900">
              Key Features
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <HiShoppingCart className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Quick Orders
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Create and manage orders with an intuitive form interface.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <HiChartBar className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Real-time Analytics
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Track your orders in real-time and get instant insights.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <HiCog className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Easy Configuration
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Customize your workflow with flexible settings and
                      options.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mb-8 text-lg text-indigo-100">
              Create your first order and streamline your workflow today.
            </p>
            <Link to="/add-order">
              <Button size="lg" color="light">
                Add Your First Order
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 bg-gray-900 text-gray-400 text-center">
          <p>&copy; 2026 GoodTime System. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
