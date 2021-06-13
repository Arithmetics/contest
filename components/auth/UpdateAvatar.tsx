import { Avatar, Button, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useUser } from '../User';
import { useUpdateUserAvatarMutation } from '../../generated/graphql-types';

import dynamic from 'next/dynamic';
import { CURRENT_USER_QUERY } from '../queries';

const AvatarComponent = dynamic(() => import('./AvatarComponent'), {
  ssr: false,
});

async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
  const res: Response = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  return new File([blob], fileName, { type: 'image/png' });
}

export default function UpdateAvatar(): JSX.Element {
  const toast = useToast();
  const user = useUser();

  const [uploadedImage, setUploadedImage] = useState<string>('');

  const onCrop = (data: string): void => {
    setUploadedImage(data);
  };

  const [updateUserAvatar, { loading }] = useUpdateUserAvatarMutation({
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const submitUpdateAvatar = async (): Promise<void> => {
    if (!user?.id) {
      throw new Error('No user logged in');
    }

    const constructedFile = await dataUrlToFile(uploadedImage, 'xxx');

    try {
      const res = await updateUserAvatar({
        variables: {
          id: user.id,
          userName: user?.userName || 'unknown-avatar',
          image: constructedFile,
        },
      });
      if (res.data?.updateUser?.id) {
        toast({
          title: 'New avatar uploaded',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Something went wrong updating your avatar. Refresh and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      width={'100%'}
      marginTop={8}
      marginBottom={8}
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
        <Avatar
          marginBottom={4}
          size="2xl"
          name={user?.userName || ''}
          src={user?.avatarImage?.image?.publicUrlTransformed || ''}
        />
        <AvatarComponent onCrop={onCrop} />
        <Button
          variant="red-gradient"
          mt={8}
          w={'full'}
          onClick={submitUpdateAvatar}
          disabled={loading}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </Stack>
  );
}
