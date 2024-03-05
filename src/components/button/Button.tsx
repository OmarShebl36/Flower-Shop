import React from "react";

interface Props {
  text: string;
  onClick: () => void;
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
      className={classNames('fs-button', {
        'fs-button--primary': primary,
        'fs-button--secondary': secondary,
        'fs-button--tertiary': tertiary,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
