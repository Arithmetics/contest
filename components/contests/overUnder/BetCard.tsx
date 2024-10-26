import {
  Badge,
  Box,
  Image,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  Flex,
  useBreakpointValue,
  FlexboxProps,
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import { Line, Bet } from '../../../generated/graphql-types';
import { hasLineClosed } from '../lineCard/lineCardUtils';

type BetCardProps = {
  line?: Line;
  bet?: Bet;
  userId?: string;
  contestId?: string;
  // userHasEntered?: boolean;
  isSuper?: boolean;
  onClick?: () => void;
};

export const BetCard = ({ line, bet, onClick, isSuper }: BetCardProps): JSX.Element | null => {
  const flexDir = useBreakpointValue<FlexboxProps['flexDirection']>({
    base: 'column',
    lg: 'row',
  });

  const gap = useBreakpointValue({
    base: '4px',
    lg: '12px',
  });

  const height = useBreakpointValue({
    base: '120px',
    md: '140px',
    lg: '112px',
  });

  const width = useBreakpointValue({
    base: '60px',
    sm: '90px',
    lg: '180px',
  });

  const imageSize = useBreakpointValue({
    base: '35px',
    md: '50px',
  });

  const benchMarkSize = useBreakpointValue({
    base: '20px',
    md: '24px',
  });

  const choiceSize = useBreakpointValue({
    base: '10px',
    md: '14px',
  });

  const padding = useBreakpointValue({
    base: '2px',
    md: '12px',
  });

  if (!line) {
    return null;
  }

  if (hasLineClosed(line)) {
    return (
      <Box padding="0" position={'relative'}>
        <LockIcon position={'absolute'} top={'8px'} left={'8px'} color="gray.400" zIndex={10} />
        <VStack
          bg={'gray.600'}
          boxShadow={'lg'}
          rounded={'md'}
          position={'relative'}
          justifyContent={'center'}
          padding={padding}
          width={width}
          height={height}
        >
          <Flex gap={gap} justifyContent={'center'} alignItems={'center'} flexDirection={flexDir}>
            <Image
              boxSize={imageSize}
              fit="scale-down"
              justifyContent={'center'}
              alt={line?.image?.altText || 'unknown'}
              src={line?.image?.image?.publicUrlTransformed || ''}
            />
            <Stat>
              <StatLabel textAlign={'center'}>
                {isSuper && <Badge colorScheme="btbets">Super</Badge>}
              </StatLabel>
              <StatNumber textAlign={'center'} fontSize={benchMarkSize}>
                {line.benchmark}
              </StatNumber>
              <StatHelpText fontSize={choiceSize}>
                {bet?.choice?.selection === 'UNDER' ? (
                  <>
                    <StatArrow type="decrease" />
                    UNDER
                  </>
                ) : (
                  <>
                    {' '}
                    <StatArrow type="increase" />
                    OVER
                  </>
                )}
              </StatHelpText>
            </Stat>
          </Flex>
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      onClick={onClick}
      padding="0"
      _hover={{
        cursor: 'pointer',
      }}
    >
      <VStack
        bg={'gray.600'}
        boxShadow={'lg'}
        rounded={'md'}
        position={'relative'}
        justifyContent={'center'}
        padding={padding}
        width={width}
        height={height}
        _hover={{
          background: 'gray.500',
        }}
      >
        <Flex gap={gap} justifyContent={'center'} alignItems={'center'} flexDirection={flexDir}>
          <Image
            boxSize={imageSize}
            fit="scale-down"
            justifyContent={'center'}
            alt={line?.image?.altText || 'unknown'}
            src={line?.image?.image?.publicUrlTransformed || ''}
          />
          <Stat>
            <StatLabel textAlign={'center'}>
              {isSuper && <Badge colorScheme="btbets">Super</Badge>}
            </StatLabel>
            <StatNumber textAlign={'center'} fontSize={benchMarkSize}>
              {line.benchmark}
            </StatNumber>
            <StatHelpText fontSize={choiceSize}>
              {bet?.choice?.selection === 'UNDER' ? (
                <>
                  <StatArrow type="decrease" />
                  UNDER
                </>
              ) : (
                <>
                  {' '}
                  <StatArrow type="increase" />
                  OVER
                </>
              )}
            </StatHelpText>
          </Stat>
        </Flex>
      </VStack>
    </Box>
  );
};
