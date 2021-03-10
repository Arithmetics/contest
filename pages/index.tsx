import { Button, PageWithHeader, TopNav, Box, Image } from 'bumbag';

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
      border="default"
      overrides={{ PageWithHeader: { styles: { base: { minHeight: 'unset' } } } }}
    >
      <Box padding="major-2">Hello world</Box>
    </PageWithHeader>
  );
}
