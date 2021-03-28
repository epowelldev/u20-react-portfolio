import { Box, Button, ButtonGroup, Grid, TextField } from "@material-ui/core";
import { Fragment } from "react";
import Header from "../layout/Header";

const ContactMe = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Fragment>
      { (props.title == "About Me") ? <Header title={"About Me"}/> : <Header title={"Contact Me"}/> }
      <br /><br />
      <form action="https://formspree.io/f/moqyayaz" method="POST">
        <Grid container>
          <Grid item xs={1} sm={2} />
          <Grid item container xs={10} sm={8} spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <ButtonGroup>
                  <Button variant="text" href="https://www.github.com/epowelldev">Github</Button>
                  <Button variant="text" disabled>777-777-7777</Button>
                  <Button variant="text" href="https://www.linkedin.com/in/erickson-powell-30a52b79/">LinkedIn</Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="contact-name"
                label="Name"
                name="contact-name"
                placeholder="Name"
                variant="outlined"
                InputLabelProps={{ shrink: true, }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="contact-email"
                label="Email"
                name="contact-email"
                placeholder="Email"
                variant="outlined"
                InputLabelProps={{ shrink: true, }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="contact-message"
                label="Message"
                name="contact-message"
                placeholder="Message"
                variant="outlined"
                InputLabelProps={{ shrink: true, }}
                multiline
                rows={6}
                fullWidth
              />
            </Grid>
            <Grid item xs={8} sm={10} />
            <Grid item xs={3} sm={1} >
              <Button variant="text" type="submit" onSubmit={handleSubmit} >Submit</Button>
            </Grid>
            <Grid item xs={1} sm={1} />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </form>
    </Fragment>
  );
};

export default ContactMe;
