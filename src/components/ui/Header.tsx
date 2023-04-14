import * as React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/NavigationMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/Dialog";
import { Input } from "~/components/ui/Input";
import * as Popover from "@radix-ui/react-popover";
import { BiUser } from "react-icons/bi";
import { Separator } from "./Separator";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Arrow, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-xl font-bold text-white sm:inline-block">
              JaxAnimals
            </span>
          </Link>
        </div>
        <NavigationMenu className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mr-2 border border-white text-white hover:border-white hover:text-white"
                  >
                    Create a listing
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-background sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create a new listing</DialogTitle>
                    <DialogDescription>lorem description</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Name
                      </label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="username" className="text-right">
                        Username
                      </label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="text-black hover:bg-black hover:bg-opacity-5 dark:text-white dark:hover:bg-white"
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {theme === "dark" ? (
                <Button
                  className="h-10 w-10 px-0 text-white"
                  onClick={() => setTheme("light")}
                  title="Switch to light mode"
                >
                  <BsMoonStarsFill className="h-6 w-6" />
                </Button>
              ) : (
                <Button
                  className="h-10 w-10 px-0 text-white"
                  onClick={() => setTheme("dark")}
                  title="Switch to dark mode"
                >
                  <FiSun className="h-7 w-7" />
                </Button>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="h-10 w-10 px-0">
                    <BiUser className="h-7 w-7" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={5}
                  className="z-50 mr-8 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                >
                  <DropdownMenuItem>Login</DropdownMenuItem>
                  <DropdownMenuItem>Sign up</DropdownMenuItem>
                </DropdownMenuContent>
                {/* <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box menu-compact bg-base-100 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>My Listings</a>
                  </li>
                  <li>
                    <a>Saved Listings</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <Separator className="my-2 bg-slate-400 opacity-50 dark:bg-slate-400" />
                  <li>
                    <a>Logout</a>
                  </li>
                </ul> */}
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
