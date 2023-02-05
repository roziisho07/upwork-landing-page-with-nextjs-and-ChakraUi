import {
  Flex,
  Heading,
  VStack,
  Text,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";
import profile from "../components/images/profile.jpg";
import Image from "next/image";

import { FaPaperPlane } from "react-icons/fa";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  StarIcon,
} from "@chakra-ui/icons";

function ProfileData() {
  return (
    <Flex
      direction={"column"}
      display={{ base: "none", md: "none", lg: "flex" }}
    >
      <VStack
        border={"1px"}
        p="30px"
        // px={"24"}
        borderTopRadius={"12"}
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="center"
      >
        <Box
          bg={"green.100"}
          w="60px"
          h="60px"
          borderRadius={"40"}
          overflow="hidden"
          objectFit={"cover"}
        >
          <Image src={profile} alt="profile picture" width="60" height={"60"} />
        </Box>

        <Flex flexDirection="column" align={"center"} justify="center">
          <Heading
            size={"md"}
            textDecor="underline"
            mt="20px"
            _hover={{ color: "green" }}
          >
            <Link href="/profile">Jennifer A.</Link>
          </Heading>
          <Text size={"sm"} mt="sm">
            Photographer
          </Text>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="20px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="center"
        bg={"brand.50"}
      >
        <Flex flexDirection="column" align={"flex-start"} justify="flex-start">
          <Box>
            <Heading size={"xs"} mt="20px" textAlign={"left"}>
              <Link href="#">Profile Completeness:</Link>
            </Heading>
            <Flex align={"center"} gap="2" mt={"4"}>
              <Box w={"200px"} bg={"green"} h="4px"></Box>
              <Text fontSize={"12px"}>100%</Text>
            </Flex>

            <Flex align={"center"} gap="2" mt={"8"}>
              <StarIcon color={"green"} />
              <Text fontSize={"14px"}>Keep your skills up to date!</Text>
            </Flex>
            <Link color="green" fontWeight={600} mt="1">
              Add new Skills
            </Link>
            <Flex align={"flex-start"} justify="flex-start" mt={"20px"}>
              <Link textAlign={"left"} color="green" fontWeight={600}>
                60 Available Connects
              </Link>
            </Flex>
          </Box>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Flex align={"center"} justify="center" gap={"2"} mt={"20px"}>
            <Text fontSize={"16px"} fontWeight="600">
              Availability Badge
            </Text>
            <EditIcon color={"green"} cursor="pointer" />
          </Flex>

          <Flex align={"center"} justify="center" gap={"6"} mt={"20px"}>
            <Text fontSize={"16px"} fontWeight="600">
              Hours per week
            </Text>
            <EditIcon color={"green"} cursor="pointer" />
          </Flex>
          <Flex align={"center"} justify="center" gap={"7"} mt={"20px"}>
            <Text fontSize={"16px"} fontWeight="600">
              Job Preference
            </Text>
            <EditIcon color={"green"} cursor="pointer" />
          </Flex>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
        borderBottomRadius={"2xl"}
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Flex align={"center"} justify="center" gap={"8"} mt={"20px"}>
            <Text fontSize={"16px"} fontWeight="600">
              My Categories
            </Text>
            <EditIcon color={"green"} cursor="pointer" />
          </Flex>

          <VStack align={"flex-start"} justify="flex-start" mt={"20px"}>
            <Link
              textAlign={"left"}
              color="green"
              fontSize={"sm"}
              fontWeight={600}
              href="#"
            >
              Photography
            </Link>
            <Link
              textAlign={"left"}
              color="green"
              fontSize={"sm"}
              fontWeight={600}
              href="#"
            >
              Branding & Logo Design
            </Link>

            <Link
              textAlign={"left"}
              color="green"
              fontSize={"sm"}
              fontWeight={600}
              href="#"
            >
              Video & Animation
            </Link>
            <Link
              textAlign={"left"}
              color="green"
              fontSize={"sm"}
              fontWeight={600}
              href="#"
            >
              NFT, AR/VR & Game Art
            </Link>
          </VStack>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        borderRadius="12"
        p="30px"
        mt="14"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Heading size={"md"}>Proposals</Heading>
          <Link
            textAlign={"left"}
            color="green"
            fontSize={"sm"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            My proposals
          </Link>

          <Link
            textAlign={"left"}
            color="green"
            fontSize={"sm"}
            fontWeight={600}
            href="#"
            mt="12"
          >
            5 submitted proposals
          </Link>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        borderRadius="12"
        p="30px"
        mt="14"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Heading size={"md"}>Project Catalog</Heading>
          <Link
            textAlign={"left"}
            color="green"
            fontSize={"sm"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            My Project Dashboard
          </Link>

          <Link
            textAlign={"left"}
            color="green"
            fontSize={"sm"}
            fontWeight={600}
            href="#"
            mt="12"
          >
            create a catalog project
          </Link>
          <Text fontSize={"sm"}>for clients to purchase instantly</Text>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        borderTopRadius="12"
        p="30px"
        mt="14"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Link
            textAlign={"left"}
            fontSize={"lg"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            Upwork Academy <ChevronRightIcon boxSize={"6"} />
          </Link>
        </Flex>
      </VStack>
      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Link
            textAlign={"left"}
            fontSize={"lg"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            Direct Contracts <ChevronRightIcon boxSize={"6"} />
          </Link>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Link
            textAlign={"left"}
            fontSize={"lg"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            Get Paid
            <ChevronRightIcon boxSize={"6"} />
          </Link>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Link
            textAlign={"left"}
            fontSize={"lg"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            Community & Forums
            <ChevronRightIcon boxSize={"6"} />
          </Link>
        </Flex>
      </VStack>

      <VStack
        border={"1px"}
        p="30px"
        borderColor="gray.300"
        alignContent={"center"}
        justifyContent="flex-start"
        borderBottomRadius={"12"}
      >
        <Flex
          flexDirection="column"
          align={"flex-start"}
          justify="flex-start"
          w={"full"}
        >
          <Link
            textAlign={"left"}
            fontSize={"lg"}
            fontWeight={600}
            href="#"
            mt="2"
          >
            Help Center
            <ChevronRightIcon boxSize={"6"} />
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default ProfileData;
