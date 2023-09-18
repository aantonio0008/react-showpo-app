import { styled } from "styled-components";
import StyledText from "../ui/StyledText";
import StyledButton from "../ui/StyleButton";

export const SizeButton = styled(StyledButton)`
  position: relative;
  cursor: pointer;
  height: 2.8125rem;
  width: 2.8125rem;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  padding: 0.375rem 0;
  margin-bottom: 0.625rem;
  margin-right: 0.625rem;
  background-color: transparent;
  overflow: hidden;
  transition: all 0.2s linear;
  color: #000;
  border: 1px solid #000;
  font-weight: 500;
  font-family: Jost, sans-serif;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: normal;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const SizeTitle = styled(StyledText)`
  text-align: left;
  color: #8c8c8c;
  font-weight: 600;
  margin: 0;
  padding: 0;
  padding-bottom: 0.8125rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: "normal";
  letter-spacing: "normal";
`;

export const ButtonWrapper = styled.div``;
