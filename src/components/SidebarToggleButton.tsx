import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="w-full mb-4 flex justify-center items-center text-[#00a8e8]"
    >
      {isOpen ? (
        <ChevronLeftIcon className="h-6 w-6" />
      ) : (
        <ChevronRightIcon className="h-6 w-6" />
      )}
    </Button>
  );
};

export default SidebarToggleButton;
