"use client";
import SubNavbarComponent from "@/app/components/navbar/subNav";
import { ApiData } from "@/app/hooks/api";
import {
  Box,
  Flex,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";

interface Iinterest {
  interestName: string;
}

const InterestPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  console.log("inputValue", inputValue);
  console.log("tags", tags);

  const saveHandleInterest = async () => {
    try {
      const response = await ApiData.post(
        `/profile/addInterest`,
        { interestName: tags },
        {
          headers: {
            Authorization: `
              Bearer ${localStorage.access_token}`,
          },
        }
      );
      console.log("interest post:", response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove: any) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <>
      <Box>
        <SubNavbarComponent click={saveHandleInterest} />
        <Box p={10}>
          <Box display={"flex"} flexDirection={"column"} color={"white"}>
            <Text
              fontSize={"14px"}
              as="b"
              bgGradient="linear(to-r, var(--Golden, #94783E), var(--Golden, #F3EDA6), var(--Golden, #F8FAE5), var(--Golden, #FFE2BE), var(--Golden, #D5BE88), var(--Golden, #F8FAE5), var(--Golden, #D5BE88))"
              backgroundClip="text"
              _hover={{
                bgGradient:
                  "linear(to-r, var(--Golden, #F8FAE5), var(--Golden, #D5BE88))",
              }}
            >
              Tell everyone about yourself
            </Text>
            <Text fontSize={"20px"} as="b">
              What interest you?
            </Text>
          </Box>
          <Box mt={5}>
            <Box>
              <Input
                color={"white"}
                border={"none"}
                background={" rgba(217, 217, 217, 0.06)"}
                mb={2}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Press Enter to add a tag"
                mt={2}
              />
              <Flex alignItems="center" flexWrap="wrap">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    borderRadius="14px"
                    variant="solid"
                    background={"rgba(255, 255, 255, 0.10)"}
                    m={1}
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleTagRemove(tag)} />
                  </Tag>
                ))}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InterestPage;
