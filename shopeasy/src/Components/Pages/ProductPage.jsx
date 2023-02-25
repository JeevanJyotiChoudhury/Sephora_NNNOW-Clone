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
    if (e.target.value === "HUDA BEAUTY") {
      let res = filterData.filter((item) => item.brand === "HUDA BEAUTY");
      setData([...res]);
    }
    if (e.target.value === "Sephora Collection") {
      let res = filterData.filter(
        (item) => item.brand === "Sephora Collection"
      );
      setData([...res]);
    }
    if (e.target.value === "Too Faced") {
      let res = filterData.filter((item) => item.brand === "Too Faced");
      setData([...res]);
    }
    if (e.target.value === "Bobbi Brown") {
      let res = filterData.filter((item) => item.brand === "Bobbi Brown");
      setData([...res]);
    }
    if (e.target.value === "30 ML") {
      let res = filterData.filter((item) => item.size === "30 ML");
      setData([...res]);
    }
    if (e.target.value === "25 ML") {
      let res = filterData.filter((item) => item.size === "25 ML");
      setData([...res]);
    }
    if (e.target.value === "7.5 gm") {
      let res = filterData.filter((item) => item.size === "7.5 gm");
      setData([...res]);
    }
    if (e.target.value === "35 ML") {
      let res = filterData.filter((item) => item.size === "35 ML");
      setData([...res]);
    }
    if (e.target.value === "40 ML") {
      let res = filterData.filter((item) => item.size === "40 ML");
      setData([...res]);
    }
    if (e.target.value === "12.5 gm") {
      let res = filterData.filter((item) => item.size === "12.5 gm");
      setData([...res]);
    }
    if (e.target.value === "9 gm") {
      let res = filterData.filter((item) => item.size === "9 gm");
      setData([...res]);
    }
    if (e.target.value === "350G Dulce De Leche") {
      let res = filterData.filter(
        (item) => item.color === "350G Dulce De Leche"
      );
      setData([...res]);
    }
    if (e.target.value === "33 Walnut") {
      let res = filterData.filter((item) => item.color === "33 Walnut");
      setData([...res]);
    }
    if (e.target.value === "10 Ivory") {
      let res = filterData.filter((item) => item.color === "10 Ivory");
      setData([...res]);
    }
    if (e.target.value === "36 Amber") {
      let res = filterData.filter((item) => item.color === "36 Amber");
      setData([...res]);
    }
    if (e.target.value === "25 N") {
      let res = filterData.filter((item) => item.color === "25 N");
      setData([...res]);
    }
    if (e.target.value === "33.5 Y") {
      let res = filterData.filter((item) => item.color === "33.5 Y");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
      setData([...res]);
    }
    if (e.target.value === "Natural") {
      let res = filterData.filter((item) => item.category === "Natural");
      setData([...res]);
    }
    if (e.target.value === "Matte") {
      let res = filterData.filter((item) => item.category === "Matte");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
      setData([...res]);
    }
    if (e.target.value === "Foundation") {
      let res = filterData.filter((item) => item.category === "Foundation");
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
                    value="HUDA BEAUTY"
                    onChange={handleFilter}
                  >
                    HUDA BEAUTY
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Sephora Collection"
                    onChange={handleFilter}
                  >
                    Sephora Collection
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Too Faced"
                    onChange={handleFilter}
                  >
                    Too Faced
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Bobbi Brown"
                    onChange={handleFilter}
                  >
                    Bobbi Brown
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
                Size
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="30 ML"
                    onChange={handleFilter}
                  >
                    30 ML
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="25 ML"
                    onChange={handleFilter}
                  >
                    25 ML
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="7.5 gm"
                    onChange={handleFilter}
                  >
                    7.5 gm
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="35 ML"
                    onChange={handleFilter}
                  >
                    35 ML
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="40 ML"
                    onChange={handleFilter}
                  >
                    40 ML
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="12.5 gm"
                    onChange={handleFilter}
                  >
                    12.5 gm
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="9 gm"
                    onChange={handleFilter}
                  >
                    9 gm
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
                    value="350G Dulce De Leche"
                    onChange={handleFilter}
                  >
                    350G Dulce De Leche
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="33 Walnut"
                    onChange={handleFilter}
                  >
                    33 Walnut
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="10 Ivory"
                    onChange={handleFilter}
                  >
                    10 Ivory
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="36 Amber"
                    onChange={handleFilter}
                  >
                    36 Amber
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="25 N"
                    onChange={handleFilter}
                  >
                    25 N
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="33.5 Y"
                    onChange={handleFilter}
                  >
                    33.5 Y
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
                    value="Foundation"
                    onChange={handleFilter}
                  >
                    Foundation
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
                Finish
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Matte"
                    onChange={handleFilter}
                  >
                    Matte
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Natural"
                    onChange={handleFilter}
                  >
                    Natural
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
                Skin Type
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="All"
                    onChange={handleFilter}
                  >
                    All
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Normal"
                    onChange={handleFilter}
                  >
                    Normal
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Combination"
                    onChange={handleFilter}
                  >
                    Combination
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Oily"
                    onChange={handleFilter}
                  >
                    Oily
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
                Coverage
              </MenuButton>
              <MenuList p={3}>
                <Stack spacing={[1]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Full"
                    onChange={handleFilter}
                  >
                    Full
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Medium"
                    onChange={handleFilter}
                  >
                    Medium
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="red"
                    value="Sheer"
                    onChange={handleFilter}
                  >
                    Sheer
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
                <GridItem p={"10px"} h={"auto"}>
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
                      {el.brand.toUpperCase()}
                    </Text>
                    <Text w={"100%"} p={"2% 0"} as="samp" fontSize="xs">
                      {el.description}
                    </Text>

                    <Text as="b">Rs.{el.price}</Text>
                    {/* <Text>{el.brand} </Text>
                    <Text>{el.category} </Text>
                    <Text>{el.color} </Text>
                    <Text>{el.rating} ⭐</Text> */}

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
