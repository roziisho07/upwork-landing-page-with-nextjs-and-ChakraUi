import { Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

function Jobs() {
  return (
    <>
      <VStack
        border={"1px"}
        borderTop={"none"}
        align="flex-start"
        //   borderRadius={"12"}
        borderColor="gray.300"
        p="30px"
      >
        <VStack pt="30px" pb="40px" w="full" h={"60"} align={"left"}>
          <Link href={"#"}>
            <Heading size={"sm"}>Making a small change in jpg text</Heading>
            <Text mt={"6"} size="sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium nulla accusamus in eius unde cupiditate veritatis
              alias est, provident, voluptatem neque ratione esse, quaerat illo
              quod laboriosam dignissimos perspiciatis nesciunt!
            </Text>
          </Link>
        </VStack>
      </VStack>
    </>
  );
}

export default Jobs;
