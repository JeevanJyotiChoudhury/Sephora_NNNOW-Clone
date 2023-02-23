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
} from "@chakra-ui/react";
const IndividualproductPage = () => {
  const prodid = useParams();
  console.log("id", prodid);
  const prodDetails = mensproducts_data.mens.filter(
    (item) => item.id == prodid.id
  );
  const product = prodDetails[0];
  console.log(product);
  let discount = Math.round(
    ((product.strike_price - product.price) / product.strike_price) * 100
  );
  let cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  function handleAdd() {
    cartArray.push(product);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
  }
  return (
    <>
      <Flex w="85%" m="20px auto">
        <Box w="40%" h="550px">
          <Image src={product.image} h="100%" w="100%" />
        </Box>
        <Box w="60%" pl={6} pt={5}>
          <Text fontSize="xl" fontWeight={500}>
            {product.brand}
          </Text>
          <Text fontSize="xl" fontWeight={500}>
            {product.description}
          </Text>
          <br />
          <Flex w="52%" pt={4}>
            <Box>
              <Text fontSize="xl" as="s" color="gray">
                Rs {product.strike_price}.00
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="xl" as="b">
                Rs {product.price}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="xl" color="tomato">
                ({discount}% OFF) T&C
              </Text>
            </Box>
          </Flex>

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

          <Box mt={6}>
            <Stack spacing={4} direction="row" align="center">
              <h1>Color:</h1>
              <Button colorScheme="gray" variant="outline" size="md">
                {product.color}
              </Button>
            </Stack>
          </Box>

          <Flex mt={6} justify={"space-between"} w={"40%"}>
            <Box>
              <Button onClick={handleAdd} colorScheme="blue">
                Add to Cart
              </Button>
            </Box>
            <Box>
              <Link to="/cart">
                <Button colorScheme="blue">Go to Cart</Button>
              </Link>
            </Box>
          </Flex>

          <hr style={{ marginTop: "30px" }} />
          <Flex className="Extradetails" justify="space-between">
            <Box>
              <p>TENTATIVE DELIVERY</p>
            </Box>
            <Box>
              <p>Cash on Delivery Available </p>
            </Box>

            <Box>
              <p>30 days Return or Exchange</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default IndividualproductPage;
