"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  LockIcon,
  BellIcon,
  UserIcon,
  MoonIcon,
  SunIcon,
  KeyIcon,
  CreditCardIcon,
  ShieldIcon,
  LogOutIcon,
} from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Profile Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <UserIcon className="h-5 w-5" /> Profile Settings
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Theme Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <SunIcon className="h-5 w-5" /> Theme Settings
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <span>Dark Mode</span>
          <Switch
            checked={darkMode}
            onCheckedChange={(value) => {
              setDarkMode(value);
              setTheme(value ? "dark" : "light");
            }}
          />
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <BellIcon className="h-5 w-5" /> Notifications
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <span>Email Notifications</span>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <LockIcon className="h-5 w-5" /> Security
        </CardHeader>
        <CardContent>
          <Input type="password" placeholder="New Password" />
          <Button className="mt-2">Update Password</Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <ShieldIcon className="h-5 w-5" /> Two-Factor Auth
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <span>Enable 2FA</span>
          <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
        </CardContent>
      </Card>

      {/* API Keys */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <KeyIcon className="h-5 w-5" /> API Keys
        </CardHeader>
        <CardContent>
          <Button variant="outline">Manage API Keys</Button>
        </CardContent>
      </Card>

      {/* Billing Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <CreditCardIcon className="h-5 w-5" /> Billing
        </CardHeader>
        <CardContent>
          <Button variant="outline">Manage Subscription</Button>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <LogOutIcon className="h-5 w-5 text-red-500" /> Logout
        </CardHeader>
        <CardContent>
          <Button variant="destructive">Log Out</Button>
        </CardContent>
      </Card>

      
    </div>
  );
}