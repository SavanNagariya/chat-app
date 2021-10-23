import { HStack, Heading, VStack, Text, Box } from "@chakra-ui/react";

const ChatLink = () => {
  return (
    <HStack w="full">
      <Box w={12} h={10} rounded="full" bg="gray.300"></Box>
      <VStack w="full" alignItems="flex-start">
        <HStack w="full" justify="space-between">
          <Heading fontSize="md">Dribble.com</Heading>
          <Text fontSize="sm">19:31</Text>
        </HStack>
        <Text fontSize="sm">23.10.2021</Text>
      </VStack>
    </HStack>
  );
};

export default ChatLink;
