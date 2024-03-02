import { Box, Link, Stack, Typography } from "@mui/material";
import { Navbar } from "./Home";
import emailGif from "../assets/beam.png";
import { ArrowOutwardSharp } from "@mui/icons-material";

const Contacts = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={10}
      >
        <Box height={300} width={300}>
          <img
            src={emailGif}
            height="100%"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Stack spacing={2}>
          <Typography fontSize={20}>
            Interested in working together? Lets chat, send me a message
          </Typography>
          <Typography variant="h5">Email : omondio254@gmail.com</Typography>
          <Typography variant="h5">
            <Link href="https://www.linkedin.com/in/omoga-omondi/">
              LinkedIn
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contacts;
