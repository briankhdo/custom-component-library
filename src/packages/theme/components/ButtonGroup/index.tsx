import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
}

const StyledDiv = styled.div`
  > button {
    margin-right: 3px;
  }
`;
const ButtonGroup: FunctionComponent<ButtonProps> = ({
  children,
}: ButtonProps) => <StyledDiv>{children}</StyledDiv>;

export default ButtonGroup;
