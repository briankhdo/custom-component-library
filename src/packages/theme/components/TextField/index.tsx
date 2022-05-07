import { FunctionComponent, InputHTMLAttributes, useRef } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "../..";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  intent?: "default" | "success" | "error";
  value?: string;
}

const StyledLabel = styled.label<{
  intent: string | undefined;
  size: string | undefined;
}>`
  ${(props) =>
    css`
      font-size: 80%;
      color: ${themeGet(`colors.${props.intent || "default"}.background`)};
    `};
`;

interface Padding {
  [key: string]: string;
}

const paddings: Padding = {
  small: "4px 4px",
  medium: "8px 8px",
  large: "12px 12px",
};

const StyledInput = styled.input<{
  intent: string | undefined;
  inputSize: string | undefined;
}>`
  ${(props) =>
    css`
      margin-top: 3px;
      padding: ${paddings[props.inputSize || "medium"]};
      border-radius: 4px;
      border-style: solid;
      &:disabled,
      [disabled] {
        pointer-events: none;
        background: ${themeGet(`colors.default.hoverBackground`)};
      }
      border-color: ${themeGet(
        `colors.${props.intent || "default"}.background`
      )};
      transition: 0.5s;
      &:hover {
        border-color: ${themeGet(
          `colors.${props.intent || "default"}.hoverBackground`
        )};
      }
    `};
`;

const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  placeholder,
  size,
  intent,
  value,
  onClick,
  ...inputAttrs
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <StyledLabel intent={intent} size={size} onClick={labelClick}>
        {label}
      </StyledLabel>
      <br />
      <StyledInput
        value={value}
        intent={intent}
        inputSize={size}
        placeholder={placeholder}
        {...inputAttrs}
        ref={inputRef}
      ></StyledInput>
    </>
  );
};

export default TextField;
