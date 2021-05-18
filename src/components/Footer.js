import { Grid } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <Grid
      placeItems="center"
      bg="orange"
      p="8"
      fontSize="xl"
      color="white"
      fontWeight="bold"
    >
      2021 © copyright @dosomecoding
    </Grid>
  );
};

export default Footer;
