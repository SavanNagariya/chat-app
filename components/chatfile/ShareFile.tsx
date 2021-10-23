import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";

const ShareFile = () => {
  return (
    <HStack w="full">
      <Box w={14} h={12} bg="gray.300" rounded="lg"></Box>
      <VStack w="full" alignItems="flex-start">
        <Heading fontSize="md" w="full">
          PhotoDanver.jpg
        </Heading>
        <HStack justify="space-between" w="full">
          <Text>23.10.2021 at 16:20</Text>
          <Text>175 Kb</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ShareFile;
