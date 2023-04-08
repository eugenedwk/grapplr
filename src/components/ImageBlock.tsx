import Image, { type StaticImageData } from "next/image";

type ImageBlockProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};
const ImageBlock = (imageBlockProps: ImageBlockProps) => {
  const props = imageBlockProps;
  return <Image width="5000" height="5000" alt={props.alt} src={props.src} />;
};

export default ImageBlock;
