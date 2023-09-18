import { useState } from "react";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import { sampleText } from "../../../constants/sampleText";
import { BodyWrapper, Wrapper, HeaderWrapper } from "./Accordion.style";
import { styled } from "styled-components";

const Header = ({ children, isShowContent, onClick, className }) => {
  const rotate = isShowContent ? "rotate(90deg)" : "rotate(0)";

  return (
    <HeaderWrapper className={className} onClick={onClick}>
      {children}
      <ChevronRightIcon
        height="1.3em"
        width="1.3em"
        style={{ transform: rotate, transition: "all 0.2s linear" }}
      />
    </HeaderWrapper>
  );
};

const Body = ({ children, isShowContent, className }) => {
  return (
    <>
      {isShowContent && (
        <BodyWrapper className={className}>{children}</BodyWrapper>
      )}
    </>
  );
};

const Accordion = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
