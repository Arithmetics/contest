import { useColorMode, Stack, Text, Set, Button } from 'bumbag';

export default function Example(): JSX.Element {
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
