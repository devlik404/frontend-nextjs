"use client";
import {
  InputGroup,
  Input,
  Text,
  Select,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

const ComponentInputGroup = ({ change ,newProfile}: any) => {
  // Function to convert a Date object to ISO 8601 format
function convertDateToISO8601(date: Date): string {
  return date.toISOString().split('T')[0];
}
  return (
    <>
      <Box>
        {/* Display Name */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Display Name
          </Text>
          <Input
            name="displayName"
            flex="1"
            onChange={change}
            color="rgba(255, 255, 255, 0.52)"
            bg="rgba(217, 217, 217, 0.06)"
          />
        </InputGroup>

        {/* Gender */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Gender
          </Text>
          <Select
            flex={useBreakpointValue({ base: "1.17", md: "1.10", lg: "1.05" })}
            placeholder="Select Gender"
            bg="rgba(217, 217, 217, 0.06)"
            color="rgba(255, 255, 255, 0.52)"
            name="gender"
            onChange={change}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </InputGroup>

        {/* Birthday */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Birthday
          </Text>
          <Input
            name="birthday"
            value={convertDateToISO8601(newProfile.birthday)}
            flex="1"
            onChange={change}
            color="rgba(255, 255, 255, 0.52)"
            bg="rgba(217, 217, 217, 0.06)"
            type="date"
          />
        </InputGroup>

        {/* Horoscope */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Horoscope
          </Text>
          <Input
            name="horoscope"
            flex="1"
            onChange={change}
            color="rgba(255, 255, 255, 0.52)"
            bg="rgba(217, 217, 217, 0.06)"
            placeholder="--"
          />
        </InputGroup>

        {/* Zodiac */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Zodiac
          </Text>
          <Input
            name="zodiac"
            flex="1"
            onChange={change}
            color="rgba(255, 255, 255, 0.52)"
            bg="rgba(217, 217, 217, 0.06)"
            placeholder="--"
          />
        </InputGroup>

        {/* Height */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Height
          </Text>
          <Input
            name="height"
            flex="1"
            onChange={change}
            color="rgba(255, 255, 255, 0.52)"
            placeholder="Add Height"
            bg="rgba(217, 217, 217, 0.06)"
          />
        </InputGroup>

        {/* Weight */}
        <InputGroup display="flex" alignItems="center" mb={3} width="100%">
          <Text flex="1" bg="light">
            Weight
          </Text>
          <Input
            name="weight"
            flex="1"
            onChange={change}
            placeholder="Add Weight"
            color="rgba(255, 255, 255, 0.52)"
            bg="rgba(217, 217, 217, 0.06)"
          />
        </InputGroup>
      </Box>
    </>
  );
};

export default ComponentInputGroup;
