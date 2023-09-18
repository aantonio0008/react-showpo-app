import Image from "../ui/Image";
import StyledButton from "../ui/StyleButton";
import StyledText from "../ui/StyledText";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const ColorSwatch = styled(StyledButton)`
  border: none;
  background: none;
  padding: 4px;
  cursor: pointer;
`;

export const ColorImage = styled(Image)`
  width: 3.6875rem;
  height: 5.625rem;
  border-radius: 0px;
  display: inline-block;
  margin-right: 0px;
`;

export const ColorTitle = styled(StyledText)`
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
