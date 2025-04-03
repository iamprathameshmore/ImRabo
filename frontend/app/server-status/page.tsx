'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const servers = [
  { id: 1, name: "API Server", url: "/api/health" },
  { id: 2, name: "Database Server", url: "/api/db-health" },
  { id: 3, name: "WebSocket Server", url: "/api/ws-health" },
];

export default function ServerStatus() {
  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    const checkStatus = async () => {
      const results = await Promise.all(
        servers.map(async (server) => {
          try {
            const response = await fetch(server.url);
            return { id: server.id, status: response.ok };
          } catch (error) {
            return { id: server.id, status: false };
          }
        })
      );
      setStatuses(Object.fromEntries(results.map((s) => [s.id, s.status])));
    };

    checkStatus();
    const interval = setInterval(checkStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 dark:bg-black">
      <div className="w-full max-w-md space-y-4">
        {servers.map((server) => (
          <Card key={server.id} className="shadow-lg border rounded-lg border-0">
            <CardHeader>
              <CardTitle>{server.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              {/* {statuses[server['id']] ? (
                <Badge  className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Online
                </Badge>
              ) : (
                <Badge  className="flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Offline
                </Badge>
              )} */}
            </CardContent>
          </Card>
        ))}
      </div>
      <footer className="w-full  dark:bg-black py-6 text-center">
          <span className="text-sm dark:text-white">
            &copy; {new Date().getFullYear()} Created By
            <Link href="https://www.linkedin.com/in/iamprathameshmore/" target="_blank">
              <span className="hover:underline text-blue-500 ml-2">@iamprathameshmore</span>
            </Link>
          </span>
        </footer>
    </div>
  );
}
