import DropZone from "@/components/DropZone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

const DashBoardpage = async() => {
    const {userId} = auth();

    //server side rendered , pre load the docuements presetn on the server
    const docResults = await getDocs(collection(db,"users",userId!,"files"))
    const skeletonFiles:FileType[] = docResults.docs.map(doc => ({
      //object thaqt will bubble up adn return an array -- implicit Return
      id:doc.id,
      filename:doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      fulName:doc.data().fullName,
      downloadUrl:doc.data().downloadUrl,
      type: doc.data().type,
      size: doc.data().size,
      
    }))

    


  return (
    <main className="border-t">
        <DropZone />


        <section className="container space-y-5">
          <h2 className="font-extrabold">All Stored Files</h2>

          <div>
            {/* Table Wrapper  */}
            <TableWrapper skeletonFiles={skeletonFiles}  />
          </div>
        </section>
    </main>
  )
}

export default DashBoardpage