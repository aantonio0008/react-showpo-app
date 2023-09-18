import { styled } from "styled-components";
import StyledLink from "../ui/StyledLink";
import StyledText from "../ui/StyledText";

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled(StyledText)`
  padding-top: 1.5rem;
  text-align: left;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  ${({ theme }) => theme.typography.h1};
`;

export const BrandLink = styled(StyledLink)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: #8c8c8c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.00688rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 8px 0;
`;
