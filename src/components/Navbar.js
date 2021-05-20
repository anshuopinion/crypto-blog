import { SearchIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";

const NavBar = () => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      padding="4"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" w="50px" h="50px" src="/images/btc.svg" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr="2">Posts</Text> <Text mr="2">Trending</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            type="tel"
            placeholder="Search Post..."
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default NavBar;
