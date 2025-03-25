



import data from "../data.json"
import { DataTable } from "@/components/custom/dashboard/data-table"

export default function Page() {
    return (

        <>
            <DataTable data={data} />
        </>
    )
}
