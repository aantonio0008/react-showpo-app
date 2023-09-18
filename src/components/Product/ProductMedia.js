import { ProductImage } from "./ProductPage.style";

const ProductMedia = ({ product }) => {
  return (
    <>
      {/* TODO: Add carousel of product images  */}
      <ProductImage imageUrl={product.image.url}></ProductImage>
    </>
  );
};

export default ProductMedia;
