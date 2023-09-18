import styled, { css } from "styled-components";
import StyledLink from "../ui/StyledLink";
import StyledText from "../ui/StyledText";
import StyledButton from "../ui/StyleButton";
import Accordion from "../ui/Accordion/Accordion";
import { device } from "../../styles/breakPoints";
import Image from "../ui/Image";

export const ProductWrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 32px 100px;
  @media (${device.mobile}) {
    flex-direction: column;
    padding: 24px 24px;
  }
`;

export const ProductDetailsMediaPanel = styled.div`
  flex: 1 1 50%;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (${device.mobile}) {
    width: fit-content;
  }
`;

export const ProductDetailsPanel = styled.div`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddToBagText = styled(StyledText)`
  margin-right: 4px;
`;

export const OutOfStock = styled(StyledLink)`
  margin: 12px 0;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
`;

export const ReferLink = styled(OutOfStock)`
  margin: 0;
`;

export const ProductDetailsActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 16px;
`;

export const AddToBagButton = styled(StyledButton)`
    height: 3rem;
    width: 100%;
    margin: 0,
    padding: 0.9375rem;
    font-size: .8125rem;
    text-transform: uppercase;
    letter-spacing: .0625rem;
    background-color: #32997d;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex: 1 1 60%;
`;

export const AddToWishListButton = styled(StyledButton)`
  color: #333;
  flex: 1 1 10%;
  margin-left: 12px;
  text-align: center;
  background: none;
  border: none;
`;

export const FreeShippingAccordion = styled(Accordion)`
  border-bottom: 1px solid #d8d8d8;
  font-family: Jost, sans-serif;
  padding: 1rem 0;
  align-items: center;
  font-size: 12px;
`;
export const DescriptionAccordion = styled(Accordion)`
  border-bottom: 1px solid #d8d8d8;
  font-family: Jost, sans-serif;
  padding: 1rem 0;
  align-items: center;
  margin: 0 0 16px;
  font-size: 12px;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 24px;
`;

export const ProductDescriptionContent = styled.div`
  ${(props) => {
    return props.$isShowDescription
      ? `
          -webkit-mask-image: none;
        height: 100%;
        overflow: unset
    `
      : `
    -webkit-mask-image: linear-gradient(black, transparent);
    mask-image: linear-gradient(black, transparent);
    height: 10rem;
    overflow: hidden;
    font-family: Jost, sans-serif;
    `;
  }}
`;

export const ReadMore = styled.a`
  font-weight: 700;
  font-family: Jost, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.375rem;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`;
export const ProductDescriptionHeader = styled(StyledText)`
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 0.375rem;
  font-family: Jost, sans-serif;
  font-size: 0.9375rem;
  line-height: normal;
  letter-spacing: normal;
`;

export const ProductImage = styled(Image)`
  width: 45%;
  margin: auto;
  max-width: 1563px;
  max-height: 2500px;

  @media (${device.mobile}) {
    width: 100%;
  }
`;

export const AccordionTitle = styled(StyledText)`
  flex: 1;
  text-transform: uppercase;
  font-weight: 600;
`;
