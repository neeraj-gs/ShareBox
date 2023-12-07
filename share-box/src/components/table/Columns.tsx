"use client"

import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "filename",
    header: "File Name",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey:"size",
    header:"Size",
    cell:({renderValue,...props}) =>{
        return <span>{prettyBytes(renderValue() as number)}</span>
    }
  }
]
