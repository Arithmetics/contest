import { Flex, Tabs, Tab, TabList } from '@chakra-ui/react';

export default function ContestNav(): JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="center" mx={2} borderWidth={0} overflowX="auto">
      <Tabs defaultIndex={0} borderBottomColor="transparent" colorScheme="teal">
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
