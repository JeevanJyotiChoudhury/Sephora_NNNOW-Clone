import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  let cartProduct = JSON.parse(localStorage.getItem("cartItem"));
  console.log(cartProduct,"bnfdnvfij");

  const [cartProd, setCartProd] = useState(cartProduct);
    if (cartProduct === null) {
        return (
          <>
            <h1>No item in cart</h1>
          </>
        );
    }

  return (
    <>
      <Box width="100%">
        {cartProd &&
          cartProd.map((el) => {
            return (
              <Card my={3}>
                <Flex m={"10px auto"} justify="space-between">
                  <Box w="40%">
                    <Image src={el.image} h="100%" w="90%" />
                  </Box>
                  <Box w="60%">
                    <Text>{el.brand}</Text>
                    <Text fontSize={"xs"}>{el.description}</Text>
                    <Text as="s">MRP: ₹{el.strike_price}</Text>
                    <Text color="red">Offer Price:₹{el.price}</Text>
                    <Text>Color:{el.color}</Text>
                    <Text color="gray.500" fontSize={"xs"}>
                      MRP Includes all taxes
                    </Text>
                  </Box>
                </Flex>
              </Card>
            );
          })}
      </Box>
      <Box>
        <Link to="/checkout">
          <Button w={"100%"} my={2} colorScheme="teal">
            CHECKOUT
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to="/cart">
          <Button w={"100%"} my={2} colorScheme="teal">
            VIEW SHOPPING BAG
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Cart;
