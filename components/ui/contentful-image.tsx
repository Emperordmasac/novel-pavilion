/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentFulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentFulImage;
