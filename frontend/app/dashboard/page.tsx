


import { SiteHeader } from "@/components/custom/dashboard/site-header"
import data from "./data.json"
import { SectionCards } from "@/components/custom/dashboard/section-cards"
import { ChartAreaInteractive } from "@/components/custom/dashboard/chart-area-interactive"
import { DataTable } from "@/components/custom/dashboard/data-table"

export default function Page() {
  return (
   
       <>
        
        <div className="">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
        </div>
     
       </>
  )
}
