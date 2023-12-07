import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-700">
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

        <div className="bg-[#1E1919] dark:bg-slate-700 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"

            />
            Your browser does not support video tag
          </video>
        </div>

      </div>
    </main>
  )
}
