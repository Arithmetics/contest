import {
  Center,
  Spinner,
  Box,
  HStack,
  Stat,
  Image,
  Divider,
  StatLabel,
  StatNumber,
  Avatar,
  Text,
  Flex,
  Tooltip,
  AvatarBadge,
} from '@chakra-ui/react';
import {
  Contest,
  ChoiceSelectionType,
  Line,
  useTrackerStatusQuery,
} from '../../generated/graphql-types';
import TrackerGraph, { prepareLineStandingsForGraph } from './TrackerGraph';

type TrackerTabProps = {
  contest?: Contest;
};

export default function TrackerTab({ contest }: TrackerTabProps): JSX.Element {
  const { data, loading } = useTrackerStatusQuery({ variables: { contestId: contest?.id || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Center>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'stretch'}>
        {data?.allLines?.map((line) => {
          return <TrackerGraphCard key={line?.id} line={line as Line} />;
        })}
      </Box>
    </Center>
  );
}

type TrackerGraphCardProps = {
  line?: Line;
};

function TrackerGraphCard({ line }: TrackerGraphCardProps): JSX.Element {
  console.log(line);
  return (
    <Box
      maxW={'100%'}
      width={'700px'}
      bg={'gray.600'}
      border={'1px'}
      borderColor={'teal.500'}
      boxShadow={'dark-lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack>
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
        <Stat marginLeft={4}>
          <StatLabel>{line?.title}</StatLabel>
          <StatNumber>{line?.benchmark} Wins</StatNumber>
        </Stat>
        <Box>
          <Text>X more wins to lock OVER</Text>
          <Text>X more losses to lock UNDER</Text>
        </Box>
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'300px'} width={'100%'}>
        <TrackerGraph data={prepareLineStandingsForGraph(line as Line)} />
      </Box>
      <Flex justifyContent={'center'}>
        {line?.choices
          ?.filter((c) => c.selection === ChoiceSelectionType.Over)
          .map((choice) => {
            return (
              <Box
                key={choice.id}
                bg={'gray.500'}
                border={'1px'}
                borderColor={'teal.500'}
                rounded={'md'}
                flexGrow={1}
                marginX={2}
                padding={2}
              >
                <Text>{ChoiceSelectionType.Over} Bets</Text>
                {choice.bets?.map((bet) => {
                  return (
                    <Box key={bet.user?.id}>
                      <Tooltip label={bet.user?.userName}>
                        <Avatar
                          size="sm"
                          name={bet.user?.userName || ''}
                          src={bet.user?.avatarImage?.image?.publicUrlTransformed || ''}
                        >
                          {/* for super bets */}
                          <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
                        </Avatar>
                      </Tooltip>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        {line?.choices
          ?.filter((c) => c.selection === ChoiceSelectionType.Under)
          .map((choice) => {
            return (
              <Box
                key={choice.id}
                bg={'gray.500'}
                border={'1px'}
                borderColor={'teal.500'}
                rounded={'md'}
                flexGrow={1}
                marginX={2}
                padding={2}
              >
                <Text>{ChoiceSelectionType.Under} Bets</Text>
                {choice.bets?.map((bet) => {
                  return (
                    <Box key={bet.user?.id}>
                      <Tooltip label={bet.user?.userName}>
                        <Avatar
                          size="sm"
                          name={bet.user?.userName || ''}
                          src={bet.user?.avatarImage?.image?.publicUrlTransformed || ''}
                        >
                          {/* for super bets */}
                          <AvatarBadge borderColor="papayawhip" bg={'teal.500'} boxSize="1.25em" />
                        </Avatar>
                      </Tooltip>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
}
