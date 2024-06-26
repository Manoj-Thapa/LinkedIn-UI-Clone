import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Image, Link, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Recommendation from "../../data/recommendation";
import User from "./User";

const RightSideBar = () => {
  return (
    <Box
      display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
      width={{ base: "xl", md: "0", lg: "270px", xl: "80" }}
      flexDirection="column"
      alignItems="center"
      height="fit-content"
    >
      <Box
        width="100%"
        height="fit-content"
        borderRadius="10px"
        bg="white"
        padding="15px"
        border="1px solid #ccc"
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Text fontWeight="medium">Add to your feed</Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
            color="gray"
          >
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
          </svg>
        </Box>
        <Box>
          {Recommendation.map((user, index) => {
            return (
              <User
                key={index}
                profile={user.profile}
                userName={user.userName}
                headline={user.headline}
                id={user.id}
              />
            );
          })}
        </Box>
        <Button
          as="a"
          fontSize="14px"
          bg="transparent"
          mt="10px"
          width="200px"
          height="20px"
          p="0px"
          rightIcon={<BsArrowRight />}
          color="gray.600"
          _hover={{ bg: "#dfdfdf" }}
          cursor="pointer"
        >
          View all recommendations
        </Button>
      </Box>

      <Box
        cursor="pointer"
        border="1px solid #cccccc"
        width="100%"
        mt="10px"
        borderRadius="7px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          width="96%"
          padding=".5"
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
        />
      </Box>

      <Box
        cursor="pointer"
        mt="17px"
        width="100%"
        borderRadius="7px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        // justifyContent="center"
      >
        <Flex>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            About
          </Link>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Accessibility
          </Link>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Help Center
          </Link>
        </Flex>
        <Flex>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            display="flex"
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Privacy & Terms <MdKeyboardArrowDown />
          </Link>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Ad Choices
          </Link>
        </Flex>
        <Flex>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Advertising
          </Link>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            display="flex"
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Business Services <MdKeyboardArrowDown />
          </Link>
        </Flex>
        <Flex>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            Get the LinkedIn app
          </Link>
          <Link
            _hover={{ color: "#0d6eff", textDecoration: "underline" }}
            m="1"
            color="gray.500"
            fontSize="13px"
          >
            More
          </Link>
        </Flex>
      </Box>

      <Flex width="100%" mt="6px" alignItems="center" justifyContent="center">
        <Button
          padding="0px"
          background="transparent"
          as="a"
          _active={{ bg: "transparent" }}
          _hover={{ bg: "transparent" }}
          rightIcon={<BsLinkedin />}
          mr="2"
          fontSize="14px"
          color="#0a66c2"
        >
          Llindedin
        </Button>
        <Text color="gray.700" fontSize="12px">
          LinkedIn Corporation © 2022
        </Text>
      </Flex>
    </Box>
  );
};

export default RightSideBar;
