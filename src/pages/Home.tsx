import "./Home.css";
import { Box, Link, Stack, Typography, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import homeImage from "../assets/home-image.png";

export const Navbar = () => {
  return (
    <Stack className="navigation" direction="row">
      <Typography
        className="branding"
        variant="h5"
        fontFamily="Outfit"
        component={Link}
        underline="none"
        href="/"
      >
        <b>
          Omoga <span className="nameDot">.</span>
        </b>
      </Typography>
      <Stack direction="row" spacing={5}>
        <Link underline="none" href="/home">
          Home
        </Link>
        <Link underline="none" href="/work">
          Work
        </Link>
        <Link underline="none" href="/projects">
          Projects
        </Link>

        <Link underline="none" href="/contacts">
          Contacts
        </Link>
      </Stack>

      <Button href="/contacts" variant="outlined" size="medium">
        Let's chat
      </Button>
    </Stack>
  );
};
const Home = () => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={7}>
          <Stack className="hero" spacing={6}>
            <Box className="branding">
              <Typography
                variant="h2"
                className="branding"
                fontFamily="ClashDisplayBold"
              >
                <b>
                  Hi! I Am <br />
                  Wayne Omoga
                </b>
              </Typography>
              <Typography fontFamily="ClashDisplaySemiBold" fontSize={18}>
                Software Engineer | Hobbyist photographer
              </Typography>
            </Box>

            <Typography fontSize={17} fontWeight={300}>
              Passionate about designing and delivering software <br />
              solutions that empower businesses and transforms industries.
            </Typography>
            <Stack direction="row" spacing={5}>
              <Button href="/contacts" variant="contained" size="large">
                Hire Me
              </Button>
              <Button size="large" href="/projects">
                <Typography marginRight={1}>Projects</Typography>
                <ArrowOutwardIcon />
              </Button>
            </Stack>
          </Stack>
          <Grid className="heroFooter" direction="row">
            <Grid item xs={6} sx={{ borderRight: "solid 2px rgb(0,0,0,.4)" }}>
              <Box sx={{ padding: "30px", paddingLeft: "0px" }}>
                <Typography marginBottom={1} fontSize={18}>
                  Contact
                </Typography>
                <Typography fontFamily="Montserrat">
                  omondio254@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Stack sx={{ padding: "30px", paddingLeft: "30px" }} spacing={1}>
                <Typography fontSize={18}>Socials</Typography>
                <Stack direction="row" spacing={2}>
                  <Link href="https://www.linkedin.com/in/omoga-omondi/">
                    <LinkedInIcon sx={{ color: "#0077B5" }} />
                  </Link>
                  <Link href="https://www.instagram.com/mwenye_kamera/">
                    <InstagramIcon sx={{ color: "#d62976" }} />
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{ borderBottom: "solid 2px rgb(0, 0, 0, 0.4)" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box height="70vh">
            <img
              src={homeImage}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
