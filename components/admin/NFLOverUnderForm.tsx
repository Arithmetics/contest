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
import { ChoiceSelectionType, useCreateNflContestMutation } from '../../generated/graphql-types';
import { useState } from 'react';
import { Routes } from '../../constants';

const teams = [
  'arizonaCardinalsBenchmark',
  'atlantaFalconsBenchmark',
  'baltimoreRavensBenchmark',
  'buffaloBillsBenchmark',
  'carolinaPanthersBenchmark',
  'chicagoBearsBenchmark',
  'cincinnatiBengalsBenchmark',
  'clevelandBrownsBenchmark',
  'dallasCowboysBenchmark',
  'denverBroncosBenchmark',
  'detroitLionsBenchmark',
  'greenBayPackersBenchmark',
  'houstonTexansBenchmark',
  'indianapolisColtsBenchmark',
  'jacksonvilleJaguarsBenchmark',
  'kansasCityChiefsBenchmark',
  'lasVegasRaidersBenchmark',
  'losAngelesChargersBenchmark',
  'losAngelesRamsBenchmark',
  'miamiDolphinsBenchmark',
  'minnesotaVikingsBenchmark',
  'newEnglandPatriotsBenchmark',
  'newOrleansSaintsBenchmark',
  'newYorkGiantsBenchmark',
  'newYorkJetsBenchmark',
  'philadelphiaEaglesBenchmark',
  'pittsburghSteelersBenchmark',
  'sanFrancisco49ersBenchmark',
  'seattleSeahawksBenchmark',
  'tampaBayBuccaneersBenchmark',
  'tennesseeTitansBenchmark',
  'washingtonCommandersBenchmark',
];

export default function NFLOverUnderForm(): JSX.Element {
  const toast = useToast();
  const router = useRouter();
  const [contestName, setContestName] = useState('');
  const [closingTime, setClosingTime] = useState('2024-10-18T23:00:00Z');
  const [benchmarks, setBenchmarks] = useState<Record<string, number>>({});

  const [createContest, { loading }] = useCreateNflContestMutation();

  const submitCreateContest = async (): Promise<void> => {
    const res = await createContest({
      variables: {
        contestName: contestName,
        closingTime: closingTime,
        arizonaCardinalsBenchmark: benchmarks.arizonaCardinalsBenchmark ?? 0,
        atlantaFalconsBenchmark: benchmarks.atlantaFalconsBenchmark ?? 0,
        baltimoreRavensBenchmark: benchmarks.baltimoreRavensBenchmark ?? 0,
        buffaloBillsBenchmark: benchmarks.buffaloBillsBenchmark ?? 0,
        carolinaPanthersBenchmark: benchmarks.carolinaPanthersBenchmark ?? 0,
        chicagoBearsBenchmark: benchmarks.chicagoBearsBenchmark ?? 0,
        cincinnatiBengalsBenchmark: benchmarks.cincinnatiBengalsBenchmark ?? 0,
        clevelandBrownsBenchmark: benchmarks.clevelandBrownsBenchmark ?? 0,
        dallasCowboysBenchmark: benchmarks.dallasCowboysBenchmark ?? 0,
        denverBroncosBenchmark: benchmarks.denverBroncosBenchmark ?? 0,
        detroitLionsBenchmark: benchmarks.detroitLionsBenchmark ?? 0,
        greenBayPackersBenchmark: benchmarks.greenBayPackersBenchmark ?? 0,
        houstonTexansBenchmark: benchmarks.houstonTexansBenchmark ?? 0,
        indianapolisColtsBenchmark: benchmarks.indianapolisColtsBenchmark ?? 0,
        jacksonvilleJaguarsBenchmark: benchmarks.jacksonvilleJaguarsBenchmark ?? 0,
        kansasCityChiefsBenchmark: benchmarks.kansasCityChiefsBenchmark ?? 0,
        lasVegasRaidersBenchmark: benchmarks.lasVegasRaidersBenchmark ?? 0,
        losAngelesChargersBenchmark: benchmarks.losAngelesChargersBenchmark ?? 0,
        losAngelesRamsBenchmark: benchmarks.losAngelesRamsBenchmark ?? 0,
        miamiDolphinsBenchmark: benchmarks.miamiDolphinsBenchmark ?? 0,
        minnesotaVikingsBenchmark: benchmarks.minnesotaVikingsBenchmark ?? 0,
        newEnglandPatriotsBenchmark: benchmarks.newEnglandPatriotsBenchmark ?? 0,
        newOrleansSaintsBenchmark: benchmarks.newOrleansSaintsBenchmark ?? 0,
        newYorkGiantsBenchmark: benchmarks.newYorkGiantsBenchmark ?? 0,
        newYorkJetsBenchmark: benchmarks.newYorkJetsBenchmark ?? 0,
        philadelphiaEaglesBenchmark: benchmarks.philadelphiaEaglesBenchmark ?? 0,
        pittsburghSteelersBenchmark: benchmarks.pittsburghSteelersBenchmark ?? 0,
        sanFrancisco49ersBenchmark: benchmarks.sanFrancisco49ersBenchmark ?? 0,
        seattleSeahawksBenchmark: benchmarks.seattleSeahawksBenchmark ?? 0,
        tampaBayBuccaneersBenchmark: benchmarks.tampaBayBuccaneersBenchmark ?? 0,
        tennesseeTitansBenchmark: benchmarks.tennesseeTitansBenchmark ?? 0,
        washingtonCommandersBenchmark: benchmarks.washingtonCommandersBenchmark ?? 0,
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
        <Text fontSize="xl">🏈 NFL Over Under Generator</Text>
        <FormControl id="title" isRequired>
          <FormLabel color={'gray.500'}>Title</FormLabel>
          <Input
            placeholder="NFL Over Under..."
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
                  max={32}
                  precision={2}
                  step={0.5}
                  onChange={onBenchMarkChange(team)}
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
