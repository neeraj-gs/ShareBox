"use client"

import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import prettyBytes from "pretty-bytes"

export const columns: ColumnDef<FileType>[] = [
    {
        accessorKey:"type",
        header:"File Type",
        cell:({renderValue,...props})=>{
            const type = renderValue() as string;
            const extension: string = type.split("/")[1];
            //images/jpeg -- on split we get onloy the extension
            return(
                <div className="w-12">
                    <FileIcon
                        extension={extension}
                        labelColor={COLOR_EXTENSION_MAP[extension]}
                        // @ts-ignore
                        {...defaultSyles[extension]}
                    />
                </div>
            )
        }
    },
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
        <a
            href={renderValue() as string}
            target="_blank"
            className="underline text-blue-500 hover:text-blue-500"
        >
            Download
        </a>
    },
  },
];
