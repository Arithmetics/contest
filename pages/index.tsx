import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const ALL_CONTESTS_QUERY = gql`
  query ALL_CONTESTS_QUERY {
    allContests {
      id
      name
      description
      status
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function HomePage(): JSX.Element {
  const { data, error, loading } = useQuery(ALL_CONTESTS_QUERY);
  console.log({ data, error, loading });
  return <SocialProfileWithImage />;
}

function SocialProfileWithImage(): JSX.Element {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.600')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.squarespace-cdn.com/content/v1/5f6a2443c6004d000a8d74df/1611684154674-DDO2M3A64SNPGOTBQWE6/ke17ZwdGBToddI8pDm48kNLmoMgP9-PoGL3pTpvfmf97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZn9JnVc0xDeoNGVJ3wrjE4Nx_EhhKi4CB_8Hn-bafWShA1iIgJHGOspu562nPK3kQ/11+Sonics.jpg?format=2500w'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'https://exnba.com/wp-content/uploads/2013/09/payton-looks-on.jpg'}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Sonics
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Bets
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Other bets
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Bet
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
