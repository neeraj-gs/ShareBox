import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './Columns'

const TableWrapper = ({skeletonFiles}:{skeletonFiles:FileType[]}) => {
  return (
    <div>
        <Button>Sort By ...</Button>
        <DataTable columns={columns} data={skeletonFiles} />

    </div>
  )
}

export default TableWrapper