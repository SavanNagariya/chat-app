import { VStack, Box, Text } from "@chakra-ui/react";

type Props = {
  message: string;
  dateSent: string;
  from: "me" | "others";
};

const ChatBubble = ({ message, dateSent, from }: Props) => {
  const Me = from === "me";
  const alignment = Me ? "flex-end" : "flex-start";

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Box
        bg={Me ? "gray.100" : "blue.50"}
        shadow="md"
        maxW={80}
        p={2}
        rounded="lg"
      >
        {message}
      </Box>
      <Text fontSize="xs" color="gray">
        {dateSent}
      </Text>
    </VStack>
  );
};

export default ChatBubble;
