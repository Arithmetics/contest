import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';

export default function SuperBetTag(): JSX.Element {
  return (
    <Tag size="md" colorScheme="btbets">
      <TagLabel>Super Bet</TagLabel>
      <TagRightIcon as={BsLightning} />
    </Tag>
  );
}
