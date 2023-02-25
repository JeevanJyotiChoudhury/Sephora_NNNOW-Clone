import React, { useContext, useRef, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  let loginUsers = JSON.parse(localStorage.getItem("registeredDetails"));
  const [logins, setLogins] = useState(loginUsers);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token ,loginUser} = useContext(AuthContext)
console.log(token,"token")
  const navigate = useNavigate();

  const emailRef = useRef();

  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
      if (email === "jsusmita549@gmail.com" && password === "1234") {
        loginUser("1234");
      } else {
        setEmail("");
        setPassword("");
        alert("Wrong Password or Register First");
        navigate("/login");
      }
  };
  if (token) {
    return <Navigate to="/cart" />;
  }
  return (
    <>
      <Flex
        minH={"70vh"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} px={6}>
          <Box
            w={"400px"}
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <center>
                <Text fontSize={"3xl"} as="b">
                  LOGIN
                </Text>
              </center>
              <FormControl id="email">
                <FormLabel>Enter Your Email Id</FormLabel>
                <Input
                  type="email"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  backgroundColor={"#ED2887"}
                  onClick={handleLogin}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  borderRadius="none"
                  my={2}
                >
                  CONTINUE
                </Button>
              </Stack>
              <Box>
                Don't have a account
                <Text color="blue">
                  <Link to="/signup">Register Here</Link>
                </Text>
              </Box>
              <hr />
              <Button
                backgroundColor={"#4285F4"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                borderRadius="none"
                my={2}
              >
                Continue With Google
              </Button>
              <Button
                backgroundColor={"#3B5998"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                borderRadius="none"
                my={2}
              >
                Continue With Facebook
              </Button>
              <Box py={6} mx={2}>
                By proceeding, you agree to{" "}
                <span>
                  <Text color="#ED2887" textDecoration={"underline"}>
                    Privacy Policy, Terms & Conditions
                  </Text>
                </span>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
