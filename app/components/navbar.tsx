import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from "./logo";
import LogoMobile from "./logo-mobile";

export function Navbar() {
  const navigationItems = [
    {
      title: "Metodologia",
      href: "/",
      description: "",
    },
    {
      title: "Clientes",
      href: "/",
      description: "",
    },
    {
      title: "Soluções",
      href: "/",
      description: "",
    },
    {
      title: "Funcionalidades",
      href: "/",
      description: "",
    },
    {
      title: "Preço",
      href: "/",
      description: "",
    },
  ];

  return (
    <>
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="block md:hidden">
          <LogoMobile />
        </div>
      </Link>
      <nav className="hidden md:flex gap-4">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title} asChild>
                <NavigationMenuLink>
                  <Button variant="ghost">{item.title}</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
