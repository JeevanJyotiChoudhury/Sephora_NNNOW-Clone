import React from "react";
import { Link, useParams } from "react-router-dom";
import mensproducts_data from "../../allproductdata.json";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { InfoIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
const IndividualproductPage = () => {
  const toast = useToast();
  const position = "top";
  const status = "success";

  const prodid = useParams();
  const prodDetails = mensproducts_data.mens.filter(
    (item) => item.id == prodid.id
  );
  const product = prodDetails[0];

  let discount = Math.round(
    ((product.strike_price - product.price) / product.strike_price) * 100
  );
  let cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  function handleAdd() {
    console.log("added to ls")
    cartArray.push(product);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
  }
  return (
    <>
      <Flex
        w="65%"
        m="20px auto"
        justify="space-between"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      >
        <Box w="50%" h="550px" p={5}>
          <Image src={product.image} h="100%" w="100%" />
          <Flex p={4} mt={7} bg={"gray.200"}>
            <Box px={3} pt={2}>
              <InfoIcon fontSize={"25px"} color={"red"} />
            </Box>
            <Box>
              <Text as="b" fontSize={"sm"} px={2} textAlign={"left"}>
                RETURN POLICY ON THIS ITEM
              </Text>
              <Text px={2} textAlign={"left"}>
                This item is not-returnable.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box w="50%" pl={6} pt={8} textAlign={"left"}>
          <Flex w={"20%"} mx={"left"} my={2} justify={"space-between"}>
            <Image
              src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
              h={"22px"}
              w="22px"
              alt=""
            />
            <Text as="b" fontSize="sm" color="red">
              OFFER
            </Text>
          </Flex>
          <Text fontSize="xl" fontWeight={500}>
            {product.brand.toUpperCase()}
          </Text>
          <Text fontSize="sm" as="samp">
            {product.description}
          </Text>
          <br />
          <Flex w="50%" pt={4} justify={"space-between"}>
            <Box>
              <Text fontSize="md" as="s" color="gray">
                Rs.{product.strike_price}.00
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm" color="tomato">
                ({discount}% OFF) T&C
              </Text>
            </Box>
          </Flex>
          <Box mt={3}>
            <Text fontSize="md" as="b">
              OFFER PRICE: Rs.{product.price}
            </Text>
          </Box>

          <Box mt={6}>
            <Stack spacing={4} direction="row" align="center">
              <h1>SIZE:</h1>
              <Button colorScheme="gray" variant="outline" size="md">
                S
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                M
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                L
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                XL
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                XXL
              </Button>
            </Stack>
          </Box>
          <Flex mr={5} mt={4}>
            <Box px={3} pt={2}>
              <Text as="b">OFFER:</Text>
            </Box>
            <Box>
              <Text fontSize={"sm"}>
                BUY WORTH 6,000 FROM SEPHORA COLLECTIONS & EXCLUSIVES AND GET A
                LAPTOP SLEEVE FREE.
              </Text>
              <Text fontSize={"sm"} color="tomato">
                <Link to="/products">OTHER ELIGIBLE PRODUCTS</Link>
              </Text>
            </Box>
          </Flex>
          <Box mt={6}>
            <Stack spacing={4} direction="row" align="center">
              <h1>Color:</h1>
              <Button colorScheme="gray" variant="outline" size="md">
                {product.color}
              </Button>
            </Stack>
          </Box>
          <Flex border={"2px solid red"} mr={5} mt={4}>
            <Box px={3} pt={2}>
              <WarningIcon fontSize={"32px"} color={"red"} />
            </Box>
            <Box>
              <Text as="b" px={2}>
                IMPORTANT
              </Text>
              <Text px={2} py={2}>
                All products that will be shipped will have ashelf-life more
                than 8 months to 3 years.
              </Text>
            </Box>
          </Flex>
          <Box mr={5} mt={5} mb={8} py={4}>
            <Button
              py={3}
              w={"100%"}
              colorScheme="pink"
              borderRadius={"none"}
              onClick={() => {
                handleAdd();
                toast({
                  title: `1 item added to your cart`,
                  position: position,
                  isClosable: true,
                  status: status,
                });
              }}
            >
              ADD TO BAG
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default IndividualproductPage;
