import {
  Box,
  PageContent,
  useColorMode,
  Stack,
  Text,
  Set,
  Button,
  PageWithHeader,
  TopNav,
  Image,
} from 'bumbag';

export default function HomePage(): JSX.Element {
  return (
    <PageWithHeader
      sticky
      header={
        <TopNav>
          <TopNav.Section>
            <TopNav.Item href="https://bumbag.style" fontWeight="semibold">
              <Image src="/logo.png" height="44px" />
            </TopNav.Item>
            <TopNav.Item href="#">Get started</TopNav.Item>
            <TopNav.Item href="#">Components</TopNav.Item>
          </TopNav.Section>
          <TopNav.Section marginRight="major-2">
            <TopNav.Item>
              <Button variant="ghost" palette="primary">
                Sign up
              </Button>
            </TopNav.Item>
            <TopNav.Item>
              <Button palette="primary">Login</Button>
            </TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
    >
      <Box padding="major-2">Hello world</Box>
      <Box>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
        </PageContent>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          <Example />
        </PageContent>
      </Box>
      <Box>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
        </PageContent>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          <Example />
        </PageContent>
      </Box>
      <Box>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
        </PageContent>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          <Example />
        </PageContent>
      </Box>
      <Box>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
        </PageContent>
        <PageContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Arcu bibendum at varius vel. Volutpat sed cras ornare
          arcu dui. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          <Example />
        </PageContent>
      </Box>
    </PageWithHeader>
  );
}

function Example(): JSX.Element {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Stack>
      <Text>Current mode: {colorMode}</Text>
      <Set>
        <Button onClick={() => setColorMode('default')}>Light</Button>
        <Button onClick={() => setColorMode('dark')}>Dark</Button>
      </Set>
    </Stack>
  );
}
