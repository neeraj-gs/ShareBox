import { auth } from "@clerk/nextjs"

const DashBoardpage = () => {
    const {userId} = auth();
  return (
    <main>
        
    </main>
  )
}

export default DashBoardpage