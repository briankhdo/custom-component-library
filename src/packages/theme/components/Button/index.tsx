import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "../..";

interface ButtonProps {
  children?: ReactNode;
  text?: string;
  size?: "small" | "medium" | "large";
  intent?: "primary" | "success" | "warning" | "error";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Padding {
  [key: string]: string;
}

const paddings: Padding = {
  small: "4px 8px",
  medium: "8px 16px",
  large: "12px 24px",
};

const StyledButton = styled.button<{
  intent: string | undefined;
  size: string | undefined;
}>`
  ${(props) =>
    css`
      padding: ${paddings[props.size || "medium"]};
      border-radius: 4px;
      border: none;
      cursor: pointer;
      &:disabled,
      [disabled] {
        pointer-events: none;
        background: ${themeGet(
          `colors.${props.intent || "default"}.hoverBackground`
        )};
      }
      background: ${themeGet(`colors.${props.intent || "default"}.background`)};
      color: ${themeGet(`colors.${props.intent || "default"}.text`)};
      transition: 0.5s;
      &:hover {
        background: ${themeGet(
          `colors.${props.intent || "default"}.hoverBackground`
        )};
        color: ${themeGet(`colors.${props.intent || "default"}.hoverText`)};
      }
    `};
`;
const Button: FunctionComponent<ButtonProps> = ({
  children,
  text,
  size,
  intent,
  onClick,
}: ButtonProps) => (
  <StyledButton onClick={onClick} intent={intent} size={size}>
    {text || children}
  </StyledButton>
);

export default Button;
