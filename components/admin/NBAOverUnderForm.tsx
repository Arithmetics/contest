import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useToast,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChoiceSelectionType, useCreateNbaContestMutation } from '../../generated/graphql-types';
import { useState } from 'react';
import { Routes } from '../../constants';

const teams = [
  'atlantaHawksBenchmark',
  'bostonCelticsBenchmark',
  'brooklynNetsBenchmark',
  'charlotteHornetsBenchmark',
  'chicagoBullsBenchmark',
  'clevelandCavaliersBenchmark',
  'dallasMavericksBenchmark',
  'denverNuggetsBenchmark',
  'detroitPistonsBenchmark',
  'goldenStateWarriorsBenchmark',
  'houstonRocketsBenchmark',
  'indianaPacersBenchmark',
  'lAClippersBenchmark',
  'losAngelesLakersBenchmark',
  'memphisGrizzliesBenchmark',
  'miamiHeatBenchmark',
  'milwaukeeBucksBenchmark',
  'minnesotaTimberwolvesBenchmark',
  'newOrleansPelicansBenchmark',
  'newYorkKnicksBenchmark',
  'oklahomaCityThunderBenchmark',
  'orlandoMagicBenchmark',
  'philadelphia76ersBenchmark',
  'phoenixSunsBenchmark',
  'portlandTrailBlazersBenchmark',
  'sacramentoKingsBenchmark',
  'sanAntonioSpursBenchmark',
  'torontoRaptorsBenchmark',
  'utahJazzBenchmark',
  'washingtonWizardsBenchmark',
];

export default function NBAOverUnderForm(): JSX.Element {
  const toast = useToast();
  const router = useRouter();
  const [contestName, setContestName] = useState('');
  const [closingTime, setClosingTime] = useState('2024-10-18T23:00:00Z');
  const [benchmarks, setBenchmarks] = useState<Record<string, number>>({});

  const [createContest, { loading }] = useCreateNbaContestMutation();

  const submitCreateContest = async (): Promise<void> => {
    const res = await createContest({
      variables: {
        contestName: contestName,
        closingTime: closingTime,
        atlantaHawksBenchmark: benchmarks.atlantaHawksBenchmark ?? 0,
        bostonCelticsBenchmark: benchmarks.bostonCelticsBenchmark ?? 0,
        brooklynNetsBenchmark: benchmarks.brooklynNetsBenchmark ?? 0,
        charlotteHornetsBenchmark: benchmarks.charlotteHornetsBenchmark ?? 0,
        chicagoBullsBenchmark: benchmarks.chicagoBullsBenchmark ?? 0,
        clevelandCavaliersBenchmark: benchmarks.clevelandCavaliersBenchmark ?? 0,
        dallasMavericksBenchmark: benchmarks.dallasMavericksBenchmark ?? 0,
        denverNuggetsBenchmark: benchmarks.denverNuggetsBenchmark ?? 0,
        detroitPistonsBenchmark: benchmarks.detroitPistonsBenchmark ?? 0,
        goldenStateWarriorsBenchmark: benchmarks.goldenStateWarriorsBenchmark ?? 0,
        houstonRocketsBenchmark: benchmarks.houstonRocketsBenchmark ?? 0,
        indianaPacersBenchmark: benchmarks.indianaPacersBenchmark ?? 0,
        lAClippersBenchmark: benchmarks.lAClippersBenchmark ?? 0,
        losAngelesLakersBenchmark: benchmarks.losAngelesLakersBenchmark ?? 0,
        memphisGrizzliesBenchmark: benchmarks.memphisGrizzliesBenchmark ?? 0,
        miamiHeatBenchmark: benchmarks.miamiHeatBenchmark ?? 0,
        milwaukeeBucksBenchmark: benchmarks.milwaukeeBucksBenchmark ?? 0,
        minnesotaTimberwolvesBenchmark: benchmarks.minnesotaTimberwolvesBenchmark ?? 0,
        newOrleansPelicansBenchmark: benchmarks.newOrleansPelicansBenchmark ?? 0,
        newYorkKnicksBenchmark: benchmarks.newYorkKnicksBenchmark ?? 0,
        oklahomaCityThunderBenchmark: benchmarks.oklahomaCityThunderBenchmark ?? 0,
        orlandoMagicBenchmark: benchmarks.orlandoMagicBenchmark ?? 0,
        philadelphia76ersBenchmark: benchmarks.philadelphia76ersBenchmark ?? 0,
        phoenixSunsBenchmark: benchmarks.phoenixSunsBenchmark ?? 0,
        portlandTrailBlazersBenchmark: benchmarks.portlandTrailBlazersBenchmark ?? 0,
        sacramentoKingsBenchmark: benchmarks.sacramentoKingsBenchmark ?? 0,
        sanAntonioSpursBenchmark: benchmarks.sanAntonioSpursBenchmark ?? 0,
        torontoRaptorsBenchmark: benchmarks.torontoRaptorsBenchmark ?? 0,
        utahJazzBenchmark: benchmarks.utahJazzBenchmark ?? 0,
        washingtonWizardsBenchmark: benchmarks.washingtonWizardsBenchmark ?? 0,
        overSelection: {
          title: 'over',
          selection: ChoiceSelectionType.Over,
          isWin: false,
        },
        underSelection: {
          title: 'under',
          selection: ChoiceSelectionType.Under,
          isWin: false,
        },
      },
    });
    if (res.data?.createContest?.id) {
      toast({
        title: 'Contest created',
        description: 'Upload the banner next and review win totals',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push(`/${Routes.CONTESTS}/${res.data.createContest.id}`);
    } else {
      const errorText = res.errors;

      toast({
        title: 'Error',
        description: JSON.stringify(errorText),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onBenchMarkChange = (name: string) => {
    return (valueString: string) => {
      setBenchmarks({
        ...benchmarks,
        [name]: parseFloat(valueString),
      });
    };
  };

  return (
    <Center>
      <Flex
        direction="column"
        padding={8}
        style={{
          gap: '8px',
        }}
      >
        <Text fontSize="xl">🏀 NBA Over Under Generator</Text>
        <FormControl id="title" isRequired>
          <FormLabel color={'gray.500'}>Title</FormLabel>
          <Input
            placeholder="NBA Over Under..."
            _placeholder={{ color: 'gray.500' }}
            name="title"
            type="text"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            value={contestName}
            onChange={(e) => setContestName(e.target.value)}
            disabled={loading}
          />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel color={'gray.500'}>Closing Date (UTC)</FormLabel>
          <Input
            placeholder="2024-10-18T23:00:00Z"
            _placeholder={{ color: 'gray.500' }}
            name="closingDate"
            type="text"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            disabled={loading}
          />
        </FormControl>
        <Flex width={700} flexWrap="wrap" justifyContent="space-between" gap={3}>
          {teams.map((team) => {
            return (
              <FormControl id={team} key={team} isRequired width={300}>
                <FormLabel color={'gray.500'}>{team}</FormLabel>
                <NumberInput
                  value={benchmarks[team]}
                  min={0}
                  max={82}
                  onChange={onBenchMarkChange(team)}
                  precision={2}
                  step={0.5}
                >
                  <NumberInputField disabled={loading} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            );
          })}
        </Flex>
        <Button
          variant="red-gradient"
          onClick={submitCreateContest}
          isLoading={loading}
          disabled={loading}
        >
          Submit
        </Button>
      </Flex>
    </Center>
  );
}
