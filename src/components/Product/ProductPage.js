import dummyData from "../../constants/dummyData";
import ProductOptionSelector from "../ProductOptionSelector/ProductOptionSeclector";
import { useState } from "react";
import {
  ProductWrapper,
  ProductDetailsMediaPanel,
  ProductDetailsPanel,
  OutOfStock,
  ReferLink,
  FreeShippingAccordion,
  ProductDescriptionContainer,
  ProductDescriptionContent,
  ReadMore,
  ProductDescriptionHeader,
  ProductImage,
  DescriptionAccordion,
  AccordionTitle,
} from "./ProductPage.style";
import parse from "html-react-parser";
import useBreakpoint from "../../hooks/useBreakpoint";
import { sampleText } from "../../constants/sampleText";
import ProductDetailsAction from "./ProductDetailsAction";
import {
  BrandLink,
  ProductDetailsWrapper,
  ProductName,
} from "./ProductDetails.style";
import ProductPricing from "./ProductPricing";
import ProductMedia from "./ProductMedia";

const ProductPage = () => {
  const product = dummyData.data.products.items[0];
  const { isMobile, isDesktop } = useBreakpoint();
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [isShowFreeShippingContent, setIsShowFreeShippingContent] =
    useState(false);

  return (
    <ProductWrapper>
      <ProductDetailsMediaPanel>
        <ProductMedia product={product} />
        {isDesktop && (
          <ProductDescriptionContainer>
            <ProductDescriptionContent $isShowDescription={isShowDescription}>
              <ProductDescriptionHeader>Description</ProductDescriptionHeader>
              {parse(product.short_description.html)}
            </ProductDescriptionContent>
            <ReadMore onClick={() => setIsShowDescription(!isShowDescription)}>
              {!isShowDescription ? "Read More" : "Read Less"}
            </ReadMore>
          </ProductDescriptionContainer>
        )}
      </ProductDetailsMediaPanel>
      <ProductDetailsPanel>
        <ProductDetailsWrapper>
          <ProductName attribute="h1">{product.name}</ProductName>
          <BrandLink>SHOWPO</BrandLink>
          <ProductPricing price={product.price_range.minimum_price} />
        </ProductDetailsWrapper>

        <ProductOptionSelector
          colors={product.variants}
          sizes={product.attributes[1].attribute_options}
        />
        <OutOfStock>
          SIZE OUT OF STOCK? GET NOTIFIED IF IT COMES BACK
        </OutOfStock>
        <ReferLink>SEE SIMILAR ITEMS OR MORE FORMAL DRESSES</ReferLink>
        <ProductDetailsAction />
        <FreeShippingAccordion>
          <FreeShippingAccordion.Header
            onClick={() =>
              setIsShowFreeShippingContent(!isShowFreeShippingContent)
            }
            isShowContent={isShowFreeShippingContent}
          >
            <AccordionTitle>FREE SHIPPING, RETURNS & REFUNDS</AccordionTitle>
          </FreeShippingAccordion.Header>
          <FreeShippingAccordion.Body isShowContent={isShowFreeShippingContent}>
            {sampleText}
          </FreeShippingAccordion.Body>
        </FreeShippingAccordion>
        {isMobile && (
          <DescriptionAccordion>
            <DescriptionAccordion.Header
              onClick={() => setIsShowDescription(!isShowDescription)}
              isShowContent={isShowDescription}
            >
              <AccordionTitle>Description</AccordionTitle>
            </DescriptionAccordion.Header>
            <DescriptionAccordion.Body isShowContent={isShowDescription}>
              {parse(product.short_description.html)}
            </DescriptionAccordion.Body>
          </DescriptionAccordion>
        )}
      </ProductDetailsPanel>
    </ProductWrapper>
  );
};
export default ProductPage;
