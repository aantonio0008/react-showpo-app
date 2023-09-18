import {
  SizeButton,
  Wrapper,
  SizeTitle,
  ButtonWrapper,
} from "./SizeSelector.style";

const SizeSelector = ({ sizes }) => {
  return (
    <Wrapper>
      <SizeTitle>Select AU Size:</SizeTitle>
      <ButtonWrapper>
        {sizes?.map((size) => {
          return (
            <SizeButton key={size.label}>
              {size.label.replace(/ *\([^)]*\) */g, "")}
            </SizeButton>
          );
        })}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SizeSelector;
