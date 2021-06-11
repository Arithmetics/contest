import { Box, Button, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';

const AvatarComponent = dynamic(() => import('./AvatarComponent'), {
  ssr: false,
});

export default function UpdateAvatar(): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const signupLoading = false;

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      width={'100%'}
      marginTop={8}
    >
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          Update Profile Picture
        </Heading>
      </Stack>
      <Flex as={'form'} flexDirection={'column'} alignItems={'center'} marginTop={10}>
        <AvatarComponent />
        <Button
          variant="red-gradient"
          mt={8}
          w={'full'}
          //   onClick={handleSubmit(submitUpdateAccount)}
          //   disabled={!!errors.password || !!errors.realName || !!errors.userName}
          isLoading={signupLoading}
        >
          Submit
        </Button>
      </Flex>
    </Stack>
  );
}
