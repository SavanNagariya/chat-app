import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  VStack,
  IconButton,
  Text,
  HStack,
  Box,
  Input,
} from "@chakra-ui/react";
import { RiInstagramLine, RiTwitterLine, RiDribbbleLine } from "react-icons/ri";

const friendOnline = [
  "gosrani kunal",
  "harshit sangani",
  "savan sangani",
  "mayank oza",
  "jhfduk hfd",
  "hgdsfj fhs",
  "fdjkk dfnsd",
];
const LeftSidebar = () => {
  return (
    <VStack w="full" h="full" alignItems="center" px={10}>
      <Flex w="full" alignItems="center" flexDirection="column" mt={10}>
        <Avatar size="lg">
          <AvatarBadge
            bg="green.500"
            boxSize={5}
            borderColor="green.500"
          ></AvatarBadge>
        </Avatar>
        <Heading color="black" fontSize={25} size="sm" mt={5}>
          Savan
        </Heading>
        <Flex
          mt={3}
          borderBottomWidth={1}
          borderBottomColor="gray.200"
          w="full"
          justifyContent="center"
          pb={4}
        >
          <IconButton
            icon={<RiInstagramLine />}
            variant="ghost"
            aria-label=""
            color="gray.700"
            fontSize={21}
          />
          <IconButton
            icon={<RiTwitterLine />}
            variant="ghost"
            aria-label=""
            color="gray.700"
            fontSize={21}
          />
          <IconButton
            icon={<RiDribbbleLine />}
            variant="ghost"
            aria-label=""
            color="gray.700"
            fontSize={21}
          />
        </Flex>
      </Flex>
      <HStack color="black" justifyContent="space-between" w="full" pt={6}>
        <Heading size="xs">Friend Online</Heading>
        <Text>22</Text>
      </HStack>
      <HStack overflowX="scroll" minH={24} px={2} w="full" spacing={3}>
        {friendOnline.map((Friend) => (
          <Avatar name={Friend} key={Friend}>
            <AvatarBadge
              bg="green.500"
              boxSize={3}
              borderColor="green.500"
            ></AvatarBadge>
          </Avatar>
        ))}
      </HStack>
      <Box
        borderBottomWidth={1}
        borderBottomColor="gray.200"
        w="full"
        py={2}
      ></Box>
      <Box w="full" color="black">
        <Input
          variant="filled"
          rounded="xl"
          w="full"
          h={10}
          bg="gray.100"
          color="black"
          placeholder="Search Chat"
        />
      </Box>
    </VStack>
  );
};

export default LeftSidebar;
