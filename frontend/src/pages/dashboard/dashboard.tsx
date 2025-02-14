
import { BarChart, Cpu, Settings, Zap, Activity, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart as ReBarChart } from "recharts";

export default function DashboardHome() {
  // Sample Data for Graphs
  const aiUsageData = [
    { name: "Jan", usage: 30 },
    { name: "Feb", usage: 45 },
    { name: "Mar", usage: 60 },
    { name: "Apr", usage: 75 },
    { name: "May", usage: 90 },
  ];

  const automationEfficiency = [
    { name: "Mon", efficiency: 70 },
    { name: "Tue", efficiency: 80 },
    { name: "Wed", efficiency: 85 },
    { name: "Thu", efficiency: 75 },
    { name: "Fri", efficiency: 95 },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-zinc-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl font-bold">🚀 Welcome to Imrabo</h1>
        <p className="text-gray-500">AI-Powered Automation & IoT Management</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center transition hover:shadow-xl hover:scale-105">
          <Cpu className="w-12 h-12 text-blue-600" />
          <h2 className="mt-4 text-lg font-semibold">AI Integrations</h2>
          <p className="text-gray-500 text-sm text-center">Seamlessly integrate AI with your workflows.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center transition hover:shadow-xl hover:scale-105">
          <Zap className="w-12 h-12 text-yellow-500" />
          <h2 className="mt-4 text-lg font-semibold">Automation</h2>
          <p className="text-gray-500 text-sm text-center">Automate tasks and enhance efficiency.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center transition hover:shadow-xl hover:scale-105">
          <BarChart className="w-12 h-12 text-green-500" />
          <h2 className="mt-4 text-lg font-semibold">Analytics</h2>
          <p className="text-gray-500 text-sm text-center">Get insights with real-time analytics.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center transition hover:shadow-xl hover:scale-105">
          <Settings className="w-12 h-12 text-gray-700" />
          <h2 className="mt-4 text-lg font-semibold">IoT Control</h2>
          <p className="text-gray-500 text-sm text-center">Manage and monitor your IoT devices.</p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Usage Graph */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-lg font-semibold mb-3">📊 AI Usage Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={aiUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#2563EB" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Automation Efficiency Graph */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-lg font-semibold mb-3">⚡ Automation Efficiency</h3>
          <ResponsiveContainer width="100%" height={250}>
            <ReBarChart data={automationEfficiency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="efficiency" fill="#FACC15" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <Activity className="w-12 h-12 text-purple-500" />
          <div>
            <h4 className="text-lg font-semibold">Active AI Models</h4>
            <p className="text-gray-500">12 Models Running</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <TrendingUp className="w-12 h-12 text-green-500" />
          <div>
            <h4 className="text-lg font-semibold">Automation Success</h4>
            <p className="text-gray-500">92% Task Efficiency</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <Zap className="w-12 h-12 text-yellow-500" />
          <div>
            <h4 className="text-lg font-semibold">IoT Devices Connected</h4>
            <p className="text-gray-500">45 Smart Devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
