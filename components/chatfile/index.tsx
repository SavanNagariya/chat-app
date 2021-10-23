import {
  Flex,
  VStack,
  Text,
  IconButton,
  HStack,
  Avatar,
  AvatarBadge,
  Heading,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { RiDribbbleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
const ChatFile = () => {
  return (
    <Flex px={7} w="full" flexDirection="column" alignItems="center" pt={2}>
      <HStack justify="space-between" w="full">
        <Text fontSize="sm" color="gray.500">
          23 October
        </Text>
        <IconButton
          _hover={{ bg: "gray.100" }}
          aria-label="bell"
          variant="ghost"
          rounded="full"
          icon={<FaBell />}
        ></IconButton>
      </HStack>

      <HStack w="full" alignItems="center" flexDirection="column" mt={3}>
        <Avatar size="lg">
          <AvatarBadge
            bg="green.500"
            boxSize={5}
            borderColor="green.500"
          ></AvatarBadge>
        </Avatar>
        <Heading fontSize={25} size="sm" pt={3}>
          Kunal
        </Heading>
        <Flex
          borderBottomWidth={1}
          pt={3}
          borderBottomColor="gray.200"
          w="full"
          justifyContent="center"
          pb={4}
          gridGap={5}
        >
          <IconButton
            icon={<RiInstagramLine />}
            variant="ghost"
            aria-label=""
            color="gray.500"
            fontSize={21}
          />
          <IconButton
            icon={<RiTwitterLine />}
            variant="ghost"
            aria-label=""
            color="gray.500"
            fontSize={21}
          />
          <IconButton
            icon={<RiDribbbleLine />}
            variant="ghost"
            aria-label=""
            color="gray.500"
            fontSize={21}
          />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default ChatFile;
