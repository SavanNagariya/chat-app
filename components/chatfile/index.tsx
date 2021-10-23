import {
  Flex,
  VStack,
  Text,
  IconButton,
  HStack,
  Avatar,
  AvatarBadge,
  Heading,
  Button,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { RiDribbbleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import ChatLink from "./ChatLink";
import ShareFile from "./ShareFile";
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
      <VStack w="full" overflowY="auto">
        <HStack justify="space-between" w="full" alignItems="center" pt={4}>
          <Heading fontSize="md">Shared File</Heading>
          <Button fontSize="xs" color="gray.500" variant="text">
            see all
          </Button>
        </HStack>
        <List w="full" spacing={5}>
          <ListItem>
            <ShareFile />
          </ListItem>
          <ListItem>
            <ShareFile />
          </ListItem>
          <ListItem>
            <ShareFile />
          </ListItem>
          <ListItem>
            <ShareFile />
          </ListItem>
          <ListItem>
            <ShareFile />
          </ListItem>
        </List>
      </VStack>
      <Divider pt={3}></Divider>
      <VStack w="full" py={3}>
        <HStack justify="space-between" w="full" alignItems="center">
          <Heading fontSize="md">Shared Link</Heading>
          <Button fontSize="xs" color="gray.500" variant="text">
            see all
          </Button>
        </HStack>
        <List w="full" spacing={3}>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
        </List>
      </VStack>
    </Flex>
  );
};

export default ChatFile;
