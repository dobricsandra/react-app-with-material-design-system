import {
  Grid,
  Button,
  Container,
  Box,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import {
  LocationOn,
  MailOutline,
  PhoneAndroid,
  Language,
} from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        marginTop: "-80px",
        paddingTop: "180px",
        height: "100vh",
        backgroundImage:
          "url('https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg')",
      }}
    >
      <Container>
        <Grid container justifyContent="flex-end">
          <Box
            sx={{
              width: "80%",
              padding: "5% 10% 5% 30%",
              border: "1px solid grey",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              position: "relative",
            }}
          >
            <Typography component="h1" variant="h4">
              Get In Touch
            </Typography>
            <Typography component="h2" variant="h5">
              Feel free to drop us a line below.
            </Typography>
            <form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="E-mail"
                id="email"
              />
              <TextField
                multiline={true}
                minRows={5}
                margin="normal"
                required
                fullWidth
                name="content"
                label="Content"
                id="content"
              />
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Send
              </Button>
            </form>
            <Box
              color="white"
              bgcolor="#232121fa"
              sx={{
                position: "absolute",
                top: "5%",
                left: "-15%",
              }}
            >
              <Box
                sx={{
                  padding: "30px 20px",
                }}
              >
                <Typography component="h2" variant="h4" paddingBottom="20px">
                  Contact us
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={0}>
                    <LocationOn />
                    <Typography component="p" variant="body1">
                      Address Line 1, 10 000 Zagreb
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <MailOutline />
                    <Typography component="p" variant="body1">
                      mockedmail@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PhoneAndroid />
                    <Typography component="p" variant="body1">
                      09xxxxxxxxx
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Language />
                    <Typography component="p" variant="body1">
                      mockedwebsiteaddress.com
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <iframe
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0, width: "400px", height: "300px" }}
                allowFullScreen={true}
                aria-hidden={false}
                tabIndex={0}
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Container>
  );
};

export default ContactPage;
