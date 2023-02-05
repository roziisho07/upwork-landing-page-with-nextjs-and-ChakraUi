import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";

import Jobs from "./Jobs";

const Main = (props: FlexProps) => {
  return (
    <Flex>
      <Container maxW={"8xl"}>
        <VStack
          border={"1px"}
          align="flex-start"
          p="30px"
          borderRadius={"12"}
          borderColor="gray.300"
        >
          <Text>Wednesday, February 1st</Text>
          <Heading>Good Evening, Jennifer A.</Heading>
        </VStack>

        <VStack
          border={"1px"}
          align="flex-start"
          borderRadius={"12"}
          borderColor="gray.300"
          mt={"8"}
        >
          <InputGroup>
            <Input border={"none"} placeholder="Search for a job" />
            <Button bg={"#108a00"}>
              <SearchIcon color={"white"} />
            </Button>
          </InputGroup>
        </VStack>

        <VStack
          border={"1px"}
          align="flex-start"
          p="30px"
          pb={"0"}
          mt={"8"}
          borderTopRadius="12"
          borderColor="gray.300"
          borderBottom="none"
        >
          <Heading size={"md"}>Jobs you might like</Heading>
          <HStack pt={2}>
            <Button variant={"none"} borderBottom="2px" borderRadius={"none"}>
              Best Matches
            </Button>
            <Button variant={"none"}>Most Recent</Button>
            <Button variant={"none"}>Saved Jobs</Button>
          </HStack>
        </VStack>
        <VStack
          border={"1px"}
          borderBottom="none"
          align="flex-start"
          borderColor="gray.300"
          p="30px"
          pb={"0"}
        >
          <Text>
            Browse jobs that match your experience to a clients hiring
            preferences. Ordered by most relevant.
          </Text>
        </VStack>
        <Jobs />
        <Jobs />
        <Jobs />
        <Jobs />
        <Jobs />
      </Container>
    </Flex>
  );
};

export default Main;
