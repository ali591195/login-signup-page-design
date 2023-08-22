import { IconType } from "react-icons/lib/esm/iconBase";

export interface InputType {
  text: string;
  icon: IconType;
  type: string;
}

export const Input = ({ text, icon: Icon, type }: InputType) => {
  return (
    <>
      <div className="flex-between">
        <p>{text}</p>
        <p>
          <Icon size="20px" />
        </p>
      </div>
      <input className="bg-inherit" type={type} />
    </>
  );
};
