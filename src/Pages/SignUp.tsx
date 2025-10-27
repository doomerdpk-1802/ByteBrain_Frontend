import Form from "../Components/Form";
import GenericInput from "../Components/Input";
import { GenericButton } from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Form title="Enter Your Details to Signup">
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
          navigate("/login");
        }}
      >
        Submit
      </GenericButton>
    </Form>
  );
}
