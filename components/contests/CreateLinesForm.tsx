import { useState } from 'react';
import { CREATE_ATS_LINE_MUTATION, CREATE_ATS_TOTAL_MUTATION } from '../admin/queries';
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
  const [totalBenchmark, setTotalBenchmark] = useState(0);
  const [closingTime, setClosingTime] = useState('');
  const toast = useToast();

  const [createLine, { loading, error }] = useMutation(CREATE_ATS_LINE_MUTATION);
  const [createTotalLine, { loading: totalLoading, error: totalError }] =
    useMutation(CREATE_ATS_TOTAL_MUTATION);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const localDate = new Date(closingTime);
      const utcString = localDate.toISOString();

      await Promise.all([
        createLine({
          variables: {
            contestId,
            title,
            benchmark,
            closingTime: utcString,
          },
        }),
        createTotalLine({
          variables: {
            contestId,
            title,
            benchmark: totalBenchmark,
            closingTime: utcString,
          },
        }),
      ]);

      setTitle('');
      setBenchmark(0);
      setTotalBenchmark(0);
      setClosingTime('');

      toast({
        title: 'Lines created.',
        description: 'Successfully created new lines.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error('Error creating lines:', err);
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
          <FormLabel>Away Benchmark</FormLabel>
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
          <FormLabel>Total Benchmark</FormLabel>
          <NumberInput
            value={totalBenchmark}
            min={0}
            step={0.5}
            precision={1}
            onChange={(_, val) => setTotalBenchmark(val)}
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

        {(error || totalError) && (
          <Alert status="error">
            <AlertIcon />
            {error?.message || totalError?.message}
          </Alert>
        )}

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading || totalLoading}
          loadingText="Creating"
        >
          Create Lines
        </Button>
      </VStack>
    </Box>
  );
}
