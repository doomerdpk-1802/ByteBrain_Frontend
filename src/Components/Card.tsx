import type React from "react";
import { ExternalLink } from "lucide-react";
import ShareIcon from "../Icons/ShareIcon";
import DeleteIcon from "../Icons/deleteIcon";
import EditIcon from "../Icons/EditIcon";
import { useDeleteContent } from "../hooks/useDeleteContent";
import { useQueryClient } from "@tanstack/react-query";
import { Icon } from "./Icons";

interface CardComponentProps {
  contentId?: string;
  share?: boolean;
  title: string;
  titleIcon: React.ReactNode;
  linkUrl: string;
  linkText: string;
  tags: string[];
  onEdit?: (content: any) => void;
}

export function CardComponent({
  contentId,
  share,
  title,
  titleIcon,
  linkUrl,
  linkText,
  tags,
  onEdit,
}: CardComponentProps) {
  const queryClient = useQueryClient();
  const { mutate: deleteContent, isPending } = useDeleteContent();

  const handleEdit = () => {
    if (onEdit) {
      onEdit({
        contentId,
        title,
        linkUrl,
        linkText,
        tags: tags.join(","),
      });
    }
  };

  const handleDelete = () => {
    if (!contentId) return alert("Missing content ID!");

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this content?"
    );
    if (!confirmDelete) return;

    deleteContent(
      { contentId },
      {
        onSuccess: (res) => {
          alert(res.message || "Content Deleted successfully!");
          queryClient.invalidateQueries({ queryKey: ["contents"] });
        },
        onError: (err: any) => {
          alert(err?.response?.data?.error || "Error deleting content!");
        },
      }
    );
  };
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
          <Icon onClick={() => {}} disabled={isPending}>
            <ShareIcon />
          </Icon>
          <Icon onClick={handleEdit} disabled={isPending}>
            <EditIcon />
          </Icon>
          <Icon onClick={handleDelete} disabled={isPending}>
            <DeleteIcon />
          </Icon>
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
