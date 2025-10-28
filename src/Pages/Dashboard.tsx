import { Sidebar } from "../Components/SideBar";
import { GenericButton } from "../Components/Button";
import { CardComponent } from "../Components/Card";
import { useState } from "react";
import ContentModal from "../Components/ContentModal";
import GenericInput from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContent } from "../hooks/useContent";
import { useContents } from "../hooks/useContents";
import ImageIcon from "../Icons/ImageIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import XIcon from "../Icons/XIcon";
import ArticleIcon from "../Icons/articleIcon";

type FormData = {
  link: string;
  type: string;
  title: string;
  tags: string;
};

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { mutate, isPending } = useContent();
  const { data: contents, refetch } = useContents();

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => {
        alert("Content created successfully!");
        reset();
        setIsOpen(false);
        refetch();
      },
      onError: (error: any) => {
        alert(
          error?.response?.data?.error ||
            "Error creating content! Please try again."
        );
      },
    });
  };

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center w-full p-9">
          <h1 className="text-3xl font-bold">All Items</h1>
          <div className="flex gap-4">
            <GenericButton onClick={() => setIsOpen(true)}>
              Add Content
            </GenericButton>
            <GenericButton onClick={() => navigate("/")}>Logout</GenericButton>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap p-9 gap-8">
          {contents?.length ? (
            contents.map((item: any) => (
              <CardComponent
                key={item._id}
                title={item.title}
                titleIcon={<ImageIcon />}
                linkUrl={item.link}
                linkText={item.type}
                tags={item.tags.map((t: any) => t.title)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-sm">No content added yet.</p>
          )}
        </div>
      </div>

      <ContentModal
        title="Enter Content Details"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <GenericInput
            name="link"
            type="text"
            label="Link"
            placeholder="Provide the Link..."
            register={register}
          />
          <GenericInput
            name="type"
            type="text"
            label="Type"
            placeholder="Provide the Type..."
            register={register}
          />
          <GenericInput
            name="title"
            type="text"
            label="Title"
            placeholder="Provide the Title..."
            register={register}
          />
          <GenericInput
            name="tags"
            type="text"
            label="Tags"
            placeholder="Comma separated tags (e.g. react,js,frontend)"
            register={register}
          />

          <GenericButton disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </GenericButton>
        </form>
      </ContentModal>
    </div>
  );
}
