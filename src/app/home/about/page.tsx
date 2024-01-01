"use client";

import ComponentInputGroup from "@/app/components/ComponentAbout/InputGroup";
import EditButton from "@/app/components/ComponentAbout/buttonEdit";
import AddImageComponent from "@/app/components/ComponentAbout/inputImage";
import NavbarComponent from "@/app/components/navbar/componentNav";
import { UseInterest } from "@/app/config/interest/useInterest";
import { UseProfile } from "@/app/config/profile/useProfile";
import {
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Box,
  Icon,
  TagLeftIcon,
  TagLabel,
  Tag,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { TbZodiacCapricorn } from "react-icons/tb";

const AboutPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Add in your your to help others know you better"
  );
  const [isSaveUpdate, setIsSaveUpdate] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setIsSaveUpdate(false);
  };

  const handleSaveClick = () => {
    //logika penyimpanan atau pembaruan data 
    setIsEditing(false);
    setIsSaveUpdate(true);
  };
  const {
    userProfile,
    changeSubmitProfile,
    changeHandlerProfile,
    newProfile,
    getProfile,
  } = UseProfile();
  console.log("profile1", userProfile);
  const { interest, getInterest } = UseInterest();
  console.log("fetch interset:", interest);
  const tags = interest.interest_name.split(",").map((tag) => tag.trim());
  console.log("tags", tags);
  const handleChange = (e: any) => {
    setAboutText(e.target.value);
  };

  function convertDateToDDMMYYYY(dateString: any) {
    // Parse tanggal 
    const date = new Date(dateString);


    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }
  function convertDateToDD(dateString: any) {

    const date = new Date(dateString);

    // Mendapatkan nilai hari, bulan, dan tahun
    const day = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}`;

    return formattedDate;
  }
  const basicBoxStyles = {
    background:
      "url(https://e1.pxfuel.com/desktop-wallpaper/63/846/desktop-wallpaper-profile-pics-profile.jpg) center/cover no-repeat",
  };

  useEffect(() => {
    getProfile();
    getInterest();
  }, []);
  return (
    <Box bg={"#09141A"} h={"100%"}>
      {/* navbar */}
      <NavbarComponent />
      <Stack spacing="4">
        {/* card profile */}
        {!userProfile.displayName ? (
          <Card
            size={"lg"}
            m={2}
            color={"whitesmoke"}
            borderRadius={"24px"}
            h={"200px"}
            bg={"#162329"}
          >
            <CardHeader>
              <Heading size="md"></Heading>
            </CardHeader>
            <CardBody display={"flex"} alignItems={"end"}>
              <Box mb={-5}>
                <Text as="b">@malik</Text>
              </Box>
            </CardBody>
          </Card>
        ) : (
          <Card
            size={"lg"}
            m={2}
            color={"whitesmoke"}
            borderRadius={"24px"}
            h={"200px"}
            sx={basicBoxStyles}
            backgroundSize="cover" 
            backgroundPosition="center" 
          >
            <CardHeader>
              <Heading size="md"></Heading>
            </CardHeader>
            <CardBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
              m={"10"}
              ml={0}
            >
              <Box>
                <Text as="b" fontSize={"lg"}>
                  {userProfile.displayName},
                  {convertDateToDD(userProfile.birthday)}
                </Text>
              </Box>
              <Box>
                <Text>{userProfile.gender}</Text>
              </Box>
              <Box>
                <HStack spacing={4}>
                  <Tag
                    size={"md"}
                    key={"md"}
                    variant="subtle"
                    color={"white"}
                    bgColor="rgba(0, 0, 0, .9)"
                  >
                    <TagLeftIcon boxSize="12px" as={TbZodiacCapricorn} />
                    <TagLabel>{userProfile.zodiac}</TagLabel>
                  </Tag>
                  <Tag
                    size={"md"}
                    key={"md"}
                    variant="subtle"
                    color={"white"}
                    bgColor="rgba(0, 0, 0, .9)"
                  >
                    <TagLeftIcon boxSize="12px" as={TbZodiacCapricorn} />
                    <TagLabel>{userProfile.horoscope}</TagLabel>
                  </Tag>
                </HStack>
              </Box>
            </CardBody>
          </Card>
        )}

        {/* card about */}
        <Card
          size={"md"}
          m={2}
          bg={"#0E191F"}
          color={"whitesmoke"}
          borderRadius={"14px"}
        >
          <form onSubmit={changeSubmitProfile}>
            <CardHeader display={"flex"} justifyContent={"space-between"}>
              <Heading size="md" as="b">
                About
              </Heading>
              <EditButton
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                isSaveUpdate={isSaveUpdate}
              />
            </CardHeader>
            <CardBody>
              {isEditing ? (
                <>
                  <AddImageComponent />
                  <ComponentInputGroup
                    change={changeHandlerProfile}
                    newProfile={newProfile}
                  />
                </>
              ) : !userProfile.displayName ? (
                // Jika userProfile tidak ada, tampilkan aboutText
                <Box>
                  <Text>{aboutText}</Text>
                </Box>
              ) : (
                // Jika userProfile ada
                <>
                  <Box display={"flex"} flexDirection={"column"} gap={2}>
                    <Box display={"flex"} alignItems={"center"} color={"white"}>
                      <Text color={"rgba(255, 255, 255, 0.33)"}>
                        Birthday:{" "}
                      </Text>
                      {convertDateToDDMMYYYY(userProfile.birthday)}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} color={"white"}>
                      <Text color={"rgba(255, 255, 255, 0.33)"}>
                        Horoscope:
                      </Text>
                      {userProfile.horoscope}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} color={"white"}>
                      <Text color={"rgba(255, 255, 255, 0.33)"}>Zodiac:</Text>
                      {userProfile.zodiac}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} color={"white"}>
                      <Text color={"rgba(255, 255, 255, 0.33)"}>Height:</Text>
                      {userProfile.height}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} color={"white"}>
                      <Text color={"rgba(255, 255, 255, 0.33)"}>Weight:</Text>
                      {userProfile.weight}
                    </Box>
                  </Box>
                </>
              )}
            </CardBody>
          </form>
        </Card>
        {/* card Interest */}
        <Card
          size={"sm"}
          m={2}
          bg={"#0E191F"}
          color={"whitesmoke"}
          borderRadius={"14px"}
        >
          <CardHeader display={"flex"} justifyContent={"space-between"}>
            <Heading size="md" as="b">
              Interest
            </Heading>
            <Link href={"/home/interest"}>
              <Icon as={BiEditAlt} />
            </Link>
          </CardHeader>
          <CardBody>
            {!interest.interest_name ? (
              <>
                <Text color={"rgba(255, 255, 255, 0.52)"}>
                  Add in your interest to find a better match
                </Text>
              </>
            ) : (
              // Jika userProfile ada
              <>
                <Flex alignItems="center" flexWrap="wrap" gap={2}>
                  {tags.map((tag, i) => (
                    <>
                      <Tag
                        size={"md"}
                        variant="solid"
                        background={"rgba(255, 255, 255, 0.10)"}
                      >
                        {tag}
                      </Tag>
                    </>
                  ))}
                </Flex>
              </>
            )}
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default AboutPage;
