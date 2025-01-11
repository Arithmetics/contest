import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';

export default function SuperBetTag(): JSX.Element {
  return (
    <Tag size="md" colorScheme="btbets" backgroundColor="btbets.500">
      <TagLabel color="white">Super Bet</TagLabel>
      <TagRightIcon color="white" as={BsLightning} />
    </Tag>
  );
}
