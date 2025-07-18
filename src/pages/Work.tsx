import {
  Avatar,
  Box,
  Chip,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import "./Work.css";
import { Navbar } from "./Home";
import PlaceIcon from "@mui/icons-material/Place";

const Work = () => {
  return (
    <Box>
      <Navbar />

      <Stack className="content" spacing={3}>
        <Box className="profile">
          <Typography variant="h5">Profile</Typography>
          <Typography>
            I am a skilled software engineer with a passion for crafting
            efficient, scalable, and user-centric solutions. With a solid
            background in computer science and several years of professional
            experience, I possesses a strong understanding of software
            development methodologies, algorithms, and data structures. I thrive
            in collaborative environments, being committed to delivering
            high-quality software products that meet both client requirements
            and industry standards.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Skills</Typography>
          <List>
            <ListItem>
              <Typography marginRight={2}>Programming Languages:</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="Python"></Chip>
                <Chip label="Java"></Chip>
                <Chip label="Javascript"></Chip>
                <Chip label="Typescript"></Chip>
              </Stack>
            </ListItem>
            <ListItem>
              <Typography marginRight={2}>Databases:</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="MySQL"></Chip>
                <Chip label="PostgreSQL"></Chip>
                <Chip label="MongoDB"></Chip>
              </Stack>
            </ListItem>
            <ListItem>
              <Typography marginRight={2}>Frameworks:</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="Django"></Chip>
                <Chip label="Node/Express"></Chip>
                <Chip label="React"></Chip>
                <Chip label="Flask"></Chip>
                <Chip label="Odoo"></Chip>
              </Stack>
            </ListItem>
            <ListItem>
              <Typography marginRight={2}>Cloud/Containerization</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="AWS"></Chip>
                <Chip label="Docker"></Chip>
                <Chip label="Kubernetes"></Chip>
              </Stack>
            </ListItem>
            <ListItem>
              <Typography marginRight={2}>Tools</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="Redis"></Chip>
                <Chip label="Git"></Chip>
                <Chip label="GraphQL"></Chip>
                <Chip label="Linux"></Chip>
              </Stack>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">Work experience</Typography>
          <Stack spacing={2} className="experience">
            <Grid container>
              <Grid item xs={2}>
                <Avatar>
                  <img
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://www.tint.ai/hs-fs/hubfs/Tint-logo-tm@4x.png?width=2138&height=604&name=Tint-logo-tm@4x.png"
                  ></img>
                </Avatar>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <Link href="https://www.tint.ai">
                    <Typography variant="h6">Tint AI</Typography>
                  </Link>
                  <Typography>Software Engineer</Typography>
                  <Typography variant="caption">2022 - 2024</Typography>
                  <Stack direction="row">
                    <PlaceIcon />
                    <Typography variant="body2">
                      Remote (San Fransisco)
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <List>
                  <ListItem>
                    Shipped Tint's API V3 - focused on improving functionality
                    of endpoints and building a bridge for data migration from
                    API V2 to API V3.
                  </ListItem>
                  <ListItem>
                    Implemented the Bookkeeping Initiative - responsible for
                    making sure Tint's claims & contracts data is consistent
                    with that of its customers - leading to better data
                    reliability.
                  </ListItem>
                  <ListItem>
                    Delievered Tint's Usage Based Initiative - a configuration
                    option on insurance programs that prices premiums depending
                    on a customer's usage of insured assets.
                  </ListItem>
                  <ListItem>
                    Shipped the API Validation Schema - a tool that allows
                    client developers to dynamically configure the valid
                    structure of the data they later send to the Tint API.
                  </ListItem>
                  <ListItem>
                    Implemented the redesign of multiple frontend components
                    spanning the validation schema, cases and contracts pages,
                    assets carousel and user input forms
                  </ListItem>
                  <ListItem>
                    Revamped the mid-level engineer interview test leading to
                    the acquisition of higher quality candidates.
                  </ListItem>
                  <ListItem>
                    Worked in collaboration with PMs, designers and other
                    engineers to brainstorm ideas on how to improve the client
                    onboarding process
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Stack>
          <Stack spacing={2} className="experience">
            <Grid container>
              <Grid item xs={2}>
                <Avatar>
                  <img
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://cdn.prod.website-files.com/62f62f25a5ab4c95150473af/65cb38410bbae3bef074a4ab_Traktion_byIDX.svg"
                  ></img>
                </Avatar>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Link href="https://traktion.ai">
                    <Typography variant="h6">Traktion</Typography>
                  </Link>
                  <Typography>Fullstack Developer</Typography>
                  <Typography variant="caption">2021 - 2022</Typography>
                  <Stack direction="row">
                    <PlaceIcon />
                    <Typography variant="body2">Remote (London)</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <List>
                  <ListItem>
                    Took part in building the Traktion platform from scratch by
                    migrating all development from Bubble (No Code) to Django &
                    React.
                  </ListItem>
                  <ListItem>
                    Developed RESTful API endpoints and terminal commands for
                    data transfer between the backend, frontend and Bubble for
                    quicker information delivery.
                  </ListItem>
                  <ListItem>
                    Leveraged GCP to create and restore database backups from
                    both production and staging DB on a schedule, thus
                    preventing future data loss.
                  </ListItem>
                  <ListItem>
                    Built a feature using Redis responsible for sending email
                    reminders to marketers and businesses an hour before
                    scheduled Zoom meetings.
                  </ListItem>
                  <ListItem>
                    Worked on and maintained multiple frontend components using
                    React and Redux for displaying/editing data to the final
                    user.
                  </ListItem>
                  <ListItem>
                    Performed bug fixes, code reviews and refactoring to reduce
                    technical debt and increase program efficiency.
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Stack>
          <Stack spacing={2} className="experience">
            <Grid container>
              <Grid item xs={2}>
                <Avatar>
                  <img
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://aiconex.com/wp-content/uploads/aiconex-logo-bloack.png"
                  />
                </Avatar>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Link href="https://aiconex.com/">
                    <Typography variant="h6">AIConex Solutions</Typography>
                  </Link>
                  <Typography>Software Engineer</Typography>

                  <Typography variant="caption">2020 - 2021</Typography>
                  <Stack direction="row">
                    <PlaceIcon />
                    <Typography variant="body2">Remote (Singapore)</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <List>
                  <ListItem>
                    Worked majorly on internal tools: <br />- A mail tracking
                    app for example that sends emails daily to thousands of
                    leads using Mailgun while tracking delivery status. Various
                    internal actions would then be initiated once the email is
                    opened. <br />- A 'drag and drop' equipment management
                    system to record and track resources assigned to each
                    employee
                  </ListItem>
                  <ListItem>
                    Took part in the development of The Preffered Investor, a
                    social investment platform for certified investors
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Stack>
          <Stack spacing={2} className="experience">
            <Grid container>
              <Grid item xs={2}>
                <Avatar>
                  <img
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://camo.githubusercontent.com/77d104f575df29b0764ee799ebde86ce42c861db6e6c2b28a1d0d1077e8271fb/68747470733a2f2f73332e68696b6179612e696f2f68696b6179612f68696b6179612d776f72646d61726b2d6c6f676f2e706e67"
                  />
                </Avatar>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <Link href="https://hikaya.io/">
                    <Typography variant="h6">Hikaya</Typography>
                  </Link>
                  <Typography>Open source contributor</Typography>

                  <Typography variant="caption"></Typography>
                  <Stack direction="row">
                    <PlaceIcon />
                    <Typography variant="body2">Remote </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <List>
                  <ListItem>
                    Worked on setting up the FormLibrary module, which was
                    responsible for enabling rapid data collection for field
                    teams
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Work;
