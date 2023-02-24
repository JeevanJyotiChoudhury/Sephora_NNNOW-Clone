import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mybag = () => {
  let cartProduct = JSON.parse(localStorage.getItem("cartItem"));
  console.log(cartProduct,"cart");

  const [cartProd, setCartProd] = useState(cartProduct);
  let sum = 0;
  for (let i = 0; i < cartProd.length; i++) {
    let amount = +cartProd[i].price;
    console.log(amount);
    sum = Math.round(sum + amount);
  }

  let disAmount = 0;
  if (sum > 1000) {
    disAmount = Math.round(sum - (10 / 100) * sum);
  }

  let deliveryAmt = 50;
  if (sum > 500) {
    deliveryAmt = "FREE";
  }
  function handleClick(id) {
    let deletedArray = cartProd.filter((elem) => elem.id !== id);
    setCartProd(deletedArray);
    localStorage.setItem("cartItem", JSON.stringify(deletedArray));
    }
    if (cartProduct.length===0) {
        return <h1>Cart is empty</h1>
    }
      return (
        <>
          <Flex w={"80%"} m={" auto"} justify="space-between">
            <Box width="70%">
              {cartProd.map((el) => {
                return (
                  <Flex
                    h={"200px"}
                    m={"10px auto"}
                    p={8}
                    justify="space-between"
                    border="1px solid gray"
                  >
                    <Box w="15%">
                      <Image src={el.image} h="100%" w="100%" />
                    </Box>
                    <Box w="50%" textAlign={"left"}>
                      <Text as="b">{el.brand}</Text>
                      <Text>{el.description}</Text>
                      <Text color="gray">{el.category}</Text>
                      <Text>MRP: ₹{el.strike_price}</Text>
                    </Box>
                    <Box w="25%" textAlign={"left"}>
                      <Text as="b">OFFER PRICE: ₹{el.price}</Text>
                      <Box mt={2}>
                        <DeleteIcon
                          onClick={() => handleClick(el.id)}
                          color="red"
                          fontSize={"20px"}
                        />
                      </Box>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
            <Box width="28%">
              <center>
                <Text fontSize={"2xl"} mt={5} mb={3}>
                  PAYMENT DETAILS
                </Text>
              </center>
              <hr />
              <Flex justify={"space-between"} p={"3"}>
                <Box>
                  <Text>Value of Product(s)</Text>
                </Box>
                <Box color="red">₹ {sum}</Box>
              </Flex>
              <Flex justify={"space-between"} p={"3"}>
                <Box>
                  <Text>No. of product(s)</Text>
                </Box>
                <Box>{cartProduct.length}</Box>
              </Flex>
              <Flex justify={"space-between"} p={"3"}>
                <Box>
                  <Text>Discount</Text>
                </Box>
                <Box color="green">₹ {disAmount}</Box>
              </Flex>
              <Flex justify={"space-between"} p={"3"}>
                <Box>
                  <Text>Delivery</Text>
                </Box>
                <Box color="green">₹ {deliveryAmt}</Box>
              </Flex>
              <center>
                <Text color="blue" fontSize={"sm"}>
                  Free Delivery on shopping above ₹ 500
                </Text>
              </center>
              <Box m={"20px auto"} w={"90%"}>
                <Link to="/checkout">
                  <Button
                    colorScheme="orange"
                    w={"100%"}
                    borderRadius="none"
                    py={3}
                  >
                    CHECKOUT
                  </Button>
                </Link>
              </Box>
              <Box m={"20px auto"} w={"90%"}>
                <Link to="/products">
                  <Button
                    colorScheme="teal"
                    w={"100%"}
                    borderRadius="none"
                    py={3}
                  >
                    SHOP MORE
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </>
      );
};

export default Mybag;
