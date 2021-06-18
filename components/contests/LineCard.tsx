import {
  Box,
  Button,
  Image,
  Stack,
  Center,
  HStack,
  Checkbox,
  RadioGroup,
  Radio,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Line } from '../../generated/graphql-types';

export function hasLineClosed(line: Line): boolean {
  if (!line.closingTime) {
    return false;
  }
  const lineClosed = Date.parse(line.closingTime);
  const now = Date.now();
  return lineClosed - now < 0 ? true : false;
}

export function lineHasWinner(line: Line): boolean {
  if (!line.choices || line.choices.length === 0) {
    return false;
  }

  return line.choices.some((c) => c.isWin);
}

function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString();
}

type LineCardProps = {
  line: Line;
};

export default function LineCard({ line }: LineCardProps): JSX.Element {
  const [testingValue, setValue] = useState<string | number>('1');

  const lineClosed = hasLineClosed(line);
  const lineHasWinner = hasLineClosed(line);
  const winningChoice = line.choices.find((c) => c.isWin);

  const linePicked = true;
  const pickAvailable = true;
  const superPickAvailable = false;

  return (
    <Box
      maxW={'500px'}
      width={'full'}
      bg={'gray.600'}
      boxShadow={'2xl'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack>
        <Stat>
          <StatLabel>{line.title}</StatLabel>
          <StatNumber>{line.benchmark} Wins</StatNumber>
          <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
        </Stat>
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Stack spacing={0} align={'left'} paddingTop={3}>
        <RadioGroup
          onChange={setValue}
          value={lineHasWinner ? winningChoice?.id || '' : testingValue}
        >
          <HStack justifyContent="center" spacing={6}>
            {line.choices.map((choice) => {
              return (
                <Radio
                  key={choice.id}
                  value={choice.id}
                  disabled={lineClosed}
                  colorScheme="teal"
                  size="lg"
                >
                  {choice.selection}
                </Radio>
              );
            })}
          </HStack>
          <Center>
            <Checkbox
              marginTop={4}
              disabled={lineClosed || !superPickAvailable}
              colorScheme="teal"
              size="lg"
            >
              Super Pick?
            </Checkbox>
          </Center>
        </RadioGroup>
        {!lineClosed && (
          <>
            <Divider orientation="horizontal" paddingTop={3} />
            <HStack display="flex" spacing={3} paddingTop={3} justifyContent="center">
              {linePicked ? (
                <Button
                  disabled={!pickAvailable}
                  flexGrow={1}
                  variant="outline"
                  bg="teal.500"
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    boxShadow: 'lg',
                  }}
                >
                  Make Pick
                </Button>
              ) : (
                <Button
                  flexGrow={1}
                  variant="outline"
                  bg="red.500"
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    boxShadow: 'lg',
                  }}
                >
                  Remove Pick
                </Button>
              )}
            </HStack>
          </>
        )}
      </Stack>
    </Box>
  );
}
