import DropZone from "@/components/DropZone";
import { auth } from "@clerk/nextjs";

const DashBoardpage = () => {
    const {userId} = auth();
  return (
    <main>
        <DropZone />
    </main>
  )
}

export default DashBoardpage