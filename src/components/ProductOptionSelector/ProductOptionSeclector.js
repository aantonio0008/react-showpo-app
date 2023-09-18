import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

const OptionSelector = (props) => {
  return (
    <>
      <ColorSelector colorVariants={props.colors} />
      <SizeSelector sizes={props.sizes} />
    </>
  );
};

export default OptionSelector;
