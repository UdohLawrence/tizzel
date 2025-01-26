import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center min-h-screen">
      <Image
        priority={true}
        src='/images/logo.svg'
        width={100}
        height={100}
        alt={`${APP_NAME} logo`}
      />
      <div className="p-6 rounded-lg shadow-md text-center w-full">
        <h1 className="text-3xl font-bold mb-4">
          Not Found!
        </h1>
        <p className="text-destructive">
          Could not find the requested page.
        </p>
        <Link href='/'>
        <Button
          variant='outline'
          className="mt-4 ml-2"
        >
          Back to Home
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound