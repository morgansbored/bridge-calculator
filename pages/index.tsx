import React from "react";
import { Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import { Text, Grid, GridItem, Button, Link as _Link } from "@chakra-ui/react";
import { store, select } from "../store";
import { CostItem } from "../global";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Costs() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/questions");
  };

  const products = useSelector((state: CostItem[]) => state);
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product: CostItem) => (
          <GridItem
            w="100%"
            key={product.id}
            rounded={"2xl"}
            bg={
              product.selected
                ? "blue.500"
                : useColorModeValue("white", "gray.700")
            }
            boxShadow={"lg"}
            p={8}
            onClick={() => store.dispatch(select(product))}
            _hover={{
              bg: "blue.500",
            }}
          >
            <Stack align="center" spacing={4}>
              <Flex w={"100%"} align="center" justify="space-around">
                <Text fontSize={"xl"}>{product.description}</Text>
                <Text fontSize={"xl"} color={"gray.600"}>
                  &pound;{product.estimate.toFixed(2)}
                </Text>
              </Flex>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" p={8}></GridItem>
        <GridItem
          w="100%"
          rounded={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Flex w={"100%"} align="center" justify="space-around">
            <Text fontSize={"xl"}>Total</Text>
            <Text fontSize={"xl"} color={"gray.600"}>
              &pound;
              {products
                .reduce(
                  (acc, current) =>
                    (acc += current.estimate * current.quantity),
                  0
                )
                .toFixed(2)}
            </Text>
          </Flex>
        </GridItem>
        <GridItem w="100%" p={8}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => handleSubmit()}
          >
            Continue
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
