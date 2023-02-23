import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";


const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in HERE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              minH={"70vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"xl"}>Sign in to your account</Heading>
                  
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Remember me</Checkbox>
                        <Link color={"blue.400"}>Forgot password?</Link>
                      </Stack>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login