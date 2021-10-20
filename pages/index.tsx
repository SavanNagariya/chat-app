import { Flex, HStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <HStack h="100vh" spacing={0} bg="white">
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
      ></Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={2}
      ></Flex>
      <Flex as="aside" h="full" maxW="sm" w="full"></Flex>
    </HStack>
  );
};

export default IndexPage;
