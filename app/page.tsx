"use client";
import Header from "@/components/Header";
import Main from "@/components/Main";
import ProfileData from "@/components/ProfileData";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Header />
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Flex w="full" h="auto" gap={"4"}>
          <Main />
          <ProfileData />
        </Flex>
      </Box>
    </main>
  );
}
