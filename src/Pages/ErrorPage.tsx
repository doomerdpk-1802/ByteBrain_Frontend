import Icon404 from "../Icons/404Icon";
import { GenericButton } from "../Components/Button";
export default function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="border border-gray-300 rounded-md">
          <Icon404 />
        </div>
        <GenericButton onClick={() => {}}>Go Home</GenericButton>
      </div>
    </div>
  );
}
