'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useActionState } from "react"
import { signInWithCredentials } from "@/lib/actions/user.actions"
import { useFormStatus } from "react-dom"

const CredentialsSignInForm = () => {

  const [data, action] = useActionState(
    signInWithCredentials, {
      message: '',
      success: false
    }
  )
  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant='default'>
        {pending ? 'Signing in ...' : 'Sign In'}
      </Button>
    )
  }
  return (
    <form action={ action }>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {
          data && !data.success && (
            <div className="text-center text-destructive">
              {data.message}
            </div>
          )
        }
        <div className="text-sm text-center">
          Don&apos;t have an account? {' '}
          <Link href='/sign-up' target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignInForm