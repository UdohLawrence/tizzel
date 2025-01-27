import { APP_NAME } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./nav-menu"

const Header = () => {
  return (
    <header className="w-full shadow-lg">
      <div className="wrapper flex justify-between items-center mx-auto">
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              priority={true}
              src="/images/logo.svg"
              width={75}
              height={75}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-2">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <NavMenu />
      </div>
    </header>
  )
}

export default Header