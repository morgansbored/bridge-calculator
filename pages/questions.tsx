import React, { useState } from "react";
import { Box, Stack, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Text,
  Button,
  Input,
  Link as _Link,
} from "@chakra-ui/react";
import { store, answer } from "../store";
import { useAppDispatch } from "../components/redux/hooks";

import { QuestionItem } from "../global";
import { useSelector } from "react-redux";

export default function Questions() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const questions = useSelector((state: QuestionItem[]) => state);
  console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ans, setAns] = useState("0");
  console.log("current question is ", currentQuestion);
  const handleSubmit = () => {
    store.dispatch(answer({ id: currentQuestion, answer: ans }));
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <Stack align="center" spacing={4}>
        <Flex w={"100%"} align="center" justify="space-around">
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Back
          </Button>
          <Text fontSize={"xl"}>{questions[currentQuestion].description}</Text>
          <Input
            value={questions[currentQuestion].answer}
            onChange={(e) => setAns(e.target.value)}
          />
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
        </Flex>
      </Stack>
    </>
  );
}
