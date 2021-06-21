import { Text, Button, Input, HStack } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>Co-op game of minesweeper</Text>
      <HStack spacing="24px">
        <Input variant="filled" placeholder="Join exting game" />
        <Button colorScheme="pink" variant="solid">
          Join
        </Button>
      </HStack>
      <Button colorScheme="purple" variant="solid">
        Create a Game
      </Button>
    </Main>

    <DarkModeSwitch />
  </Container>
);

export default Index;
