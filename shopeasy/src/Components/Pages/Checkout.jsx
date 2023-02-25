import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleCheckout() {
    alert("Congratulations !! Your order placed sucessfully");
    navigate("/");
  }
  return (
    <Box w={"60%"} m="auto" p={5}>
      <Box w="100%" p={5}>
        <Text p={6} as="b" fontSize="2xl" textAlign={"center"}>
          ADD ADDRESS
        </Text>
        <FormControl isRequired my={3}>
          <FormLabel>Name</FormLabel>
          <Input  bg="gray.200" />
        </FormControl>
        <FormControl isRequired my={3}>
          <FormLabel>Address</FormLabel>
          <Input  bg="gray.200" />
        </FormControl>
        <Flex my={3} justify={"space-between"}>
          <FormControl isRequired w={"45%"}>
            <FormLabel>Phone</FormLabel>
            <Input  bg="gray.200" />
          </FormControl>
          <FormControl isRequired w={"45%"}>
            <FormLabel>Alternate Number</FormLabel>
            <Input  bg="gray.200" />
          </FormControl>
        </Flex>
        <Flex my={3} justify={"space-between"}>
          <FormControl isRequired w={"45%"}>
            <FormLabel>Pincode</FormLabel>
            <Input  bg="gray.200" />
          </FormControl>
          <FormControl w={"45%"}>
            <FormLabel>Landmark</FormLabel>
            <Input bg="gray.200" />
          </FormControl>
        </Flex>
      </Box>
      <Button onClick={onOpen} colorScheme="teal">
        Select Payment Option
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text p={6} color="tomato" fontSize="2xl" textAlign={"center"}>
              PAYMENT OPTIONS
            </Text>
            <hr />
            <Box m={4}>
              <Button w="100%" colorScheme="blue">
                Credit Card
              </Button>
            </Box>
            <Box m={4}>
              <Button w="100%" colorScheme="blue">
                BHIM UPI
              </Button>
            </Box>
            <Box m={4}>
              <Button w="100%" colorScheme="blue">
                DEBIT CARD
              </Button>
            </Box>
            <Box m={4}>
              <Button w="100%" colorScheme="blue" onClick={handleCheckout}>
                CASH ON DELIVERY
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Checkout;
