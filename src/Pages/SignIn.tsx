import Form from "../Components/Form";
import GenericInput from "../Components/Input";
import { GenericButton } from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Form title="Enter Your Details to Login">
      <GenericInput label="Email " placeholder="Provide your email...." />
      <GenericInput label="Password" placeholder="Provide a password...." />
      <GenericButton
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Submit
      </GenericButton>
    </Form>
  );
}
