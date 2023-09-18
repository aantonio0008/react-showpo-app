import BagIcon from "../icons/BagIcon";
import HeartIcon from "../icons/HeartIcon";
import AddToWishList from "./AddToWishList";
import {
  AddToBagButton,
  AddToBagText,
  AddToWishListButton,
  ProductDetailsActionWrapper,
} from "./ProductPage.style";

const ProductDetailsAction = () => {
  return (
    <ProductDetailsActionWrapper>
      <AddToBagButton>
        <BagIcon height="2em" width="2em" />
        <AddToBagText>ADD TO BAG</AddToBagText>
      </AddToBagButton>

      <AddToWishList />
    </ProductDetailsActionWrapper>
  );
};

export default ProductDetailsAction;
