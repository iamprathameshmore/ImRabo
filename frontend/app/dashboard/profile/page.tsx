'use client'

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import {
  Sun, Moon, Settings, Headphones, User2, LockIcon, BellIcon, 
  KeyIcon, CreditCardIcon, ShieldIcon, LogOutIcon
} from "lucide-react";

export default function ProfilePage() {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center text-black dark:text-white space-y-5">
      

      <div className="flex justify-center items-center space-x-3">
        <Avatar className="w-32 h-32 mb-4 border-2 border-zinc-500 flex justify-center items-center">
          <User2 className="text-black dark:text-white h-10 w-10 " />
        </Avatar>
        <div className="text-start">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-400">john.doe@example.com</p>
          <p className="text-gray-500 dark:text-gray-400">ip:address</p>
        </div>
      </div>
      
      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <span>Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={(value) => {
              setDarkMode(value);
              setTheme(value ? "dark" : "light");
            }} />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <span>Email Notifications</span>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <span>Enable 2FA</span>
            <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
          </CardContent>
        </Card>
      </div>

      {/* Action Cards */}
      <Card className="border rounded-lg p-4 shadow-md w-full">
        <CardContent className="p-0">
          <h3 className="text-lg font-semibold text-left">Manage Account</h3>
          <p className="text-gray-500 dark:text-gray-400 text-left">
            Update your email, profile picture, and other settings.
          </p>
          <Button className="mt-4">
            <Settings className="w-5 h-5 mr-2" /> Edit Profile
          </Button>
        </CardContent>
      </Card>

      <Card className="border rounded-lg p-4 shadow-md w-full">
        <CardContent className="p-0">
          <h3 className="text-lg font-semibold text-left">Need Help?</h3>
          <p className="text-gray-500 dark:text-gray-400 text-left">
            Our support team is available 24/7. Reach out for any IoT-related issues.
          </p>
          <Button className="mt-4">
            <Headphones className="w-5 h-5 mr-2" /> Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}