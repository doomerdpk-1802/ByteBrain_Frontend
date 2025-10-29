import type React from "react";
import { ExternalLink } from "lucide-react";
import ShareIcon from "../Icons/ShareIcon";
import DeleteIcon from "../Icons/deleteIcon";
import EditIcon from "../Icons/EditIcon";

interface CardComponentProps {
  title: string;
  titleIcon: React.ReactNode;
  linkUrl: string;
  linkText: string;
  tags: string[];
}

export function CardComponent({
  title,
  titleIcon,
  linkUrl,
  linkText,
  tags,
}: CardComponentProps) {
  return (
    <div className="w-full max-w-sm border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header with title and action icons */}
      <div className="flex justify-between gap-4 mb-6">
        {/* Title with icon */}
        <div className="flex items-center gap-3">
          <div className="text-blue-600 text-xl">{titleIcon}</div>
          <h3 className="text-gray-900 text-lg font-semibold">{title}</h3>
        </div>

        {/* Action icons */}
        <div className="flex gap-3">
          <span className="p-2 rounded-md bg-gray-200 hover:bg-blue-100 transition-colors cursor-pointer">
            <ShareIcon />
          </span>
          <span className="p-2 rounded-md bg-gray-200 hover:bg-blue-100 transition-colors cursor-pointer">
            <EditIcon />
          </span>
          <span className="p-2 rounded-md bg-gray-200 hover:bg-red-100 transition-colors cursor-pointer">
            <DeleteIcon />
          </span>
        </div>
      </div>

      {/* Link embedding */}
      <div className="mb-6 pb-10 pt-6 flex justify-center">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          {linkText}
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
