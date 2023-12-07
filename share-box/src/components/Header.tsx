import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"

const Header = () => {
  return (
    <header>
        <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <div className="dark:invert">
                    <Image src="/dropbox.png" alt="logo"  height={50} width={50}/>
                </div>
                <h1 className="font-bold text-xl">ShareBox</h1>
            </Link>
            <div className="px-5 flex space-x-2 items-center">
                {/*Theme Toggleer */}
                <ThemeToggler />

                <UserButton afterSignOutUrl="/"/>

                <SignedOut>
                    <SignInButton afterSignInUrl="/dashboard"  mode="modal" />
                </SignedOut>
            </div>
        </nav>
    </header>
  )
}

export default Header