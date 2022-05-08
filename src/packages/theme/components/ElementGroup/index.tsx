import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ElementGroupProps {
  children?: ReactNode;
}

const StyledDiv = styled.div`
  > * {
    margin-right: 3px;
  }
`;
const ElementGroup: FunctionComponent<ElementGroupProps> = ({
  children,
}: ElementGroupProps) => <StyledDiv>{children}</StyledDiv>;

export default ElementGroup;
