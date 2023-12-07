import { auth } from "@clerk/nextjs"
import Dropzone from "react-dropzone";

const DashBoardpage = () => {
    const {userId} = auth();
  return (
    <main>
        <Dropzone />
    </main>
  )
}

export default DashBoardpage