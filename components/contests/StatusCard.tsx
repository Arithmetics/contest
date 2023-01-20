import {
  Avatar,
  Box,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  useBreakpointValue,
} from '@chakra-ui/react';

type StatusCardProps = {
  icon: JSX.Element;
  statLabel: string;
  statNumber: string;
  floatMode: boolean;
};

export default function StatusCard({
  icon,
  statLabel,
  statNumber,
  floatMode,
}: StatusCardProps): JSX.Element {
  const maxWidth = useBreakpointValue(
    { base: '30%', md: floatMode ? '150px' : '200px', lg: floatMode ? '150px' : '300px' },
    'md'
  );
  const showIcon = useBreakpointValue({ base: false, md: true }, 'md');
  const minHeight = useBreakpointValue({ base: '103px', md: '0px' }, 'md');

  return (
    <Box
      maxW={maxWidth}
      width={'full'}
      bg={floatMode ? 'gray.900' : 'gray.600'}
      rounded={'md'}
      p={3}
      border="1px solid"
      borderColor={floatMode ? 'cyan.500' : ''}
      minHeight={minHeight}
    >
      <HStack>
        <Stat>
          <StatLabel>{statLabel}</StatLabel>
          <StatNumber>{statNumber}</StatNumber>
        </Stat>
        {!floatMode && showIcon && <Avatar icon={icon} />}
      </HStack>
    </Box>
  );
}
