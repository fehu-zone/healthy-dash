import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isOpen: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon: Icon,
  label,
  isOpen,
}) => {
  return (
    <li>
      <Button
        asChild
        variant="ghost"
        className={cn(
          "w-full justify-start text-white hover:bg-[#007ea7] hover:text-[#ffffff]",
          !isOpen && "justify-center"
        )}
      >
        <Link to={to} className="flex items-center">
          <Icon className="mr-2 h-6 w-6 text-[#ffffff]" />
          {isOpen && <span className="text-base">{label}</span>}
        </Link>
      </Button>
    </li>
  );
};

export default SidebarLink;
