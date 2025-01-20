import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

interface OptimizedImageProps extends ImageProps {
  boxSize: string;
  src: string;
}

const OptimizedImage = ({ boxSize, src, ...props }: OptimizedImageProps): JSX.Element => {
  // Calculate the requested image size, 50% larger than the boxSize
  const optimizedSize = Math.ceil(parseInt(boxSize, 10) * 1.5);

  // Modify the Cloudinary URL to request an optimized version of the image
  const optimizedSrc = src?.replace(
    '/upload/',
    `/upload/w_${optimizedSize},h_${optimizedSize},q_auto,f_auto/`
  );

  return (
    <Image
      boxSize={boxSize}
      src={optimizedSrc}
      {...props} // Pass through all other props
    />
  );
};

export default OptimizedImage;
