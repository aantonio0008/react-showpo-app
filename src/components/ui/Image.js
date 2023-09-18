const Image = ({ alt, imageUrl, className }) => {
  return <img src={imageUrl} alt={alt} className={className}></img>;
};

export default Image;
