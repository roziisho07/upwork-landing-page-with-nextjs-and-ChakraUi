import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  SearchIcon,
  BellIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

import MobileNavItem from "./MobileNav";

import { FaPaperPlane } from "react-icons/fa";
import { MdDoorbell, MdHelp } from "react-icons/md";
import Image from "next/image";
import Logo from "../components/images/upwork.svg";
import profile from "../components/images/profile.jpg";
import Head from "next/head";
export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 6 }}
        // borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            color="green"
            src={Logo}
            alt="upwork logo"
            width={80}
            height={80}
          />
          <Flex display={{ base: "none", md: "flex" }} ml={8}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          direction={"row"}
          align="center"
          spacing={6}
        >
          <InputGroup
            maxW={"340px"}
            size="sm"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Search"
              borderRadius={"3xl"}
              borderColor="brand.50"
            />

            <InputRightElement
              pointerEvents="stroke"
              pr={8}
              _hover={{ color: "green" }}

              // eslint-disable-next-line react/no-children-prop
            >
              {
                <Button size={"sm"} variant="none">
                  Jobs
                  <ChevronDownIcon />
                </Button>
              }
            </InputRightElement>
          </InputGroup>
          <BellIcon boxSize={6} />
          <QuestionIcon boxSize={5} />

          <FaPaperPlane size={"20"} />
          <Flex
            bg={"green.100"}
            w="8"
            h="8"
            borderRadius={"40"}
            overflow="hidden"
            objectFit={"cover"}
          >
            <Image
              src={profile}
              alt="profile picture"
              width="40"
              height={"40"}
            />
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("#14a800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={3} pos="absolute">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                // p={1}
                href={navItem.href ?? "#"}
                fontSize={"14px"}
                fontWeight={"600"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"lg"}
                maxW="12rem"
                // w="xs"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
          <Icon w={5} h={5} as={ChevronDownIcon} />
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={1}
      _hover={{ bg: useColorModeValue("", "gray.900") }}
      fontSize={"sm"}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#14a800" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={2}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

interface NavItem {
  label: string;

  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Find Work",
    children: [
      {
        label: "Find work",

        href: "#",
      },
      {
        label: "Saved Jobs",

        href: "#",
      },
      {
        label: "Proposals",

        href: "#",
      },
      {
        label: "Profile",

        href: "#",
      },
      {
        label: "My Stats",

        href: "#",
      },
      {
        label: "My Project Dashboard",

        href: "#",
      },
    ],
  },
  {
    label: "My Jobs",
    children: [
      {
        label: "My Jobs",

        href: "#",
      },
      {
        label: "All Contracts",

        href: "#",
      },
      {
        label: "Work Diary",

        href: "#",
      },
    ],
  },
  {
    label: "Reports",
    children: [
      {
        label: "Overview",

        href: "#",
      },
      {
        label: "My Reports",
        href: "#",
      },
      {
        label: "Billings and Earnings",
        href: "#",
      },
      {
        label: "Connect History",
        href: "#",
      },
      {
        label: "Transaction History",
        href: "#",
      },
      {
        label: "Certificate of Earnings",
        href: "#",
      },
    ],
  },
  {
    label: "Messages",
    href: "#",
  },
];
