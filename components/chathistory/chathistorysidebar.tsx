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
        <Heading fontSize={25} size="sm" mt={5}>
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
      <HStack justifyContent="space-between" w="full" pt={6}>
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
      <Box w="full" pt={2}>
        <Heading size="sm">Chat</Heading>
        <Input
          mt={3}
          variant="outline"
          rounded="3xl"
          w="full"
          h={10}
          placeholder="Search Chat"
        />
      </Box>
      <VStack overflow="auto">
        <HStack
          justifyContent="space-between"
          w="full"
          borderBottomWidth={1}
          borderBottomColor="gray.100"
          py={2}
        >
          <Avatar></Avatar>
          <Box>
            <Heading size="md">Kunal Gosrani</Heading>
            <Text fontSize="xs" color="gray.500">
              dfgjdg sfhjfdh
            </Text>
          </Box>
          <Text>18:49</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="full"
          borderBottomWidth={1}
          borderBottomColor="gray.100"
          py={2}
        >
          <Avatar></Avatar>
          <Box>
            <Heading size="md">Harshit Sangani</Heading>
            <Text fontSize="xs" color="gray.500">
              dfgjdg sfhjfdh
            </Text>
          </Box>
          <Text>18:49</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="full"
          borderBottomWidth={1}
          borderBottomColor="gray.100"
          py={2}
        >
          <Avatar></Avatar>
          <Box>
            <Heading size="md">Savan Nagariya</Heading>
            <Text fontSize="xs" color="gray.500">
              dfgjdg sfhjfdh
            </Text>
          </Box>
          <Text>18:49</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="full"
          borderBottomWidth={1}
          borderBottomColor="gray.100"
          py={2}
        >
          <Avatar></Avatar>
          <Box>
            <Heading size="md">Mayank Oza</Heading>
            <Text fontSize="xs" color="gray.500">
              dfgjdg sfhjfdh
            </Text>
          </Box>
          <Text>18:49</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="full"
          borderBottomWidth={1}
          borderBottomColor="gray.100"
          py={2}
        >
          <Avatar></Avatar>
          <Box>
            <Heading size="md">Savan Sangani</Heading>
            <Text fontSize="xs" color="gray.500">
              dfgjdg sfhjfdh
            </Text>
          </Box>
          <Text>18:49</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LeftSidebar;
