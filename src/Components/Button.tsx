interface GenericButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

export const GenericButton: React.FC<GenericButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
