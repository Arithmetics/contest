import { Text, Spinner, Center } from '@chakra-ui/react';
import { useState } from 'react';
import ContestNav from '../../components/nav/ContestNav';
import {
  useContestByIdQuery,
  User,
  Contest,
  useCurrentUserQuery,
} from '../../generated/graphql-types';
import BetsTab from './BetsTab';
import LeaderboardTab from './LeaderboardTab';
import HistoryTab from './HistoryTab';
import TrackerTab from './TrackerTab';
import RulesTab from './RulesTab';

export enum ContestTabs {
  BETS = 'bets',
  LEADERBOARD = 'leaderboard',
  RULES = 'rules',
  TRACKER = 'tracker',
  HISTORY = 'history',
}

const tabIndices: Record<number, ContestTabs> = {
  0: ContestTabs.BETS,
  1: ContestTabs.LEADERBOARD,
  2: ContestTabs.RULES,
  3: ContestTabs.TRACKER,
  4: ContestTabs.HISTORY,
};

type ContestProps = {
  id?: string;
};

export default function ContestUI({ id }: ContestProps): JSX.Element {
  //ui
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabsChange = (index: number): void => {
    setSelectedTab(index);
  };

  // data
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: id || '',
    },
  });

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();

  if (!data?.Contest) {
    return (
      <Center marginTop={'30vh'}>
        <Text fontSize="2xl">No contest found</Text>
      </Center>
    );
  }

  if (loading || getUserLoading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  const activeTab = (tab: number): JSX.Element | undefined => {
    const contest = data.Contest as Contest;
    if (tabIndices[tab] === ContestTabs.BETS) {
      return <BetsTab contest={contest} user={userData?.authenticatedItem as User} />;
    }
    if (tabIndices[tab] === ContestTabs.LEADERBOARD) {
      return <LeaderboardTab contest={contest} />;
    }
    if (tabIndices[tab] === ContestTabs.RULES) {
      return <RulesTab />;
    }
    if (tabIndices[tab] === ContestTabs.TRACKER) {
      return <TrackerTab />;
    }
    if (tabIndices[tab] === ContestTabs.HISTORY) {
      return <HistoryTab />;
    }
  };

  return (
    <>
      <ContestNav
        contest={data.Contest as Contest}
        selectedTab={selectedTab}
        handleTabsChange={handleTabsChange}
      />
      {activeTab(selectedTab)}
    </>
  );
}
