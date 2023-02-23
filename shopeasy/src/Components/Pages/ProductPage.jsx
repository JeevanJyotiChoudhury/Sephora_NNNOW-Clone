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
        <Box w={"20%"} border={"1px solid black"}>
          <Box style={{ margin: "20px" }} border={"1px solid red"}>
            <Menu>
              <MenuButton as={Button}>Brand</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Color</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Sleeve</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Category</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Neck</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Rating</MenuButton>
              <MenuList>
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
              <MenuButton as={Button}>Pattern</MenuButton>
              <MenuList>
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
          </Box>
        </Box>
        <Box w={"80%"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {data.map((el) => {
              return (
                <GridItem
                  p={"20px"}
                  h={"auto"}
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <Card>
                    <Box w={"100%"} h={"80%"} m={"auto"}>
                      <Image src={el.image} w={"100%"} h={"100%"} />
                    </Box>
                    <Text w={"100%"} p={"2% 0"}>
                      {el.description}
                    </Text>
                    <Flex w={"28%"} justify={"space-between"} pb={"2%"}>
                      <Text>₹{el.price}</Text>
                      <Text as="s" color="gray">
                        ₹{el.strike_price}
                      </Text>
                    </Flex>
                    <Text>{el.rating} ⭐</Text>
                    <Flex w={"70%"} justify={"space-between"}>
                      <Box h="100%" w="20%">
                        <Image
                          src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
                          w={"100%"}
                        />
                      </Box>
                      <Text>Club Price:{+el.price - 20}</Text>
                    </Flex>

                    <Button
                      leftIcon={<CgShoppingCart />}
                      colorScheme="teal"
                      variant="solid"
                      mt={"15px"}
                    >
                      <Link to={`/products/${el.id}`}>Add to Cart</Link>
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
