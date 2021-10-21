import { VStack, IconButton, Tooltip, Text } from "@chakra-ui/react";
import { MdDashboard, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";

const Navigation = () => {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <Text>App</Text>
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdDashboard />}
            aria-label="Dashboard"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiLightningBolt />}
            aria-label="Actions"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiSearch />}
            aria-label="Search"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiBell />}
            aria-label="Notifications"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiTag />}
            aria-label="Tags"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdMail />}
            aria-label="Messages"
            _hover={{ color: "gray.900" }}
          />
        </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton
          color="gray.500"
          icon={<MdSettings />}
          aria-label="Settings"
          _hover={{ color: "gray.900" }}
        />
      </Tooltip>
    </VStack>
  );
};

export default Navigation;
