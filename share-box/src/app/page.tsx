import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">Welcome to ShareBox.
          <br />
          <br />
          Storing Everything you and Your Business Needs. All in One Place Store for collaboration.
          </h1>

          <p>Ehance your Personilzed storage ,offering a simple 
            and 
            efficient way to upload,organize and access files from anywhere.
            Securely share with people and collaborate with your peers, and experience easy file managemnet.
          </p>

          <Link href='/dashboard' className="flex gap-3 p-4 hover:cursor-pointer bg-slate-300 w-fit text-black" >Get Started <ArrowRight className="ml-4" /> </Link>
          
          
           
        </div>
      </div>
    </main>
  )
}
