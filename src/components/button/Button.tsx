import classNames from "classnames";
import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  type: "button" | "reset" | "submit";
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
}

const Button = ({
  disabled,
  onClick,
  text,
  type,
  primary,
  secondary,
  tertiary,
}: Props): React.JSX.Element => {
  return (
    <button
      className={classNames("fs-button", {
        "fs-button--primary": primary,
        "fs-button--secondary": secondary,
        "fs-button--tertiary": tertiary,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="fs-button__text-wrapper">
        <span className="fs-button__text">{text}</span>
        <span className="fs-button__text-hoverd">{text}</span>
        </div>
    </button>
  );
};

export default Button;
