import { Sidebar } from "../Components/SideBar";
import { GenericButton } from "../Components/Button";
import { CardComponent } from "../Components/Card";
import ImageIcon from "../Icons/ImageIcon";
import { useState } from "react";
import ContentModal from "../Components/ContentModal";
import GenericInput from "../Components/Input";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center w-full p-9">
          <h1 className="text-3xl font-bold">All Items</h1>
          <div className="flex gap-4">
            <GenericButton
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add Content
            </GenericButton>
            <GenericButton
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </GenericButton>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap p-9 gap-8">
          <CardComponent
            title="test"
            titleIcon={<ImageIcon />}
            linkUrl="https://youtu.be/KHjGymJzuks?si=hsetMRdFsrCvr6nK"
            linkText="Nitish Kumar"
            tags={["test1", "test2"]}
          />
        </div>
      </div>

      <ContentModal
        title="Enter Content Details"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <GenericInput label="Link" placeholder="Provide the Link...." />
        <GenericInput label="Type" placeholder="Provide the Type...." />
        <GenericInput label="Title" placeholder="Provide the Title...." />
        <GenericInput label="Tags" placeholder="Provide the Tags...." />
        <GenericButton
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Submit
        </GenericButton>
      </ContentModal>
    </div>
  );
}
