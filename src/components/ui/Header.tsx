import * as React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/NavigationMenu";
import { BiUser } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./DropdownMenu";
import CreateListing from "../index/CreateListing";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

export const Header = ({ loggingIn }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { data: sessionData } = useSession();
  const { push, asPath } = useRouter();

  const handleLogin = () => push(`/login?callbackUrl=${asPath}`);

  return (
    <header className="sticky top-0 z-40 w-full items-center justify-between backdrop-blur">
      <div className="container flex h-14 items-center ">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-lg font-bold text-white sm:inline-block lg:text-xl xl:text-2xl">
              JaxAnimals
            </span>
          </Link>
        </div>
        <NavigationMenu className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <NavigationMenuList className="gap-1">
            {/* if /login, then do not show this component */}
            {!loggingIn && (
              <NavigationMenuItem>
                {sessionData ? (
                  <CreateListing />
                ) : (
                  <Button
                    onClick={handleLogin}
                    variant="outline"
                    className="h-8 border border-white px-4 py-0 text-white hover:border-white hover:text-white md:mr-2 md:h-9 md:px-4 md:py-2"
                  >
                    Login
                  </Button>
                )}
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              {theme === "dark" ? (
                <Button
                  variant="ghost"
                  className="h-10 w-10 px-0 text-white"
                  onClick={() => setTheme("light")}
                  title="Switch to light mode"
                >
                  <BsMoonStarsFill className="h-6 w-6" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  className="h-10 w-10 px-0 text-white hover:text-white"
                  onClick={() => setTheme("dark")}
                  title="Switch to dark mode"
                >
                  <FiSun className="h-7 w-7" />
                </Button>
              )}
            </NavigationMenuItem>
            {sessionData && (
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant="ghost"
                      className="h-10 w-10 px-0 text-white hover:text-white"
                    >
                      <BiUser className="h-7 w-7" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    sideOffset={5}
                    className="z-50 mr-12 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                  >
                    <DropdownMenuItem>My Listings</DropdownMenuItem>
                    <DropdownMenuItem>Saved Listings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => void signOut()}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

interface HeaderProps {
  loggingIn: boolean;
}
