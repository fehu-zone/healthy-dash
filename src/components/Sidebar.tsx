import React, { useState } from "react";
import { HomeIcon, InfoIcon, LayoutDashboardIcon } from "lucide-react";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarLink from "./SidebarLink";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-[#00171f] border-r border-[#003459] h-screen transition-all duration-500 ease-in-out ${
        isOpen ? "w-48" : "w-16"
      }`}
    >
      <div className="p-4">
        <SidebarToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <ul className="space-y-2">
          <SidebarLink to="/" icon={HomeIcon} label="Home" isOpen={isOpen} />
          <SidebarLink
            to="/about"
            icon={InfoIcon}
            label="About"
            isOpen={isOpen}
          />
          <SidebarLink
            to="/dashboard"
            icon={LayoutDashboardIcon}
            label="Dashboard"
            isOpen={isOpen}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
