import { styled } from "styled-components";
import StyledText from "../ui/StyledText";

const PriceText = styled(StyledText)`
  color: #000;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const ProductPricing = ({ price }) => {
  return (
    <>
      <PriceText>
        {price.regular_price.currency}
        {price.regular_price.value}
      </PriceText>
    </>
  );
};

export default ProductPricing;
