import React, { useState } from "react";
import mensproducts_data from "../../allproductdata.json";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Stack,
  Checkbox,
  Select,
  Button,
  Card,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import IndividualproductPage from "./IndividualproductPage";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductPage = () => {
  let allproductsdata = mensproducts_data.mens;
  const [data, setData] = useState(allproductsdata);
  const [sortData, setSortData] = useState(allproductsdata);
  const [filterData, setFilterData] = useState(allproductsdata);
  function handlechange(e) {
    if (e.target.value == "LTH") {
      let sortedData = [...sortData];
      sortedData.sort((a, b) => +a.price - +b.price);
      setData(sortedData);
    }
    if (e.target.value == "HTL") {
      let sortedData = [...sortData];
      sortedData.sort((a, b) => +b.price - +a.price);
      setData(sortedData);
    }
  }
  function handleRating(e) {
    if (e.target.value == "LTH") {
      let sortedData = [...sortData];
      sortedData.sort((a, b) => +a.rating - +b.rating);
      setData(sortedData);
    }
    if (e.target.value == "HTL") {
      let sortedData = [...sortData];
      sortedData.sort((a, b) => +b.rating - +a.rating);
      setData(sortedData);
    }
  }

  const handleFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === "I Bears") {
      let res = filterData.filter((item) => item.brand === "I Bears");
      setData([...res]);
    }
    if (e.target.value === "Carter's") {
      let res = filterData.filter((item) => item.brand === "Carter's");
      setData([...res]);
    }
    if (e.target.value === "ToffyHouse") {
      let res = filterData.filter((item) => item.brand === "ToffyHouse");
      setData([...res]);
    }
    if (e.target.value === "Spunkies") {
      let res = filterData.filter((item) => item.brand === "Spunkies");
      setData([...res]);
    }
    if (e.target.value === "Babyhug") {
      let res = filterData.filter((item) => item.brand === "Babyhug");
      setData([...res]);
    }
    if (e.target.value === "Pine") {
      let res = filterData.filter((item) => item.brand === "Pine");
      setData([...res]);
    }
    if (e.target.value === "Kookie") {
      let res = filterData.filter((item) => item.brand === "Kookie");
      setData([...res]);
    }
    if (e.target.value === "Babyoye") {
      let res = filterData.filter((item) => item.brand === "Babyoye");
      setData([...res]);
    }
    if (e.target.value === "Multicolor") {
      let res = filterData.filter((item) => item.color === "Multicolor");
      setData([...res]);
    }
    if (e.target.value === "Sky") {
      let res = filterData.filter((item) => item.color === "mattresses");
      setData([...res]);
    }
    if (e.target.value === "Blue") {
      let res = filterData.filter((item) => item.color === "Blue");
      setData([...res]);
    }
    if (e.target.value === "White") {
      let res = filterData.filter((item) => item.color === "White");
      setData([...res]);
    }
    if (e.target.value === "Yellow") {
      let res = filterData.filter((item) => item.color === "Yellow");
      setData([...res]);
    }
    if (e.target.value === "Orange") {
      let res = filterData.filter((item) => item.color === "Orange");
      setData([...res]);
    }
    if (e.target.value === "Full sleeve") {
      let res = filterData.filter((item) => item.sleeve === "Full sleeve");
      setData([...res]);
    }
    if (e.target.value === "Half sleeve") {
      let res = filterData.filter((item) => item.sleeve === "Half sleeve");
      setData([...res]);
    }
    if (e.target.value === "Pyjama") {
      let res = filterData.filter((item) => item.category === "Pyjama");
      setData([...res]);
    }
    if (e.target.value === "Pyjama") {
      let res = filterData.filter((item) => item.category === "Pyjama");
      setData([...res]);
    }
  };

  return (
    <>
      <Flex justify={"space-between"} w={"90%"} m={"auto"} p={"15px 0"}>
        <Box>
          <Select placeholder="Sort By Rating" onChange={handleRating}>
            <option value="LTH">Rating: Low to High</option>
            <option value="HTL">Rating: High to Low</option>
          </Select>
        </Box>
        <Box w={"200px"}>
          <Select placeholder="Sort By Price" onChange={handlechange}>
            <option value="LTH">Price: Low to High</option>
            <option value="HTL">Price: High to Low</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        <Box w={"20%"}>
          <Text as="b" fontSize="lg" textAlign={"left"}>
            FILTER BY
          </Text>{" "}
          <Flex style={{ margin: "20px" }} flexDirection={"column"}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Brand
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[3]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="U.S. Polo Assn."
                    onChange={handleFilter}
                  >
                    U.S. Polo Assn.
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Carter's"
                    onChange={handleFilter}
                  >
                    Carter's
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="ToffyHouse"
                    onChange={handleFilter}
                  >
                    ToffyHouse
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Spunkies"
                    onChange={handleFilter}
                  >
                    Spunkies
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Babyhug"
                    onChange={handleFilter}
                  >
                    Babyhug
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Pine"
                    onChange={handleFilter}
                  >
                    Pine
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Kookie"
                    onChange={handleFilter}
                  >
                    Kookie
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Babyoye"
                    onChange={handleFilter}
                  >
                    Babyoye
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Color
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Multicolor"
                    onChange={handleFilter}
                  >
                    Multicolor
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Sky"
                    onChange={handleFilter}
                  >
                    Sky
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Blue"
                    onChange={handleFilter}
                  >
                    Blue
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="White"
                    onChange={handleFilter}
                  >
                    White
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Yellow"
                    onChange={handleFilter}
                  >
                    Yellow
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Orange"
                    onChange={handleFilter}
                  >
                    Orange
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Sleeve
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Full sleeve"
                    onChange={handleFilter}
                  >
                    Full sleeve
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Half sleeve"
                    onChange={handleFilter}
                  >
                    Half sleeve
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Category
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="pyjama"
                    onChange={handleFilter}
                  >
                    Pyjama
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="suit"
                    onChange={handleFilter}
                  >
                    Suit
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Neck
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="pyjama"
                    onChange={handleFilter}
                  >
                    Pyjama
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="suit"
                    onChange={handleFilter}
                  >
                    Suit
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Rating
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="pyjama"
                    onChange={handleFilter}
                  >
                    Pyjama
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="suit"
                    onChange={handleFilter}
                  >
                    Suit
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronRightIcon fontSize={"28px"} />}
                border="2px solid black"
                my={2}
                borderRadius={"none"}
                textAlign="left"
              >
                Pattern
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="pyjama"
                    onChange={handleFilter}
                  >
                    Pyjama
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="suit"
                    onChange={handleFilter}
                  >
                    Suit
                  </Checkbox>
                </Stack>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
        <Box w={"80%"}>
          <Grid templateColumns="repeat(3, 1fr)">
            {data.map((el) => {
              return (
                <GridItem
                  p={"10px"}
                  h={"auto"}
                  // _hover={{
                  //   boxShadow:
                  //     "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  // }}
                >
                  <Card p={3}>
                    <Box w={"100%"} h={"70%"} m={"auto"}>
                      <Image src={el.image} w={"100%"} h={"100%"} />
                    </Box>
                    <Flex w={"30%"} mx={"auto"} my={2} justify={"space-evenly"}>
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
                    <Text as="b" fontSize="sm">
                      SEPHORA COLLECTION
                    </Text>
                    <Text w={"100%"} p={"2% 0"} as="samp" fontSize="xs">
                      {el.description}
                    </Text>
                    <Flex
                      mx={"auto"}
                      w={"65%"}
                      justify={"space-between"}
                      pb={"2%"}
                      fontSize="md"
                    >
                      <Text as="s">₹{el.strike_price}</Text>
                      <Text as="b">₹{el.price}</Text>
                      <Text color="red">
                        (
                        {Math.ceil(
                          ((el.strike_price - el.price) / el.strike_price) * 100
                        )}
                        % OFF)
                      </Text>
                    </Flex>
                    <Text>{el.rating} ⭐</Text>

                    <Button
                      leftIcon={<HiOutlineShoppingBag />}
                      colorScheme="teal"
                      variant="solid"
                      mt={"15px"}
                    >
                      <Link to={`/products/${el.id}`}>SHOP NNNOW</Link>
                    </Button>
                  </Card>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default ProductPage;
