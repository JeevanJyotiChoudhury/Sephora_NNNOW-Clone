import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Cart from './Cart';

const CartPage = ({ isOpen, onOpen, onClose, btnRef }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        w={"300px"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MY BAG</DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartPage