const StyledLink = ({ className, children }, props) => {
  return (
    <>
      <a {...props} className={className}>
        {children}
      </a>
    </>
  );
};

export default StyledLink;
