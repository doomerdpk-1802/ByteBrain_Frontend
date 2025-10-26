import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import ArticleIcon from "../Icons/articleIcon";
import ImageIcon from "../Icons/ImageIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import XIcon from "../Icons/XIcon";
import BrainIcon from "../Icons/BrainIcon";
import { LeftArrow } from "../Icons/leftArrow";
import type { SidebarItemData } from "./SidebarItem";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const SidebarItems: SidebarItemData[] = [
    {
      icon: <ArticleIcon />,
      text: "Articles",
      onClick: () => console.log("Articles"),
    },
    {
      icon: <ImageIcon />,
      text: "Images",
      onClick: () => console.log("Images"),
    },
    {
      icon: <YoutubeIcon />,
      text: "Video",
      onClick: () => console.log("Video"),
    },
    { icon: <XIcon />, text: "Tweets", onClick: () => console.log("Tweets") },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8">
          {isOpen && <BrainIcon />}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-900"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <LeftArrow /> : "☰"}
          </button>
        </div>

        {/* Sidebar items */}
        <div>
          <nav className="p-5 space-y-2">
            {SidebarItems.map((item, index) => (
              <div key={index} title={!isOpen ? item.text : ""}>
                <SidebarItem
                  icon={item.icon}
                  text={item.text}
                  onClick={item.onClick}
                  isOpen={isOpen}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
