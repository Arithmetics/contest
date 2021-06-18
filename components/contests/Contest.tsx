import { Flex, Text, Spinner, Center } from '@chakra-ui/react';
import { useState } from 'react';

import ContestNav from '../../components/nav/ContestNav';
import LineCard from './LineCard';

import { useContestByIdQuery, Line } from '../../generated/graphql-types';

type ContestProps = {
  id?: string;
};

export default function Contest({ id }: ContestProps): JSX.Element {
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: id || '',
    },
  });

  if (!id) {
    return (
      <Center marginTop={'30vh'}>
        <Text fontSize="2xl">No contest found</Text>
      </Center>
    );
  }

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <>
      <ContestNav />
      <Text fontSize="3xl">{data?.Contest?.name}</Text>
      <Flex justifyContent="center" flexWrap="wrap">
        {data?.Contest?.lines.map((line) => {
          return <LineCard key={line.id} line={line as Line} />;
        })}
      </Flex>
    </>
  );
}
