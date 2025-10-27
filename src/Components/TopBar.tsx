import BrainIcon from "../Icons/BrainIcon";
import { GenericButton } from "./Button";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainIcon />
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <GenericButton onClick={() => {}}>Sign In</GenericButton>
          <GenericButton onClick={() => {}}>Get Started</GenericButton>
        </div>
      </div>
    </header>
  );
}
