import { useEffect, useState } from "react";
import {  CheckCircle, Clock, TrendingUp, Play, Pause } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from "recharts";


export default function AutomationScreen() {
  const [isRunning, setIsRunning] = useState(true);

  // Sample data for automation performance
  const automationData = [
    { name: "Task 1", efficiency: 85 },
    { name: "Task 2", efficiency: 92 },
    { name: "Task 3", efficiency: 78 },
    { name: "Task 4", efficiency: 95 },
    { name: "Task 5", efficiency: 88 },
  ];

  const executionTrend = [
    { name: "Mon", tasks: 40 },
    { name: "Tue", tasks: 50 },
    { name: "Wed", tasks: 65 },
    { name: "Thu", tasks: 58 },
    { name: "Fri", tasks: 72 },


  ];

   useEffect(() => {
        document.title = "Automation";
        
      }, []);

  return (
    <>
    
    <div className="p-6 bg-gradient-to-br from-gray-100 to-zinc-200 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          ⚡ Automation Dashboard
        </h1>
        <p className="text-gray-500">Monitor & control automated workflows in real-time</p>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md transition ${
            isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause className="inline-block w-5 h-5 mr-2" /> : <Play className="inline-block w-5 h-5 mr-2" />}
          {isRunning ? "Pause Automation" : "Start Automation"}
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Automation Efficiency Chart */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-lg font-semibold mb-3">⚙️ Task Efficiency</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={automationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="efficiency" fill="#FACC15" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Execution Trends */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-lg font-semibold mb-3">📊 Execution Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={executionTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tasks" stroke="#2563EB" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Task Status Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
          <div>
            <h4 className="text-lg font-semibold">Successful Automations</h4>
            <p className="text-gray-500">325 Completed</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <Clock className="w-12 h-12 text-yellow-500" />
          <div>
            <h4 className="text-lg font-semibold">Pending Tasks</h4>
            <p className="text-gray-500">17 In Progress</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
          <TrendingUp className="w-12 h-12 text-blue-500" />
          <div>
            <h4 className="text-lg font-semibold">Efficiency Score</h4>
            <p className="text-gray-500">89% Optimization</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
