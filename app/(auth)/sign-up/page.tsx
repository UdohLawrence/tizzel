import { auth } from "@/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignUpForm from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: 'Sign Up'
};

const SignUp = async (props: {
  searchParams: Promise<{callbackUrl: string}>;
}) => {

  const searchParams = await props.searchParams;

  const { callbackUrl } = searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href='/' className="flex justify-center items-center">
            <Image
              src='/images/logo.svg'
              priority={true}
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
            />
          </Link>
          <CardTitle className="text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/*Form goes here */}
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp