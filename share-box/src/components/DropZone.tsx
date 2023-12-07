"use client"

import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import Dropzone from 'react-dropzone'
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const DropZone = () => {


    const [loading,setLoading] = useState(false)
    const {isLoaded,isSignedIn,user} = useUser();

    const onDrop = (acceptedFiles:File[])=>{
        acceptedFiles.forEach((file)=>{
            const reader = new FileReader();

            reader.onabort = () => console.log("File Reading was Aborted");
            reader.onerror = () => console.log("File Reading was Failed");
            reader.onload  = async()=>{
                await uploadPost(file);
            }
            reader.readAsArrayBuffer(file); //as we read the files all the onload is triggered off
        })
    }

    const uploadPost = async (selectedFile:File) => {
        if(loading) return;
        if(!user) return;

        setLoading(true)

        //do uploading to firebase 
        // doceumetn root in our databse  users/userId/files -- all docs are added to this path

        const docRef = await addDoc(collection(db,`users/${user.id}/files`),{
            userId:user.id,
            filename:selectedFile.name,
            fullname:user.fullName,
            profileImg:user.imageUrl,
            timestamp:serverTimestamp(),
            type:selectedFile.type,
            size:selectedFile.size
        })

        const imageRef = ref(storage,`users/${user.id}/files/${docRef.id}`)

        await uploadBytes(imageRef,selectedFile).then(async(snapshot)=>{
            const downURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db,"users",user.id,"files",docRef.id),{
                downURL:downURL
            })
        }) 

        setLoading(false)
    }


    const maxsize = 20971520;

  return (
    <div>
        <Dropzone minSize={0} maxSize={maxsize} onDrop={onDrop}>
  {({getRootProps, getInputProps,isDragActive,isDragReject,fileRejections,}) => {

    const isFileTooLarge = fileRejections.length >0 && fileRejections[0].file.size > maxsize

    return(
    <section className='m-4'>
      <div {...getRootProps()}
        className={cn("w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center"
        ,isDragActive ? "bg-[#035ffe] text-white animate-pulse":"bg-slate-100/50 dark:bg-slate-800/80 text-slate-400 dark:text-white"
        )}
      >

        <input {...getInputProps()} />
        {!isDragActive && "Click Here or Drop a File to be Uploaded"}
        {isDragActive && !isDragReject && "Drop Here to Upload the File"}
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