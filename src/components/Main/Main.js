import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CreatePost from "./CreatePost";
import Post from "./Post";
import users from "../../data/users";
import styles from "./main.module.css";

const Main = () => {
  return (
    <Box
      bg="transparent"
      width={{ base: "full", md: "lg", xl: "2xl" }}
      height="800px"
    >
      <CreatePost />
      <Flex
        alignItems="center"
        mt="2"
        mb="2"
        display={{ base: "none", sm: "flex", md: "flex", xl: "flex" }}
      >
        <Divider mr="2" flex="1" borderColor="#a8a8a8" />
        <div className={styles.sortText} flex="1">
          Sort by <b className={styles.boldText}> Recent</b>{" "}
          <MdOutlineArrowDropDown fontSize="20" />
        </div>
      </Flex>
      {users.map((user, index) => {
        return <Post key={index} user={user} />;
      })}
    </Box>
  );
};

export default Main;
