import { Badge, Box, Image, UseRadioProps, useRadio } from '@chakra-ui/react';

type RadioImageProps = {
  hasSelection: boolean;
  imageUrl?: string | null;
  altText?: string | null;
  spread?: number | null;
  display: string;
};

export default function RadioImage(props: RadioImageProps & UseRadioProps): JSX.Element {
  const { altText, imageUrl, hasSelection, isDisabled, display } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      position="relative"
      _hover={{
        width: '200px',
      }}
    >
      <input {...input} />
      <Image
        {...checkbox}
        _checked={{ filter: 'none', border: '1px', borderColor: 'teal.500' }}
        filter={hasSelection ? 'grayscale(100%)' : 'none'}
        htmlHeight="100px"
        maxHeight="100px"
        htmlWidth="200px"
        objectFit="cover"
        bg={'gray.600'}
        borderRadius="md"
        cursor={isDisabled ? 'default' : 'pointer'}
        alt={altText || 'unknown'}
        src={imageUrl || ''}
        transitionProperty="transform"
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        _hover={{ transform: isDisabled ? 'scale(1.0)' : 'scale(1.02)' }}
      />
      <Badge position="absolute" variant="solid" left="6px" top="6px">
        {display}
      </Badge>
    </Box>
  );
}
