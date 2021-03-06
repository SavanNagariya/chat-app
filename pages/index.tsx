import { Flex, HStack, Button } from "@chakra-ui/react";
import Chat from "../components/chat";
import ChatFile from "../components/chatfile";
import LeftSidebar from "../components/chathistory/chathistorysidebar";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <>
      <HStack h="100vh" spacing={0}>
        <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
          <Navbar />
        </Flex>
        <Flex
          as="aside"
          h="full"
          maxW="sm"
          w="full"
          borderRightColor="gray.100"
          borderRightWidth={2}
        >
          <LeftSidebar />
        </Flex>
        <Flex
          as="main"
          h="full"
          flex={1}
          borderRightColor="gray.100"
          borderRightWidth={2}
        >
          <Chat />
        </Flex>
        <Flex as="aside" h="full" maxW="sm" w="full">
          <ChatFile />
        </Flex>
      </HStack>
    </>
  );
};

export default IndexPage;
