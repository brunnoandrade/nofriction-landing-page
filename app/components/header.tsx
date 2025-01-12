"use client";

import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toogle";
import { Navbar } from "./navbar";
import { NavbarMobile } from "./navbar-mobile";

function Header() {
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-10 top-0 w-full ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : ""
      }`}
    >
      <div className="w-full relative px-4">
        <div className="container mx-auto">
          <div className="flex justify-between h-14 items-center">
            <Navbar />
            <div className="flex items-center gap-4">
              <Button>
                Agende uma demo <PhoneCall className="w-4 h-4" />
              </Button>
              <ModeToggle />
              <NavbarMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
