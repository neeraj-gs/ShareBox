"use client"

import { FileType } from '@/typings'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './Columns'
import { useUser } from '@clerk/nextjs'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'
import {useCollection} from 'react-firebase-hooks/firestore'

const TableWrapper = ({skeletonFiles}:{skeletonFiles:FileType[]}) => {
    const {user} = useUser();
    // const {initialiFiles,setInitialiFiles} = useState<FileType[]>([]);
    const [sort,setSort] = useState<"asc"|"desc">("desc")

    const [docs,loading,error] = useCollection(
      user && 
        query(
          collection(db,"users",user.id,"files"),
          orderBy("timestamp",sort)
        )
    );



  return (
    <div>
        <Button className='mb-20'
        onClick={()=> setSort(sort === "desc" ? "asc" : "desc")}
        >Sort By {sort === "desc"? "Newest First": "Oldest First"}</Button>
        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}

export default TableWrapper