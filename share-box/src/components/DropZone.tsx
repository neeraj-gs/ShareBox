"use client"

import Dropzone from 'react-dropzone'

const DropZone = () => {
    const maxsize = 20971520;

  return (
    <div>
        <Dropzone minSize={0} maxSize={maxsize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps,isDragActive,isDragReject,fileRejections,}) => {

    const isFileTooLarge = fileRejections.length >0 && fileRejections[0].file.size > maxsize

    return(
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && "Click Here or Drop a File to be Uploaded"}
        {!isDragActive && !isDragReject && "Drop Here to Upload the File"}
        {isFileTooLarge && (
            <div className='text-danger mt-3'>File Exceeds the Storage Limit , Reduce the Size</div>
        )}
      </div>
    </section>
  )}}
</Dropzone>
    </div>
  )
}

export default DropZone