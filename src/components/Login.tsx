import Form from "./Form";
import { IoMdMail } from "react-icons/io";
import { BiSolidLockAlt } from "react-icons/bi";

interface Props {
  onLinkClick: () => void;
}

const Login = ({ onLinkClick }: Props) => {
  const inputs = [
    { text: "Email", icon: IoMdMail, type: "text" },
    { text: "Password", icon: BiSolidLockAlt, type: "password" },
  ];

  const checkbox = {
    label: "Remember Me",
    paragraph: {
      text: "Forgot Password?",
    },
  };

  const footer = {
    text: "Don't have an account?",
    anchorText: "Register",
  };

  return (
    <Form
      title="Login"
      inputs={inputs}
      checkbox={checkbox}
      footer={footer}
      onLinkClick={onLinkClick}
    />
  );
};

export default Login;
