import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  HomeIcon,
  InfoIcon,
  LayoutDashboardIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react"

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn(
      "bg-background border-r h-screen transition-all duration-300",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="w-full mb-4 flex justify-center items-center"
        >
          {isOpen ? <ChevronLeftIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
        </Button>
        <ul className="space-y-2">
          <li>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !isOpen && "justify-center"
              )}
            >
              <Link to="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                {isOpen && <span>Home</span>}
              </Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !isOpen && "justify-center"
              )}
            >
              <Link to="/about">
                <InfoIcon className="mr-2 h-4 w-4" />
                {isOpen && <span>About</span>}
              </Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !isOpen && "justify-center"
              )}
            >
              <Link to="/dashboard">
                <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                {isOpen && <span>Dashboard</span>}
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
