import { cloneElement, ReactElement } from "react";
import {
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { colors } from "../../theme/colors";

interface PopoberProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  children?: ReactNode;
  trigger?: "hover" | "click" | undefined;
  component: ReactElement;
}

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverWrapper = styled.div<{ visible: boolean | undefined }>`
  position: absolute;
  bottom: calc(100% + 2px);
  left: 0;
  z-index: 1000;
  padding-bottom: 2px;
  transition: opacity 250ms linear 0.2s;
  ${(props) =>
    `${
      props.visible
        ? css`
            pointer-events: default;
            opacity: 1;
          `
        : css`
            pointer-events: none;
            opacity: 0;
          `
    }`};
`;

const PopoverDiv = styled.div`
  min-width: 200px;
  min-height: 100px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid ${colors.default.main};
  border-radius: 20px;
  background-color: ${colors.default.hoverText};
`;

const CloseButton = styled.a`
  &:after {
    content: "x";
  }

  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Popover: FunctionComponent<PopoberProps> = ({
  children,
  trigger,
  component,
  ...inputAttrs
}: PopoberProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const dismiss = () => {
    setVisible(false);
  };

  const makeVisible = () => {
    setVisible(true);
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const onClick = () => {
    if (trigger === "click") toggleVisible();
  };
  const onMouseOver = () => {
    console.log(timeoutId);
    if (timeoutId) clearTimeout(timeoutId);
    if (trigger === "hover") makeVisible();
  };
  const onMouseOut = () => {
    if (trigger === "hover") {
      if (timeoutId) clearTimeout(timeoutId);
      setTimeoutId(setTimeout(dismiss, 1000));
    }
  };

  const clonedComponent = cloneElement(component, {
    onClick: (e: React.MouseEventHandler<HTMLAnchorElement>) => {
      component.props.onClick?.(e);
      onClick();
    },
    onMouseOver: (e: React.MouseEventHandler<HTMLAnchorElement>) => {
      console.log("over");
      component.props.onMouseOver?.(e);
      onMouseOver();
    },
    onMouseOut: (e: React.MouseEventHandler<HTMLAnchorElement>) => {
      console.log("out");
      component.props.onMouseOut?.(e);
      onMouseOut();
    },
  });

  return (
    <StyledDiv>
      {clonedComponent}
      <PopoverWrapper visible={visible}>
        <PopoverDiv onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {trigger === "click" && <CloseButton onClick={dismiss} />}
          {children}
        </PopoverDiv>
      </PopoverWrapper>
    </StyledDiv>
  );
};

export default Popover;
