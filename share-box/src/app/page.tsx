import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Share-Box</h1>
      <UserButton />
    </main>
  )
}
