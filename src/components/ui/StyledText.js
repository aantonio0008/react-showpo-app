import { css, styled } from "styled-components";

const Text = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontFamily.md};
  ${(props) => {
    if (props.$attribute) {
      return props.theme.typography[props.$attribute];
    }
  }}
`;
const StyledText = ({ className, children, attribute }) => {
  return (
    <>
      <Text className={className} $attribute={attribute}>
        {children}
      </Text>
    </>
  );
};

export default StyledText;
