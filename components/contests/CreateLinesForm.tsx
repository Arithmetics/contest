import { useState } from 'react';
import { CREATE_ATS_LINE_MUTATION } from '../admin/queries';
import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  VStack,
  useToast,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

export default function CreateLinesForm({ contestId }: { contestId: string }): JSX.Element {
  const [title, setTitle] = useState('');
  const [benchmark, setBenchmark] = useState(0);
  const [closingTime, setClosingTime] = useState('');
  const toast = useToast();

  const [createLine, { loading, error }] = useMutation(CREATE_ATS_LINE_MUTATION);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      // Convert local datetime to UTC ISO string
      const localDate = new Date(closingTime);
      const utcString = localDate.toISOString();

      await createLine({
        variables: {
          contestId,
          title,
          benchmark,
          closingTime: utcString,
        },
      });
      // Reset form
      setTitle('');
      setBenchmark(0);
      setClosingTime('');

      toast({
        title: 'Line created.',
        description: 'Successfully created new line.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error('Error creating line:', err);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} style={{ width: '800px', border: '1px solid purple' }}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Benchmark</FormLabel>
          <NumberInput
            value={benchmark}
            min={-999}
            step={0.5}
            precision={1}
            onChange={(_, val) => setBenchmark(val)}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Closing Time</FormLabel>
          <Input
            type="datetime-local"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
          />
        </FormControl>

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error.message}
          </Alert>
        )}

        <Button type="submit" colorScheme="blue" isLoading={loading} loadingText="Creating">
          Create Line
        </Button>
      </VStack>
    </Box>
  );
}
