import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
  useColorModeValue,
  Checkbox,
  RadioGroup,
  Radio,
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
  const [value, setValue] = useState<string | number>('1');

  const lineClosed = hasLineClosed(line);
  return (
    <Box
      maxW={'500px'}
      width={'full'}
      bg={useColorModeValue('white', 'gray.600')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position={'relative'}
      margin={4}
    >
      <Box p={6}>
        <Stack spacing={0} align={'center'} marginBottom={5}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            {line.title}: {line.benchmark}
          </Heading>
          <Text color={'gray.500'}>Closes: {formatLineDate(line)}</Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              {line.choices.map((choice, i) => {
                if (i % 2 === 0) {
                  return (
                    <>
                      <Image
                        h={'80px'}
                        w={'full'}
                        src={
                          'https://www.profootballnetwork.com/wp-content/uploads/2020/08/Watt.jpg'
                        }
                        objectFit={'cover'}
                      />
                      <Radio key={choice.id} value={choice.id} disabled={lineClosed}>
                        {choice.selection}
                      </Radio>
                    </>
                  );
                }
                return (
                  <>
                    <Radio key={choice.id} value={choice.id} disabled={lineClosed}>
                      {choice.selection}
                    </Radio>
                    <Image
                      h={'80px'}
                      w={'full'}
                      src={'https://www.profootballnetwork.com/wp-content/uploads/2020/08/Watt.jpg'}
                      objectFit={'cover'}
                    />
                  </>
                );
              })}
            </Stack>
          </RadioGroup>
          {!lineClosed && (
            <HStack display="flex" spacing={3} marginTop={6} justifyContent="center">
              <Checkbox disabled={lineClosed}>Super Pick?</Checkbox>
              <Button
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
            </HStack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
