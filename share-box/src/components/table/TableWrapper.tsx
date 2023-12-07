"use client"

import { FileType } from '@/typings'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './Columns'
import { useUser } from '@clerk/nextjs'

const TableWrapper = ({skeletonFiles}:{skeletonFiles:FileType[]}) => {
    const {user} = useUser();
    const {initialiFiles,setInitialiFiles} = useState<FileType[]>([]);
    const [sort,setSort] = useState<"asc"|"desc">("desc")

  return (
    <div>
        <Button
        onClick={()=> setSort(sort === "desc" ? "asc" : "desc")}
        >Sort By {sort === "desc"? "Newest First": "Oldest First"}</Button>
        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}

export default TableWrapper