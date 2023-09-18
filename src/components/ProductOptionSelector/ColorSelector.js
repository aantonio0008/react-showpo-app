import Image from "../ui/Image";
import {
  Wrapper,
  ColorTitle,
  ColorSwatch,
  ColorImage,
} from "./ColorSelector.style";

const ColorSelector = ({ colorVariants }) => {
  return (
    <Wrapper>
      <ColorTitle>Colour:</ColorTitle>
      <div>
        {colorVariants?.map((variant) => {
          return (
            <ColorSwatch key={variant.product.id}>
              <ColorImage
                imageUrl={variant.product.small_image.url}
                alt={variant.product.uid.toString()}
              />
            </ColorSwatch>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ColorSelector;
