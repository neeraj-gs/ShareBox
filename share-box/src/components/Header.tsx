import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header>
        <nav className="flex items-center justify-between">
            <Link href="/">
                <div>
                    <Image src="/dropbox.png" alt="logo"  height={50} width={50}/>
                </div>
                <h1 className="font-bold text-xl">ShareBox</h1>
            </Link>
            <div></div>
        </nav>
    </header>
  )
}

export default Header