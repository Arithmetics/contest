'use client';

import { ChakraProvider, Box } from '@chakra-ui/react';
import BettingCard from './betting-card';

export default function BettingCardExample() {
  const betOptions = [
    {
      id: 'lakers',
      title: 'LAKERS',
      odds: '+110',
      description: 'Los Angeles Lakers',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/320px-Los_Angeles_Lakers_logo.svg.png',
    },
    {
      id: 'warriors',
      title: 'WARRIORS',
      odds: '-130',
      description: 'Golden State Warriors',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/320px-Los_Angeles_Lakers_logo.svg.png',
    },
    {
      id: 'celtics',
      title: 'CELTICS',
      odds: '+150',
      description: 'Boston Celtics',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/320px-Los_Angeles_Lakers_logo.svg.png',
    },
    {
      id: 'heat',
      title: 'HEAT',
      odds: '-120',
      description: 'Miami Heat',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/320px-Los_Angeles_Lakers_logo.svg.png',
    },
    {
      id: 'bucks',
      title: 'BUCKS',
      odds: '+200',
      description: 'Milwaukee Bucks',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/320px-Los_Angeles_Lakers_logo.svg.png',
    },
  ];

  const handleSelectOption = (optionId: string) => {
    console.log(`Selected option: ${optionId}`);
  };

  return (
    <ChakraProvider>
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <BettingCard
          title="NBA Championship Odds"
          subtitle="2023-2024 Season"
          date="Updated: Today"
          options={betOptions}
          onSelectOption={handleSelectOption}
        />
      </Box>
    </ChakraProvider>
  );
}
