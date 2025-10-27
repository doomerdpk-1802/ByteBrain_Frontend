import ContentModal from "../Components/ContentModal";
import GenericInput from "../Components/Input";
import { GenericButton } from "../Components/Button";
import { useState } from "react";

export default function Signup() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ContentModal
      title="Enter Your Details"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <GenericInput
        label="First Name"
        placeholder="Provide your first name...."
      />
      <GenericInput
        label="Last Name"
        placeholder="Provide your last name...."
      />
      <GenericInput label="Email " placeholder="Provide your email...." />
      <GenericInput label="Password" placeholder="Provide a password...." />
      <GenericButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Submit
      </GenericButton>
    </ContentModal>
  );
}
