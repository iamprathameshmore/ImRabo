'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MapPin, Users, Building, Mail } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    bio: "Software Engineer | Open-source enthusiast",
    location: "San Francisco, CA",
    company: "TechCorp",
    followers: 120,
    following: 80,
    avatarUrl: "/placeholder-avatar.jpg",
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-[#0d1117] text-white">
      <Card className="w-full max-w-2xl p-6 bg-[#161b22] shadow-lg rounded-lg border border-[#30363d]">
        <CardContent className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatarUrl} alt="Profile Picture" />
            <AvatarFallback className="bg-[#30363d] text-white">JD</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-400">@{user.username}</p>
          <p className="text-gray-300 text-center">{user.bio}</p>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin /> <span>{user.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Building /> <span>{user.company}</span>
          </div>
          <div className="flex gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <Users /> <span>{user.followers} Followers</span>
            </div>
            <div className="flex items-center gap-1">
              <Users /> <span>{user.following} Following</span>
            </div>
          </div>
          <Button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white">Edit Profile</Button>
        </CardContent>
      </Card>
      
      {/* Settings Section */}
      <Card className="w-full max-w-2xl mt-6 p-6 bg-[#161b22] shadow-lg rounded-lg border border-[#30363d]">
        <Tabs defaultValue="general">
          <TabsList className="flex space-x-2 mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="flex flex-col gap-4">
              <Input placeholder="Full Name" value={user.name} />
              <Textarea placeholder="Bio" value={user.bio} />
              <Input placeholder="Location" value={user.location} />
              <Input placeholder="Company" value={user.company} />
              <Button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white">Save Changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="flex flex-col gap-4">
              <Input placeholder="Email" value={user.email} />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
