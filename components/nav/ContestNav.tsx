import { Flex, Tabs, Tab, TabList } from '@chakra-ui/react';

type ContestNavProps = {
  selectedTab?: number;
  handleTabsChange?: (arg0: number) => void;
};

export default function ContestNav({
  selectedTab,
  handleTabsChange,
}: ContestNavProps): JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="center" mx={2} borderWidth={0} overflowX="auto">
      <Tabs
        index={selectedTab}
        borderBottomColor="transparent"
        colorScheme="teal"
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
            Picks
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
            Leaderboard
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
            Rules
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
            Tracker
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
            History
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}
