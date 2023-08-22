import { ImCross } from "react-icons/im";
import { Button } from "./Button";
import { Input, InputType } from "./Input";
import "../css/Form.css";
import { Checkbox, Footer } from "../interfaces/Form";

interface Props {
  onLinkClick: () => void;
  title: string;
  inputs: InputType[];
  checkbox: Checkbox;
  footer: Footer;
}

const Form = ({ title, inputs, checkbox, footer, onLinkClick }: Props) => {
  return (
    <div className="main-div">
      <div id="cross" className="flex-end">
        <Button>
          <ImCross />
        </Button>
      </div>
      <div id="animation">
        <div id="heading" className="text-center">
          <h1 className="m-0">{title}</h1>
        </div>
        <div id="form">
          <form>
            {inputs.map((input) => (
              <Input
                key={input.text}
                text={input.text}
                icon={input.icon}
                type={input.type}
              />
            ))}
          </form>
          <div className="flex-between">
            <div>
              <input type="checkbox" />
              <label>{checkbox.label}</label>
            </div>
            {checkbox.paragraph && (
              <p>
                <a href="#" className="transition">
                  {checkbox.paragraph.text}
                </a>
              </p>
            )}
          </div>
          <Button>
            <h3>{title}</h3>
          </Button>
        </div>
        <div className="text-center">
          <p>
            {footer.text}
            <b>
              <a href="#" className="link transition" onClick={onLinkClick}>
                {footer.anchorText}
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
