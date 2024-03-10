import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import "./Projects.css";
import { Navbar } from "./Home";
import lilacLanding from "../assets/lilac-landing.png";
import sytchLanding from "../assets/sytch-landing.png";
import tafsiriGif from "../assets/tafsiri.gif";
import portfolioImage from "../assets/portfolio.png";
import reconciliatorImage from "../assets/reconciliator.png";
import pdf2JsonImage from "../assets/pdf2json.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface ProjectProps {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}
const Project = ({
  index,
  imageUrl,
  description,
  title,
  technologies,
  link,
}: ProjectProps) => {
  return (
    <Box className="projectContainer">
      <Grid container>
        <Grid item xs={1}>
          <Typography>0{index}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className="imageContainer">
            <img
              src={imageUrl}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Stack spacing={3} padding={5} paddingTop={0}>
            <Typography variant="h5" sx={{ borderBottom: "solid 2px black" }}>
              {title}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>Tech</Typography>
            <Stack direction="row" spacing={2}>
              {technologies.map((tech) => (
                <Chip label={tech} />
              ))}
            </Stack>
            <Button href={link} variant="contained" sx={{ marginTop: "50px" }}>
              <Typography>See live site</Typography>
              <ArrowOutwardIcon />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
const Projects = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box className="content">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Projects i've worked on</Typography>
          <Button
            variant="contained"
            href="https://github.com/the-krafty-koder"
          >
            More on Github
          </Button>
        </Stack>
        <Stack>
          <Project
            index={1}
            description="Terms of service management for startups and scaleups."
            imageUrl={lilacLanding}
            title="Lilac"
            technologies={[
              "Python",
              "Django",
              "React",
              "IBM Cloud Storage",
              "Typescript",
            ]}
            link="https://app.heylilac.com"
          />
          <Project
            index={2}
            description="Free subtitles download for your favourite tv shows in multiple languages."
            imageUrl={sytchLanding}
            title="Sytch"
            technologies={["React", "Typescript"]}
            link="https://sytch.ambitlabs.co"
          />
          <Project
            index={3}
            description="A tool that generates a report showing reconciliation errors between two csv files"
            imageUrl={reconciliatorImage}
            title="Reconciler"
            technologies={["Python", "Pandas"]}
            link="https://reconciler.ambitlabs.co"
          />
          <Project
            index={3}
            description="My portfolio"
            imageUrl={portfolioImage}
            title="Portfolio"
            technologies={["Typescript", "React"]}
            link="https://portfolio.ambitlabs.co"
          />
          <Project
            index={5}
            description="A python package that converts documents
            into JSON (displayed per page) and optionally sends them to Algolia as index records."
            imageUrl={pdf2JsonImage}
            title="Pdf2JSON"
            technologies={["Python", "PyPdf", "AlgoliaSearch"]}
            link="https://github.com/the-krafty-koder/pdf2json"
          />
          <Project
            index={4}
            description="Free subtitles download, but on the command line."
            imageUrl={tafsiriGif}
            title="Tafsiri"
            technologies={["Node", "Cheerio", "Figlet"]}
            link="https://github.com/the-krafty-koder/tafsiri"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Projects;
