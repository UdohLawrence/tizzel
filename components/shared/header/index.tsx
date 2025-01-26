import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import { ShoppingCart, UserIcon, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full shadow-lg">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image 
              priority={true}
              src="/images/logo.svg"
              width={75}
              height={75}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon />
              Sign In
            </Link>
          </Button>
          <Button asChild variant='secondary'>
            <Link href='/sign-up'>
              <UserPlus />
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header