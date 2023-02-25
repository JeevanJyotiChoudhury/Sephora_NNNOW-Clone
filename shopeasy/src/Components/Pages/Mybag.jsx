import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mybag = () => {
  let cartProduct = JSON.parse(localStorage.getItem("cartItem"));
  console.log(cartProduct,"cart");

  const [cartProd, setCartProd] = useState(cartProduct);
  

  let subtotal = 0;
  for (let i = 0; i < cartProd.length; i++) {
    let amount = +cartProd[i].price;
    console.log(amount);
    subtotal = Math.round(subtotal + amount);
  }

  let disAmount = 0;
  if (subtotal > 2000) {
    disAmount = Math.round((10 / 100) * subtotal);
  }

  let prodDiscount = 0
  for (let i = 0; i < cartProd.length; i++) {
    let amount = +cartProd[i].strike_price - +cartProd[i].price;
    console.log(amount);
    prodDiscount = Math.round(prodDiscount + amount);
  }
  let total = subtotal - disAmount;

  let deliveryAmt = 50;
  if (subtotal > 1000) {
    deliveryAmt = "FREE";
  }
  function handleClick(id) {
    let deletedArray = cartProd.filter((elem) => elem.id !== id);
    setCartProd(deletedArray);
    localStorage.setItem("cartItem", JSON.stringify(deletedArray));
    }
    if (cartProduct.length===0) {
      return (
        <Box>
          <center>
            <Box>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxMzZSinllmTl-vLPJoxaqR69Lj9W8nCzRw&usqp=CAU" />
            </Box>
            <Box>
              <Text as="b" color="red">
                YOUR CART IS EMPTY
              </Text>
            </Box>
            <Box color="blue" textDecoration={"underline"}><Link to="/products">Continue Shopping</Link></Box>
          </center>
        </Box>
      );
    }
      return (
        <>
          {/* <Box bg="#2BA2E4" h={"50px"} textAlign="left">
            <Text color="white" as="b" fontSize="xl" ml="30px">
              CHECKOUT
            </Text>
          </Box> */}
          <Flex w={"95%"} m={" auto"} justify="space-between">
            <Box width="70%">
              {cartProd.map((el) => {
                return (
                  <Flex
                    h={"250px"}
                    m={"10px auto"}
                    p={8}
                    justify="space-between"
                  >
                    <Box w="18%">
                      <Image src={el.image} h="100%" w="100%" />
                    </Box>
                    <Box w="50%" textAlign={"left"}>
                      <Text color="gray">{el.brand.toUpperCase()}</Text>
                      <Text as="b" fontSize={"sm"}>
                        {el.description.toUpperCase()}
                      </Text>
                      <Text color="gray">{el.category}</Text>
                      <Text as="b">Rs. {el.price}</Text>
                      <br />
                      <Box mt={2}>
                        <DeleteIcon
                          onClick={() => handleClick(el.id)}
                          color="red"
                          fontSize={"20px"}
                        />
                      </Box>
                    </Box>
                    <Box w="25%" textAlign={"left"} mt={8}>
                      <Text>Delivery within 5-7 days</Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
            <Box width="28%">
              <Box bg="#F2F2F2" pb={5} pt={1} my={4}>
                <Text
                  fontSize={"xl"}
                  mt={3}
                  mb={3}
                  textAlign="left"
                  ml="10px"
                  fontWeight={"bold"}
                >
                  OVERVIEW
                </Text>
                <Flex justify={"space-between"} px={"3"} py={2}>
                  <Box>
                    <Text>Subtotal</Text>
                  </Box>
                  <Box color="black">Rs. {subtotal}</Box>
                </Flex>
                <Flex justify={"space-between"} px={"3"} py={2}>
                  <Box>
                    <Text>No. of product(s)</Text>
                  </Box>
                  <Box>{cartProduct.length}</Box>
                </Flex>
                <Flex justify={"space-between"} px={"3"} py={2}>
                  <Box>
                    <Text color="pink">{subtotal>2000? "Discount (10%)":"Discount"}</Text>
                  </Box>
                  <Box>Rs. {disAmount}</Box>
                </Flex>
                <Flex justify={"space-between"} px={"3"} py={2}>
                  <Box>
                    <Text>Delivery</Text>
                  </Box>
                  <Box color="green">{deliveryAmt}</Box>
                </Flex>
                <hr />
                <Flex justify={"space-between"} px={"3"} py={2}>
                  <Box>
                    <Text as="b">TOTAL</Text>
                  </Box>
                  <Box color="black">Rs. {total}</Box>
                </Flex>
                <center>
                  <Text color="blue" fontSize={"sm"}>
                    Free Delivery on shopping above ₹ 1000 & 10% discount on
                    order above Rs.2000
                  </Text>
                </center>
              </Box>
              <Box m={"20px auto"} w={"100%"}>
                <Link to="/checkout">
                  <Button
                    color="white"
                    backgroundColor={"#FF3399"}
                    w={"100%"}
                    borderRadius="none"
                    py={5}
                  >
                    CHECKOUT
                  </Button>
                </Link>
              </Box>
              <Box m={"20px auto"} w={"100%"}>
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
