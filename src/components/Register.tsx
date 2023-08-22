import Form from "./Form";
import { IoMdMail } from "react-icons/io";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";

interface Props {
  onLinkClick: () => void;
}

const Register = ({ onLinkClick }: Props) => {
  const inputs = [
    { text: "Username", icon: BiSolidUser, type: "text" },
    { text: "Email", icon: IoMdMail, type: "text" },
    { text: "Password", icon: BiSolidLockAlt, type: "password" },
  ];

  const checkbox = {
    label: "I agree Terms & Conditions",
    paragraph: null,
  };

  const footer = {
    text: "Already have an account?",
    anchorText: "Login",
  };

  return (
    <Form
      title="Register"
      inputs={inputs}
      checkbox={checkbox}
      footer={footer}
      onLinkClick={onLinkClick}
    />
  );
};

export default Register;
