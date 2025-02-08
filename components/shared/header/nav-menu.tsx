import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { Menu, ShoppingCart, UserIcon, UserPlus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@/auth";

const NavMenu = async () => {
  const session = await auth();
  return (
    <>
      {/* Mobile NavMenu */}
      <nav className="md:hidden max-w-xs">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart />
                Cart
              </Link>
            </Button>
            {!session && (
              <>
                <Button asChild>
                  <Link href="/sign-in">
                    <UserIcon />
                    Sign In
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/sign-up">
                    <UserPlus />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
      <nav className="md:flex hidden gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        {!session && (
          <>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon />
                Sign In
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/sign-up">
                <UserPlus />
                Sign Up
              </Link>
            </Button>
          </>
        )}
      </nav>
    </>
  );
};

export default NavMenu;
