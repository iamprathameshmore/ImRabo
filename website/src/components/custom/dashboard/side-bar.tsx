"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    GalleryVerticalEnd,
    Gamepad,
    HelpCircle,
    LifeBuoy,
    PhoneCall,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"

import {
    Sidebar,
    SidebarContent,

    SidebarGroup,

    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "@/components/ui/sidebar"

import Link from "next/link"
import Image from "next/image"
import logo from "@/public/imrabo/logo.png"

// This is sample data.
const data = {
    IconTitle: [
        {
            title: "Imrabo",
            url: "/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },

    ],
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Automation",
            url: "/dashboard/automation",
            icon: Bot,

        },
        {
            title: "Devices",
            url: "/dashboard/devices",
            icon: Gamepad,

        },
        {
            title: "Integration",
            url: "/dashboard/integration",
            icon: Settings2,

        },
    ],
    Overview: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },

    ],
    support: [
        {
            title: "Help Center",
            url: "/dashboard/support/help-center",
            icon: LifeBuoy,
        },
        {
            title: "Contact",
            url: "/dashboard//support/contact",
            icon: PhoneCall,
        },
        {
            title: "FAQs",
            url: "/dashboard//support/FAQs",
            icon: HelpCircle,
        },
    ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} variant='inset'>
            <SidebarHeader className="m-0 p-0">
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton asChild>
                                <Link href={'/dashboard'} className="flex items-center gap-2">
                                    <Image src={logo} height={25} width={25} alt={""} />
                                    {/* <TvIcon className="w- h-5" /> */}
                                    <span className="text-xl font-semibold">Imrabo</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>

                <NavMain items={data.Overview} title={'Overview'} />
                <NavMain items={data.navMain} title={'Options'} />
                <NavMain items={data.support} title={'Help & Support'} />
            </SidebarContent>

        </Sidebar>
    )
}
