// lib/cloudinaryLoader.ts
type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const cloudinaryLoader = ({ src, width, quality }: LoaderProps) => {
  const publicId = src.split('/').slice(-2).join('/');
  return `https://res.cloudinary.com/duusmu38g/image/upload/f_auto,q_auto,w_${width},q_${quality || "auto"}/${publicId}`;
};

export default cloudinaryLoader;
