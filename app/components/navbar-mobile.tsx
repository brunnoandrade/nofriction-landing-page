import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import LogoMobile from "./logo-mobile";

export function NavbarMobile() {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link to="/" className="flex items-center">
          <LogoMobile />
        </Link>
        <div className="grid gap-2 py-6">
          {navigationItems.map((item) => (
            <Link
              to="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              key={item.title}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  to: string;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  to,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const navigate = useNavigate();

  return (
    <Link
      to={to}
      onClick={() => {
        navigate(to);
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
