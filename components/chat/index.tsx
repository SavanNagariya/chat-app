import {
  Flex,
  HStack,
  Input,
  Text,
  Heading,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import ChatBubble from "../chat/chatBubble";
import { IoSend } from "react-icons/io5";

const messages = [
  {
    message: "Hey Travis! Would you like to go out for a coffee?",
    from: "others",
    dateSent: "20:21",
  },
  {
    message: "Sure! At 11:00 am?",
    from: "me",
    dateSent: "20:22",
  },
  {
    message: "That's too early! How about at noon?",
    from: "others",
    dateSent: "20:22",
  },
  {
    message: "That sounds good as well. Where should we meet?",
    from: "me",
    dateSent: "20:23",
  },
  {
    message: "Meet me at the hardware store on 21 Duck Street.",
    from: "others",
    dateSent: "20:23",
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Which one? The developer or the designer?",
    from: "others",
    dateSent: "20:24",
  },
  {
    message: "The developer. You remember Tony, right?",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: "others",
    dateSent: "20:25",
  },
  {
    message: "Indeed he is! Alright, see you later 👋!",
    from: "me",
    dateSent: "20:25",
  },
];

const Chat = () => {
  return (
    <Flex w="full" flexDirection="column" px={10} py={4}>
      <HStack w="full">
        <Input
          variant="outline"
          rounded="3xl"
          placeholder="Search Friend"
        ></Input>
      </HStack>
      <Flex overflow="auto" flexDirection="column" flex={1} mt={5}>
        <Text fontSize="xs" color="gray.500">
          Chat With
        </Text>
        <Heading size="lg">Kunal</Heading>
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatBubble
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <Flex pt={2} px={5}>
        <Avatar size="md"></Avatar>
        <Input fontSize={18} variant="flushed" mx={3}></Input>
        <IconButton aria-label="Send Message" icon={<IoSend />} />
      </Flex>
    </Flex>
  );
};

export default Chat;
